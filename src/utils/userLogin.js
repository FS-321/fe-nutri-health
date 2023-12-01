const data = localStorage.getItem("user");
const userLogin = JSON.parse(data);

export const user = userLogin;
export const token = userLogin.newToken;
export const role = userLogin.role;
