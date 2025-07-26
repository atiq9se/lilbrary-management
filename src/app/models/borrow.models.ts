import { model, Schema } from "mongoose"
import { IBorrows } from "../interfaces/borrow.interface"
import { Book } from "./books.models";

const borrowSchema = new Schema<IBorrows>({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: {type: Date, required: true}
},
{
    versionKey: false,
    timestamps: true
})

borrowSchema.pre('save', async function (next) {
  const book = await Book.findById(this.book);
  if (!book) return next(new Error('Book not found'));

  if (book.copies < this.quantity) {
    return next(new Error('Not enough copies available'));
  }

  book.copies -= this.quantity;
  if (book.copies === 0) book.available = false;
  await book.save();
  next();
});

export const Borrow = model<IBorrows>("Borrow", borrowSchema)