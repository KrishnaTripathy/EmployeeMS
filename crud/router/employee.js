import { Router } from "express";
import { createEmployee, findAllEmployee, findEmployeeById, findEmployeeByIdAandDelete, findEmployeeByIdAandUpdate, login } from "../controller/employee.js";

const router=Router();
router.post('/create',createEmployee);
router.get('/employee/:id',findEmployeeById);
router.get('/employees',findAllEmployee);
router.delete('/employee/:id',findEmployeeByIdAandDelete);
router.put('/employee/:id',findEmployeeByIdAandUpdate);
router.post('/login',login);
export default router;