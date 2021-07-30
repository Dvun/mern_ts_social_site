const apiError = (status, message) => {
  return {status, message};
};

module.exports = apiError;
