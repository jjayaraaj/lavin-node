const api = require("./../util/woocommerce");
const asyncMiddleware = require("./../middleware/async");

exports.loginCtrl = [
  async (req, res, next) => {
    //res.json(req.body);
    const { username, password } = req.body;
    try {
      const authentication = await api.get(
        `api/auth/generate_auth_cookie/?username=${username}&password=${password}`
      );
    } catch (ex) {
      console.log(ex);
    }

    //
  },
];

exports.loginCtrsl = [
  asyncMiddleware(async (req, res, next) => {
    //res.json(req.body);
    const { username, password } = req.body;
    const authentication = await api.get(
      `auth/generate_auth_cookie/?username=${username}&password=${password}`
    );

    console.log(authentication);
  }),
];
