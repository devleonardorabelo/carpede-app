const express = require('express');
const routes = express.Router();

const AuthController = require('./controllers/AuthController');
const PanelController = require('./controllers/PanelController');
const ProfileController = require('./controllers/ProfileController');
const ProductsController = require('./controllers/ProductsController');
const CategoriesController = require('./controllers/CategoriesController');
const OrdersController = require('./controllers/OrdersController');
const SubscribeController = require('./controllers/SubscribeController');

const CheckAuth = require('./middlewares/auth');

routes.post('/signin', AuthController.signin);
routes.post('/signup', AuthController.signup);
routes.get('/panel', CheckAuth, PanelController.index);
routes.post('/panel', CheckAuth, PanelController.update);
routes.get('/profile', CheckAuth, ProfileController.index);
routes.post('/profile', CheckAuth, ProfileController.update);
routes.get('/products', CheckAuth, ProductsController.index);
routes.post('/products/new', CheckAuth, ProductsController.store);
routes.post('/products/edit', CheckAuth, ProductsController.update);
routes.post('/products/delete', CheckAuth, ProductsController.destroy);
routes.get('/loadcategories', CheckAuth, CategoriesController.indexAll)
routes.get('/categories', CheckAuth, CategoriesController.index);
routes.post('/categories/new', CheckAuth, CategoriesController.store);
routes.post('/categories/edit', CheckAuth, CategoriesController.update);
routes.post('/categories/delete', CheckAuth, CategoriesController.destroy);
routes.get('/orders', CheckAuth, OrdersController.index);
routes.post('/orders/notify', OrdersController.notify);
routes.post('/orders/edit', OrdersController.update);
routes.post('/orders/delete', OrdersController.destroy);
routes.post('/subscribe', SubscribeController.store);

module.exports = routes
 