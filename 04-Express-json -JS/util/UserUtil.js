import path from "path";
// import jsonfile from "jsonfile"
import jsonfile from "jsonfile";

export class USerUtil {
  static usersJsonPath ="D:/Nirali/BackEnd/04-Express-json -JS/db/users.json"
    // path.join(__dirname, "..", "db", "users.json");

   static getAllUsersFromDB() {
    return new Promise((resolve, reject) => {
      jsonfile.readFile(this.usersJsonPath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    }
}
