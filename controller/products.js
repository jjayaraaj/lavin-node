const api = require("./../util/woocommerce");
const asyncMiddleware = require("./../middleware/async");

exports.productsCtrl = async (req, res, next) => {
  try {
    const { featured, per_page = 10 } = req.query;

    console.log("FEATURED", featured, per_page);

    const products = await api.get("products", {
      per_page: per_page,
      featured: featured, // 20 products per page
    });
    res.send(products.data);
  } catch (ex) {
    res.send(ex);
  }

  // const test = await api.get("products", {
  //     per_page: 1, // 20 products per page
  //   });

  //   const data = test;

  //  res.send(data)

  // api.get("products", {
  //     per_page: 1, // 20 products per page
  //   })
  //     .then((response) => {
  //       // Successful request
  //       console.log("Response Status:", response.status);
  //       console.log("Response Headers:", response.headers);
  //       console.log("Response Data:", response.data);
  //       console.log("Total of pages:", response.headers['x-wp-totalpages']);
  //       console.log("Total of items:", response.headers['x-wp-total']);
  //       res.send(response.data)

  //     })
  //     .catch((error) => {
  //       // Invalid request, for 4xx and 5xx statuses
  //       console.log("Response Status:", error.response.status);
  //       console.log("Response Headers:", error.response.headers);
  //       console.log("Response Data:", error.response.data);
  //     })
  //     .finally(() => {
  //       // Always executed.
  //     });
};

exports.featuredCtrl = [
  asyncMiddleware(async (req, res, next) => {
    const { featured, per_page } = req.query;

    const test = await api.get("products", {
      per_page: per_page, // 20 products per page
    });

    res.send(test.data);
  }),
];

exports.categoriesCtrl = [
  asyncMiddleware(async (req, res, next) => {
    const { categoryId, per_page } = req.query;

    const test = await api.get("products/categories", {
      per_page: per_page, // 20 products per page
    });

    res.send(test.data);
  }),
];

exports.categoryProductCtrl = [
  asyncMiddleware(async (req, res, next) => {
    // return res.json("new");

    const { categoryId, per_page } = req.query;

    const products = await api.get(`products/?category=${categoryId}`, {
      per_page: per_page, // 20 products per page
    });

    res.send(products.data);
  }),
];
