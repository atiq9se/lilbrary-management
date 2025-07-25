
import { model, Schema } from "mongoose"
import { IBooks } from "../interfaces/books.interface"

const bookSchema = new Schema<IBooks>({
    title: {type: String, required: true, trim: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    isbn: {type: Number, required: true},
    description:{type: String, required: true, trim: true},
    copies:{type: Number, required: true},
    available:{type: Boolean, required: true}
},
{
    versionKey: false,
    timestamps: true
})

export const Book = model<IBooks>("Book", bookSchema)