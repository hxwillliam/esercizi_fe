type UserType = {
    username: string;
    password: string;
    status: number;
    permissions: string[];
} | undefined;

type OrderType = {
    id: number;
    user: UserType;
    iva: number;
    imponibile: number;
    total: number;
    products: string[];
}

const user1: UserType = {
    username: 'hxwilliam',
    password: 'user',
    status: 1,
    permissions: ['read', 'write', 'delete']
}

const order1: OrderType = {
    id: 1,
    user: user1,
    iva: 22,
    imponibile: 100,
    total: 122,
    products: ['product1', 'product2']
}

const order2: OrderType = {
    id: 2,
    user: undefined,
    iva: 22,
    imponibile: 80,
    total: 244,
    products: ['product3', 'product4']
}

const order3: OrderType = {
    id: 3,
    user: user1,
    iva: 22,
    imponibile: 100,
    total: 78,
    products: ['product1']
}

const orders: OrderType[] = [order1, order2, order3];

function printUserOrder(user: UserType, orders: OrderType[]): void {
    const userOrders = orders.filter(order => order.user === user);
    console.log(user!.username);
    userOrders.forEach(order => {
        const { id, iva, imponibile, total, products } = order;
        console.log({ id, iva, imponibile, total, products });
    });
}

printUserOrder(user1, orders);