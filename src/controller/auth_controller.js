const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.send({
      message: "Login failed",
      data: null,
    });
  }

  return res.send({
    message: "Success",
    data: {
      accessToken: "ashdj̉́&̉̃*̉́&als@AKJSJDLJAJajsdklkj@%̉e@!@JLJF",
      refreshToken: "ASFLKJALKSFJLKJakjsjfdalkjsfajslfjaAKJA",
    },
  });
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

module.exports = {
  login,
  logout,
  userProfile,
  refreshToken,
};
