const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config()

const productsController = require('./controller/product') //продукт
const ordersController = require('./controller/order')//заказ



const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
    const loadMoreState = req.query.loadMore;//все что отправляем клиент
    productsController.getProducts(loadMoreState).then(data => res.json(data));// гет запрос для получения всех продуктов
});                                                             //res -все что получает клиент

app.get('/api/orders', (req, res) => {
    ordersController.getOrders().then(data => res.json(data));// гет для получения сделаных заказов
});

app.post('/api/order', (req, res) => {
    console.log('req.body', req.body);
    ordersController.createOrder(req.body.order).then(data => res.json(data)); //для создания заказа
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on a port  ${port}`);//запускает сервер
})