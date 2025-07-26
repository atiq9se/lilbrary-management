
import express, { Request, Response } from "express";
import { Book } from "../models/books.models";

export const booksRoutes = express.Router();

booksRoutes.post('/', async (req: Request, res: Response)=>{
    const body = req.body
    const data = await Book.create(body)
    
    res.status(201).json({
        success: true,
        message: "Book created successfully",
        data
    })
})

booksRoutes.get('/', async (req: Request, res: Response)=>{
    const data = await Book.find()
    
    res.status(201).json({
        success: true,
        message: "Books retrieved successfully",
        data
    })
})

booksRoutes.get('/:bookId', async (req: Request, res: Response)=>{
    const bookId = req.params.bookId
    const data = await Book.findById(bookId)
    
    res.status(201).json({
        success: true,
        message: "Book retrieved successfully",
        data
    })
})

booksRoutes.patch('/:bookId', async (req: Request, res: Response)=>{
    const bookId = req.params.bookId
    const updateBody = req.body;
    const data = await Book.findByIdAndUpdate(bookId, updateBody, {new:true})
    
    res.status(201).json({
        success: true,
        message: "Book updated successfully",
        data
    })
})

booksRoutes.delete('/:bookId', async (req: Request, res: Response)=>{
    const bookId = req.params.bookId
    const data = await Book.findByIdAndDelete(bookId)
    
    res.status(201).json({
        success: true,
        message: "Book deleted successfully",
        data
    })
})