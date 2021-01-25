import express from 'express';
import { getMenu, addMenuItem } from '../controllers/menu.js';

const router = express.Router();

// Get all menu items
router.get('/', getMenu);
router.post('/', addMenuItem);

export default router;