export const userLogin = () => {
  const data = localStorage.getItem("user");
  return JSON.parse(data);
};

export const handleLogout = (navigate) => {
  localStorage.removeItem("user");
  navigate("/", { replace: true });
};
