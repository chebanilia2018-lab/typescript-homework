import { sumArray, createUser, OrderStatus, getOrderStatus } from './homework.js';

console.log('#19. TypeScript homework example file')

// проверка задания 1
console.log(sumArray([1, 2, 3, 4]))
console.log(sumArray([]))

// проверка задания 2
const userExample = createUser('Анна', 25)
console.log(userExample)

// проверка задания 3
console.log(getOrderStatus(OrderStatus.Pending))
console.log(getOrderStatus(OrderStatus.Shipped))
console.log(getOrderStatus(OrderStatus.Delivered))
console.log(getOrderStatus(OrderStatus.Cancelled))