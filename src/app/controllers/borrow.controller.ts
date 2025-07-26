
import express, { Request, Response } from "express";
import { Borrow } from "../models/borrow.models";

export const borrowsRoutes = express.Router();

borrowsRoutes.post('/', async (req: Request, res: Response)=>{
    const body = req.body
    const data = await Borrow.create(body)
    
    res.status(201).json({
        success: true,
        message: "Book borrowed successfully",
        data
    })
})

borrowsRoutes.get('/', async (req: Request, res: Response)=>{
   try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" }
        }
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails"
        }
      },
      {
        $unwind: "$bookDetails"
      },
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookDetails.title",
            isbn: "$bookDetails.isbn"
          },
          totalQuantity: 1
        }
      }
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching summary",
      error
    });
  }
})

