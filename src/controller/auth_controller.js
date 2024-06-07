import * as service from "../service";

const login = async (req, res) => {
  try {
    const response = await service.login();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      data: null,
      message: "Login failed !",
    });
  }
};

const userProfile = async (req, res) => {
  try {
    const response = await service.userProfile();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      data: null,
      message: "User profile failed !",
    });
  }
};

const logout = (req, res) => {
  return res.send({
    message: "Success",
    data: null,
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
