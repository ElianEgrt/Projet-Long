// Log requests and responses in console
let logger = (req, res, next) => {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  let log = `[${formatted_date}] ${method}:${url} ${status}`;
  console.log(log);
  next();
};

module.exports = logger;