// -------- ЗАДАНИЕ 1 --------
export function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, item) => acc + item, 0)
}

// -------- ЗАДАНИЕ 2 --------
export type User = {
  name: string
  age: number
  isActive: boolean
}

export function createUser(name: string, age: number, isActive: boolean = true): User {
  return { name, age, isActive }
}

// -------- ЗАДАНИЕ 3 --------
export enum OrderStatus {
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled'
}

export function getOrderStatus(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.Pending:
      return 'Замовлення очікує на обробку'
    case OrderStatus.Shipped:
      return 'Замовлення було відправлено'
    case OrderStatus.Delivered:
      return 'Замовлення доставлено'
    case OrderStatus.Cancelled:
      return 'Замовлення скасовано'
    default:
      throw new Error('Невідомий статус замовлення')
  }
}