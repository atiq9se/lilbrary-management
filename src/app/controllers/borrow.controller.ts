
import express, { Request, Response } from "express";
import { Borrow } from "../models/borrow.models";

export const borrowsRoutes = express.Router();

borrowsRoutes.post('/', async (req: Request, res: Response)=>{
    const body = req.body
    const data = await Borrow.create(body)
    
    res.status(201).json({
        success: true,
        message: "Book borrow created successfully",
        data
    })
})



