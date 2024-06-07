import db from "../database/models";

export const login = () =>
  new Promise((resolve, reject) => {
    try {
      resolve("login api");
      console.log("login o day");
    } catch (error) {
      reject(error);
    }
  });
