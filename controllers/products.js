const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  //   const products = await Product.find({}).sort({ name: 1 });
  const products = await Product.find({}).select("name price");

  res.status(200).json({ products, nbHiits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      "<": "$lt",
      ">=": "$gte",
      "<=": "$lte",
      "=": "$eq",
    };
    const regEx = /\b(<|>|>=|<=|=)\b/g;
    const filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters.split(",").forEach((filter) => {
      const [field, operator, value] = filter.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  let results = Product.find(queryObject);
  if (sort) {
    const sortBy = sort.split(",").join(" ");
    results = results.sort(sortBy);
  } else {
    results = results.sort("-createdAt");
  }
  if (fields) {
    const fieldsArray = fields.split(",").join(" ");
    results = results.select(fieldsArray);
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  results = results.skip(startIndex).limit(limit);
  const products = await results;
  res.status(200).json({ products, nbHiits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
