
import express, { Request, Response } from "express";
import { Book } from "../models/books.models";

export const booksRoutes = express.Router();

booksRoutes.post('/', async (req: Request, res: Response)=>{
    const body = req.body
    
    // notesRoutesroach -1  of creating a data
    // const myNote = new Note({
    //     title: "Learning Mongoose",
    //     content: "i am learning mongooose"
    // })

    // await myNote.save()

    const book = await Book.create(body)
    
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        book
    })
})

booksRoutes.get('/', async (req: Request, res: Response)=>{
    const note = await Book.find().populate('user')
    
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    })
})

booksRoutes.get('/:noteId', async (req: Request, res: Response)=>{
    const noteId = req.params.noteId
    const note = await Book.findById(noteId)
    
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    })
})

booksRoutes.patch('/:noteId', async (req: Request, res: Response)=>{
    const noteId = req.params.noteId
    const updateBody = req.body;
    const note = await Book.findByIdAndUpdate(noteId, updateBody, {new:true})
    // const note1 = await Note.findOneAndUpdate({_id: noteId}, updateBody, {new:true})
    // const note2 = await Note.updateOne({_id: noteId}, updateBody, {new:true})
    
    res.status(201).json({
        success: true,
        message: "Note update successfully",
        note
    })
})

booksRoutes.delete('/:noteId', async (req: Request, res: Response)=>{
    const noteId = req.params.noteId
    const updateBody = req.body;
    const note = await Book.findByIdAndDelete(noteId)
    // const note1 = await Note.findOneAndDelete({_id: noteId})
    // const note2 = await Note.deleteOne({_id: noteId})
    
    res.status(201).json({
        success: true,
        message: "Note delete successfully",
        note
    })
})