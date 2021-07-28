const api = require("./../util/woocommerce");
const asyncMiddleware = require("./../middleware/async");

exports.customerDetailsCtrl = [
  asyncMiddleware(async (req, res, next) => {
    const { email } = req.body;
    const customerDetails = await api.get("customers", {
      email: email,
    });
    console.log(customerDetails);
    res.send(customerDetails.data);
  }),
];
