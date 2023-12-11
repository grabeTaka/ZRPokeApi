/* eslint-disable require-await */
import express, { Request, Response, NextFunction } from 'express'
const router = express.Router()

router
    .route('/')
    .post(async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json([])
        } catch (e) {
            res.status(500).json({
                code: 500,
                message: e.message,
            })
            next(e)
        }
    })

export default router
