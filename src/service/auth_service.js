import db from "../database/models";

export const login = () =>
  new Promise((resolve, reject) => {
    try {
      resolve({
        message: "Success",
        data: {
          accessToken: "ashdj̉́&̉̃*̉́&als@AKJSJDLJAJajsdklkj@%̉e@!@JLJF",
          refreshToken: "ASFLKJALKSFJLKJakjsjfdalkjsfajslfjaAKJA",
        },
      });
    } catch (error) {
      reject(error);
    }
  });

export const userProfile = () =>
  new Promise((resolve, reject) => {
    try {
      resolve({
        message: "Success",
        data: {
          name: "Nguyen The Nao",
          email: "nthoang1308@gmail.com",
          avatarUrl: "https://picsum.photos/1921/1086",
          birthday: "13/08/1995",
          gender: 1,
        },
      });
    } catch (error) {
      reject(error);
    }
  });
