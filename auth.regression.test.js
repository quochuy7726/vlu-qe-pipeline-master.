// auth.regression.test.js
const { login } = require('./auth');

describe('Quality Gate 2 - Regression Test', () => {
    test('Ngoại lệ: Mật khẩu sai trả về false', () => {
        expect(login('admin', 'wrong_password')).toBe(false);
    });

    test('Ngoại lệ: Username rỗng báo lỗi', () => {
        expect(login('', '123')).toBe('Username and password are required');
    });

    test('Ngoại lệ: Mật khẩu rỗng báo lỗi', () => {
        expect(login('admin', '')).toBe('Username and password are required');
    });

    test('Ngoại lệ: Mật khẩu chứa ký tự đặc biệt báo lỗi', () => {
        expect(login('admin', '123!@#')).toBe('Password cannot contain special characters');
    });

    test('Ngoại lệ: Tài khoản bị khóa báo lỗi', () => {
        expect(login('locked_user', '123')).toBe('Account is locked');
    });
});
