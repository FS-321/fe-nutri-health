import "react-toastify/dist/ReactToastify.css";

export const btnNotif = (notif, action) => {
  action(notif, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
