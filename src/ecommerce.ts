import express from 'express';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
const router = express.Router(); 

router.get('/products', async (req, res) => {
  const products = await db.product.findMany();
  res.json(products);
});

router.get('/users', async (req, res) => {
  const users = await db.user.findMany();
  res.json(users);
});

router.get('/orders', async (req, res) => {
  const orders = await db.order.findMany();
  res.json(orders);
});

export { router }; 