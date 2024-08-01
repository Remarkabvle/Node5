import React from "react";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <Form />
      <Users />
      <ToastContainer />
    </>
  );
}

export default App;
