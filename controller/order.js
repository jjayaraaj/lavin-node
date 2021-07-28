const api = require("./../util/woocommerce");
const asyncMiddleware = require("./../middleware/async");

exports.postNewOrderCtrl = [
  asyncMiddleware(async (req, res, next) => {
    const data = req.body;
    const orderData = await api.get("orders", data);

    res.send(req.body);
  }),
];
