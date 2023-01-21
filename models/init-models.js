var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _countries = require("./countries");
var _customers = require("./customers");
var _departments = require("./departments");
var _employees = require("./employees");
var _job_history = require("./job_history");
var _jobs = require("./jobs");
var _locations = require("./locations");
var _order_detail = require("./order_detail");
var _orders = require("./orders");
var _products = require("./products");
var _regions = require("./regions");
var _shippers = require("./shippers");
var _supplier = require("./supplier");
var _users = require("./users");

//Buat Konfigurasi database pakai sequelize
import { Sequelize } from "sequelize";
const sequelize= new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect:"postgres",
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    }
  }
)


const initModels=(sequelize)=> {
  var categories = _categories(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var job_history = _job_history(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var shippers = _shippers(sequelize, DataTypes);
  var supplier = _supplier(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(products, { as: "products", foreignKey: "category_id"});
  locations.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(locations, { as: "locations", foreignKey: "country_id"});
  orders.belongsTo(customers, { as: "customer", foreignKey: "customer_id"});
  customers.hasMany(orders, { as: "orders", foreignKey: "customer_id"});
  employees.belongsTo(departments, { as: "department_department", foreignKey: "department_id"});
  departments.hasMany(employees, { as: "employees", foreignKey: "department_id"});
  job_history.belongsTo(departments, { as: "department", foreignKey: "department_id"});
  departments.hasMany(job_history, { as: "job_histories", foreignKey: "department_id"});
  departments.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(departments, { as: "departments", foreignKey: "manager_id"});
  employees.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(employees, { as: "employees", foreignKey: "manager_id"});
  orders.belongsTo(employees, { as: "employee", foreignKey: "employee_id"});
  employees.hasMany(orders, { as: "orders", foreignKey: "employee_id"});
  job_history.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(job_history, { as: "job_histories", foreignKey: "job_id"});
  departments.belongsTo(locations, { as: "location", foreignKey: "location_id"});
  locations.hasMany(departments, { as: "departments", foreignKey: "location_id"});
  countries.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(countries, { as: "countries", foreignKey: "region_id"});
  orders.belongsTo(shippers, { as: "shipper", foreignKey: "shipper_id"});
  shippers.hasMany(orders, { as: "orders", foreignKey: "shipper_id"});
  products.belongsTo(supplier, { as: "supplier", foreignKey: "supplier_id"});
  supplier.hasMany(products, { as: "products", foreignKey: "supplier_id"});

  return {
    categories,
    countries,
    customers,
    departments,
    employees,
    job_history,
    jobs,
    locations,
    order_detail,
    orders,
    products,
    regions,
    shippers,
    supplier,
    users,
  };
}

// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

const models= initModels(sequelize)

export default models
export{sequelize}