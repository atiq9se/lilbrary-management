import { model, Schema } from "mongoose"
import { IBorrows } from "../interfaces/borrow.interface"

const borrowSchema = new Schema<IBorrows>({
    book: {type: String, required: true, trim: true},
    quantity: {type: Number, required: true},
    dueDate: {type: Date, required: true}
},
{
    versionKey: false,
    timestamps: true
})

export const Borrow = model<IBorrows>("Borrow", borrowSchema)