import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { PastryModel as Pastry } from '../models/pastry';
import mongoose from "mongoose";

async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/yummi-yams')

        await Pastry.deleteMany({});
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const filePath = join(__dirname, "pastries_data", "pastries.json");
        const data = fs.readFileSync(filePath, 'utf8');
        const pastries = JSON.parse(data);

        const result = await Pastry.insertMany(pastries);
        console.log(`${result.length} pastries have been successfully saved.`);
    } catch (error) {
        console.error('Failed to import pastries:', error);
    }
}

main();
