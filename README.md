# i Survived: Capstone Project for Digital Crafts
### An app to help people manage medications after a heart attack

![Screenshot of Project](https://maryella.dev/images/screenshot_isurvived.png)

React | Express | Node | PostgreSQL | JSON | Web Token | Bootstrap

### The Premise
Heart disease is the leading cause of death among Americans. Luckily, there is fairly good evidence showing certain can help people who have had heart attacks live longer, healthier lives. However, there are four main types of drugs recommended for most people after a heart attack. It's easy to see why people may feel overwhelmed by all these new medications. Addtionally, our health care providers may not have time to explain each medication and why it's important. 

This app is designed to help walk people through their new medications. It provides information about each drug class, including why it's important after a heart attack, then has the user input the drug and dose information for their particular drug in the class. If the user is not taking one of these medications, they can ask their prescriber why not and make a note of why they are not taking such an important drug.

### The Tech
#### API
Routes were set up using Express/Node. Routes used to display sensitive materials, ie user information, were secured by verifying a JSON web token that was created on successful user log-in. The token is destroyed upon logout, making those routes inaccessible.
Users' medication information was stored in a PostgreSQL database, which was able to be successfully hosted both on AWS RDS and on the local machine. 
User login credentials were also stored in the database. Though this is definitely not ideal for security purposes, especially for potential protected health information (PHI), it seemed sufficient for proof of concept. There were no passwords stored in plain text (stored passwords were encryped and decrypted using bcrypt.js), and each user had an individual table of their health data with no personally identifiable data. One table per user would not be practical for production, but worked for demo purposes. 
#### Client Side
The front in was built using React components for each aspect of the app. Logged-in state for the view side was managed via the (new) Context API. The navbar also double checked the signed-in status via a backend route to check for the appropriate JSON web token (changing the state to logged out if not present). To add a drug, the user must simply select their drug name from the drop down list, which then makes available the dropdown of appropriate strengths and dosages, allowing the user to continue adding the details of their medication. Customizing forms this way was definitely a challenge, but worth it to minimize errors/user confusion. 

#### Potential Future Improvements
Data:
Currently, data about medications (name, strength, frequency) is pulled from the JSON data used to populate the form, but then is stored statically in a users table. If the data available to populate the form changes (say, to correct a typo in a medication name), the data in the user profile remains unchanged. Ideally, the data to populate the form and the users medication data would come from the same source.
Security:
Ideally, user management and authentication would be transitioned to a third party. Not being a security expert, I would feel more comfortable if my database did not contain any sensitive or personally identifiable data such as emails and passwords.
On the Go:
1. Developing a "Print" feature to allow users to have a hard copy of their information to take with them to medical providers. 
2. Creating a mobile app to have the service available on the go.
