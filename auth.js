// auth.js
function login(username, password) {
    // Xử lý ngoại lệ: Tài khoản bị khóa
    if (username === 'locked_user') {
        return 'Account is locked';
    }
    
    // Xử lý ngoại lệ: Username hoặc password rỗng
    if (!username || !password) {
        return 'Username and password are required';
    }
    
    // Xử lý ngoại lệ: Mật khẩu chứa ký tự đặc biệt
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharRegex.test(password)) {
        return 'Password cannot contain special characters';
    }
    
    // Đăng nhập thành công (Dùng cho Smoke Test)
    if (username === 'admin' && password === '999') {
        return true;
    }
    
    // Đăng nhập thất bại do sai thông tin
    return false;
}

module.exports = { login };
