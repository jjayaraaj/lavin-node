const express = require("express");
const helmet = require("helmet");
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const cors = require("./middleware/cors");

const productsRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
const authRouter = require("./routes/auth");
const customerRouter = require("./routes/customer");
const orderRouter = require("./routes/order");
//require('express-async-errors');

const { handleError } = require("./util/error");

const app = express();

app.use(helmet());
//to retrive all requset data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
app.use(cors);

//router
// app.use("/api/user", userRouter);

// List products
app.use("/products", productsRouter);
app.use("/category", categoryRouter);

//Auth
app.use("/auth", authRouter);

app.use("/customer", customerRouter);

app.use("/order", orderRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listenixng in ${port}...`);
});
