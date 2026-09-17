// auth.smoke.test.js
const { login } = require('./auth');

describe('Quality Gate 1 - Smoke Test', () => {
    test('Đăng nhập thành công với admin và 123 trả về true', () => {
        expect(login('admin', '123')).toBe(true);
    });
});
