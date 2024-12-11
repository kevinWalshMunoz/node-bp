/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';
import { DEBUG_TRACE } from '../globals';

export async function readFile<T>(filePath: string): Promise<T> {
    const absolutePath = path.resolve(filePath);
    const data = await fs.promises.readFile(absolutePath, 'utf8');
    return JSON.parse(data);
}

export function convertBufferToJson<T>(message: Buffer): T | null {
    try {
        return JSON.parse(JSON.stringify(message.toString('utf-8')));
    } catch (error) {
        if (DEBUG_TRACE) {
            console.error('Error parsing buffer to JSON:', error);
        }
        return null;
    }
}

export const isValidJson = (data: any): boolean => {
    try {
        JSON.parse(JSON.stringify(data));
        return true;
    } catch (error) {
        return false;
    }
};
