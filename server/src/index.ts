import express from 'express';
import cors from 'cors'
import type { Request, Response } from 'express';
import authRoutes from './routes/auth.routes.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)

app.get('/api/health', (req: Request, res: Response) => {
    res.json({
        message: "Welcome to server.",
        success: true
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running port: ${PORT}`)
})