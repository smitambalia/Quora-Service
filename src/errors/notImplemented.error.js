const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class NotImplementedError extends BaseError {
  constructor(methodName) {
    super(
      "NotImplementedErro",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} method is not implemented`,
      {}
    );
  }
}

module.exports = NotImplementedError;
