import * as service from "../service";

const login = async (req, res) => {
  try {
    const response = await service.login();
    return res.status(200).json({
      message: "Success",
      data: {
        accessToken: "ashdj̉́&̉̃*̉́&als@AKJSJDLJAJajsdklkj@%̉e@!@JLJF",
        refreshToken: "ASFLKJALKSFJLKJakjsjfdalkjsfajslfjaAKJA",
      },
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      message: "Login failed !",
    });
  }
};

const userProfile = (req, res) => {
  return res.send({
    message: "Success",
    data: {
      name: "Nguyen The Nao",
      email: "nthoang1308@gmail.com",
      avatarUrl: "https://picsum.photos/1921/1086",
      birthday: "13/08/1995",
      gender: 1,
    },
  });
};

const logout = (req, res) => {
  return res.send({
    message: "Success",
    data: {
      accessToken: "ashdj̉́&̉̃*̉́&als@AKJSJDLJAJajsdklkj@%̉e@!@JLJF",
      refreshToken: "ASFLKJALKSFJLKJakjsjfdalkjsfajslfjaAKJA",
    },
  });
};

const refreshToken = (req, res) => {
  return res.send({
    message: "Success",
    data: {
      accessToken: "HPLMNCnjkasndalksdlkjlknljasdasda@!asd",
      refreshToken: "KALSDHKJKJ@8549q3jKJAH̉̀@kjahsdHAsdaQ2las",
    },
  });
};

export default {
  login,
  logout,
  userProfile,
  refreshToken,
};
