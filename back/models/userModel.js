const db = require("./conn");
const bcrypt = require("bcryptjs");
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  checkPassword(hashedPassword) {
    return bcrypt.compareSync(this.password, hashedPassword);
  }
  async login() {
    try {
      const response = await db.one(`SELECT * FROM users WHERE email = $1;`, [
        this.email
      ]);
      const isValid = this.checkPassword(response.password);
      if (!!isValid) {
        const { id, name } = response;
        console.log("user model login id", id);
        return { isValid, id, name };
      } else {
        return { isValid };
      }
    } catch (error) {
      return error.message;
    }
  }

  async saveNewUser() {
    try {
      console.log("save new user");
      const response = await db.one(
        `INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING id;`,
        [this.name, this.email, this.password]
      );

      if (!response.id) {
        return "Email address already has account";
      }
      await db.none(
        `CREATE TABLE medlist_id${response.id} (
              classname VARCHAR(50),
              drugname VARCHAR(50),
              strength VARCHAR,
              quantity VARCHAR,
              frequency VARCHAR,
              time VARCHAR,
              comments VARCHAR,
              formulation VARCHAR,
              updateroute VARCHAR
          );`
      );
      return "success";
    } catch (error) {
      return error.message;
    }
  }

  static async getAll() {
    try {
      const response = await db.any(`SELECT name, email FROM users;`);
      console.log("response", response);
      return response;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = User;
