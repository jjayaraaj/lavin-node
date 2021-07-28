const GeneralError = require("./../util/error");

const handleErrors = (err, req, res, next) => {
  //console.log(GeneralError);
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: err.message,
  });
};

module.exports = handleErrors;
