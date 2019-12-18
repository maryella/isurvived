const db = require("./conn");

class MedList {
  constructor(
    user_id,
    classname,
    drugname,
    strength,
    quantity,
    frequency,
    timing,
    comments,
    formulation,
    update_route
  ) {
    this.user_id = user_id;
    this.classname = classname;
    this.drugname = drugname;
    this.strength = strength;
    this.quantity = quantity;
    this.frequency = frequency;
    this.timing = timing;
    this.comments = comments;
    this.formulation = formulation;
    this.update_route = update_route;
  }

  async addMed(id) {
    try {
      const user_id = id;
      const response = db.any(
        `INSERT INTO medlist_id${id} (classname, drugname, strength, quantity, frequency, time, comments, formulation, updateroute)
                                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
        [
          this.classname,
          this.drugname,
          this.strength,
          this.quantity,
          this.frequency,
          this.timing,
          this.comments,
          this.formulation,
          this.update_route
        ]
      );
      return "success";
    } catch (error) {
      return error.message;
    }
  }

  async updateMed(id) {
    try {
      const user_id = id;
      console.log("update med userid", user_id);
      const response = db.none(
        `UPDATE medlist_id${id} set drugname=$2, strength=$3, quantity=$4, frequency=$5, time=$6, comments=$7, formulation=$8
 
      WHERE classname=$1
                                        ;`,
        [
          this.classname,
          this.drugname,
          this.strength,
          this.quantity,
          this.frequency,
          this.timing,
          this.comments,
          this.formulation
        ]
      );
      return "success";
    } catch (error) {
      return error.message;
    }
  }

  static async getAllMeds(id) {
    try {
      const response = await db.any(`SELECT * FROM medlist_id${id};`);
      // console.log("all meds response:", response);
      return response;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = MedList;
