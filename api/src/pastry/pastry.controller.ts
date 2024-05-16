import { PastryRead, } from "./pastry.types";
import { type Request, type Response } from "express";
import { PastryModel } from "../models/pastry";

export async function getPastries(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        const pastriesData: PastryRead = req.body

        const pastries = await PastryModel.find(
            {
                ...pastriesData
            }
        )

        if (!pastries) {
            res.status(404).json({ message: 'Pastries not found' });
        }

        res.status(200).json(pastries);
    } catch (err) {
        console.error('Error getting pastries:', err);
        res.status(500).json({ message: 'Error getting pastries', err });
    }
}
export async function getNoPastry(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        const pastriesData: PastryRead = req.body;

        const pastries = await PastryModel.find(pastriesData);

        const allOutOfStock = pastries.every(pastry => pastry.stock === 0);

        if (allOutOfStock) {
            res.status(200).json({ message: 'All pastries are out of stock', allOutOfStock: true });
        } else {
            res.status(200).json({ message: 'Not all pastries are out of stock', allOutOfStock: false });
        }
    } catch (err) {
        console.error('Error checking pastry stock:', err);
        res.status(500).json({ message: 'Error checking pastry stock', err });
    }
}
