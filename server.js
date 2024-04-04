// const express = require('express');
import express from 'express';
const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// async function main(){
// prisma.user.create({
//     data: {
//         email: "kulwinder.singh8823@gmail.com",
//         name: "Kulwinder",
//     }
// })
// }
// main();

import userRouter from "./routers/userRouter.js";
app.use("/users", userRouter);



app.listen(3000, ()=> console.log("server is running"));