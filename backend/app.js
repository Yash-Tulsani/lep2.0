
// core Modules
import userRoutes from "./Routes/userRoutes.js"
import orderRoutes from "./Routes/orderRoutes.js"
import searchRoutes from "./Routes/searchRoutes.js"

import path from 'path';
import express from "express";

import database from './database.js';
import Employee from './public/models/employee.js';
import Employer from './public/models/employer.js';
import Booking from './public/models/order.js';
import Admin from './public/models/admin.js';



database();

const app = express();


app.use(express.urlencoded({ extended: false }));


app.use(express.json());





app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/find', searchRoutes)


app.listen(5000, () => {
    console.log("Server is started at 5000");
})
