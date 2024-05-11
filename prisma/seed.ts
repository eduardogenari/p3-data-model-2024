import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const user1 = await db.user.create({ data: { username: "User1" } });
const user2 = await db.user.create({ data: { username: "User2" } });
const user3 = await db.user.create({ data: { username: "User3" } });
const user4 = await db.user.create({ data: { username: "User4" } });
const user5 = await db.user.create({ data: { username: "User5" } });


const product1 = await db.product.create({ data: { name: "Product1", price: 10.0 } });
const product2 = await db.product.create({ data: { name: "Product2", price: 20.0 } });
const product3 = await db.product.create({ data: { name: "Product3", price: 30.0 } });
const product4 = await db.product.create({ data: { name: "Product4", price: 40.0 } });
const product5 = await db.product.create({ data: { name: "Product5", price: 50.0 } });

const order1 = await db.order.create({
  data: {
    quantity: 2,
    user: { connect: { userId: user1.userId } },
    product: { connect: { productId: product1.productId } },
  },
});

const order2 = await db.order.create({
  data: {
    quantity: 1,
    user: { connect: { userId: user2.userId } },
    product: { connect: { productId: product2.productId } },
  },
});

const order3 = await db.order.create({
  data: {
    quantity: 3,
    user: { connect: { userId: user3.userId } },
    product: { connect: { productId: product3.productId } },
  },
});

const order4 = await db.order.create({
  data: {
    quantity: 1,
    user: { connect: { userId: user4.userId } },
    product: { connect: { productId: product4.productId } },
  },
});

const order5 = await db.order.create({
  data: {
    quantity: 2,
    user: { connect: { userId: user1.userId } },
    product: { connect: { productId: product5.productId } },
  },
});
