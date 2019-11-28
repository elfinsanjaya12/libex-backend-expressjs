const db = require("../Configs/db");

module.export = {
  borrowBook: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO transaction SET ?", [body], (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  }
};
