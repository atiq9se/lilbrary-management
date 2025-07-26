import express, { Application, Request, Response } from 'express';
import { booksRoutes } from './app/controllers/books.controller';
import { borrowsRoutes } from './app/controllers/borrow.controller';

const app: Application = express();

app.use(express.json())

app.use('/api/books', booksRoutes)
app.use('/api/borrows', borrowsRoutes)

app.get('/', (req: Request, res: Response)=>{
    res.send('welcome to library mangament app')
})
export default app;