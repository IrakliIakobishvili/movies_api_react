const User = require("../models/user");

module.exports = {
  getProfile: async (req, res, next) => {
    let loggedUser = await User.findOne({ _id: req.user.id });
    switch (loggedUser.method) {
      case "local":
        loggedUser = loggedUser["local"];
        break;
      case "google":
        loggedUser = loggedUser["google"];
        break;
      case "facebook":
        loggedUser = loggedUser["facebook"];
        break;
      default:
        loggedUser;
    }
    res.status(200).json({ profile: loggedUser.email });
  }
};
