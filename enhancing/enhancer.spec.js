const enhancer = require('../enhancing/enhancer');
// test away!

// repair
// success
// fail

describe('Check if repair function works', () => {
    it('should restore durability of item to 100', () => {
        const item = {  name: 'mario', durability: 70, enhancement: 20 }
        const newItem = enhancer.repair(item);
        expect(newItem.durability).toBe(100);
    })
    it('should not increase durability when at 100', () => {
        const item = { name: 'mario', durability: 100, enhancement: 0 }
        const newItem = enhancer.repair(item);
        expect(newItem.durability).toBe(100);
    })
});

describe('Check if success function works', () => {
    it('should increase enhancement by 1', () => {
        const item = { name: 'peach', durability: 85, enhancement: 5}
        const newItem = enhancer.success(item);
        expect(newItem.enhancement).toBe(6);
    })
    it('should not increase or change enhancement if enhancement is at 20', () => {
        const item = { name: 'peach', durability: 80, enhancement: 20}
        const newItem = enhancer.success(item);
        expect(newItem.enhancement).toBe(20);
    })
});

describe('Check if fail function works', () => {
    it('should decrease durability by 5 if enhancement is less than 15', () => {
        const item = { name: 'luigi', durability: 90, enhancement: 14}
        const newItem = enhancer.fail(item);
        expect(newItem.durability).toBe(85);
    })
    it('should decrease durability by 10 if enhancement is at 15', () => {
        const item = { name: 'luigi', durability: 85, enhancement: 15}
        const newItem = enhancer.fail(item);
        expect(newItem.durability).toBe(75);
    })
    it('should decrease durability by 10 if enhancement is at 16', () => {
        const item = { name: 'luigi', durability: 75, enhancement: 16}
        const newItem = enhancer.fail(item);
        expect(newItem.durability).toBe(65);
    })
    it('should decrease enhancement level by 1 if the current enhancement level is greater than 16', () => {
        const item = { name: 'luigi', durability: 85, enhancement: 17}
        const newItem = enhancer.fail(item);
        expect(newItem.enhancement).toBe(16);
    })
})