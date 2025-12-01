import { Request, Response, NextFunction } from 'express';
import { items, Item } from '../models/item';

// Create an item
export const createItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const newItem: Item = { id: Date.now(), name };
    items.push(newItem);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

// Read all items
export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.info(req);
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const getItemById = (req: Request, res: Response, next: NextFunction) =>{
    const { name } = req.body
    try{
        res.json(items.filter((item) => item.name === name))
    }
    catch (error){
        next(error)
    }
}
