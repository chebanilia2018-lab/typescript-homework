// -------- ЗАДАНИЕ 1 --------
function sumArray(numbers) {
    const result = numbers.reduce((acc, item) => {
        return acc + item;
    }, 0);
    return result;
}
function createUser(name, age, isActive = true) {
    const user = {
        name: name,
        age: age,
        isActive: isActive
    };
    return user;
}
// -------- ЗАДАНИЕ 3 --------
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            return 'Замовлення очікує на обробку';
        case OrderStatus.Shipped:
            return 'Замовлення було відправлено';
        case OrderStatus.Delivered:
            return 'Замовлення доставлено';
        case OrderStatus.Cancelled:
            return 'Замовлення скасовано';
        default:
            throw new Error('Невідомий статус замовлення');
    }
}
export { sumArray, createUser, OrderStatus, getOrderStatus };
//# sourceMappingURL=homework.js.map