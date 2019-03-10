if (process.env.NODE_ENV === "test") {
  module.exports = {
    JWT_SECRET: "mysecretkey",
    oauth: {
      google: {
        clientID:
          "966770059798-7tgeua415rps8d6uskufo7ankegctepo.apps.googleusercontent.com",
        clientSecret: "UYDP1oDnO2Ip7HEDFvvi5tpr"
      },
      facebook: {
        clientID: "257448101812238",
        clientSecret: "31848bd33475bd46a1a60451e2822013"
      }
    }
  };
} else {
  module.exports = {
    JWT_SECRET: "secret",
    oauth: {
      google: {
        clientID:
          "966770059798-7tgeua415rps8d6uskufo7ankegctepo.apps.googleusercontent.com",
        clientSecret: "UYDP1oDnO2Ip7HEDFvvi5tpr"
      },
      facebook: {
        clientID: "257448101812238",
        clientSecret: "31848bd33475bd46a1a60451e2822013"
      }
    }
  };
}
