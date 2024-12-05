// React Toaster
// step 1 : install toster : npm install --save react-toastify
// step 2 : import ToastContainer  : import { ToastContainer } from "react-toastify";
// step 3 : call that container in app.js
// step 4 : import toast direct in which file you want to use : import { toast } from "react-toastify";
// step 5 : use with type like : toast.success , toast.error, toast.info, toast.warning
// Ex: toast.error(`Got Error: ${error.message}`);
// step 6 : we can modify toast at last give code
import React from "react";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;


// Use of Toaster
// we use as import it we want that file and call it


// step 7 : modify (we can use modify success, info by changing .extension)
toast.error("Custom Error Message", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

// Like Also We Can Use ---------------------------------------------------------------
// import at App.js and just import triggerToast and call it
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return <ToastContainer />;
};

export const triggerToast = (type, message) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default Toast;
