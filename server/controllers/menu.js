import Menu from '../models/menu.js';

export const getMenu = async (req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).json(menu);

    } catch (err) {
        res.status(404).json({ message: err.message });

    }
}

export const addMenuItem = async (req, res) => {
    const menuItem = req.body;
    const newMenuItem = new Menu(menuItem);

    try {
        await newMenuItem.save()
        res.status(201).json(newMenuItem);

    } catch (err) {
        res.status(409).json({ message: err.message });

    }
}