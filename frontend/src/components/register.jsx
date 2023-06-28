import { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:9000/register",
          values
        );
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    validate: (values) => {
      const errors = {};

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
  });

  return (
    <div className=" text-center p-20">
      <h1 className=" text-3xl text-red-500">Register!</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            placeholder="username"
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className=" border-red-200 border-2 rounded-md text-center"
          />
          {formik.touched.username && formik.errors.username && (
            <div>{formik.errors.username}</div>
          )}
        </div>

        <div>
          <input
            placeholder="email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className=" border-red-200 border-2 rounded-md text-center"
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <input
            placeholder="password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className=" border-red-200 border-2 rounded-md text-center"
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className=" border-solid border-2 border-red-500 rounded-md p-1 bg-red-500 text-white hover:bg-transparent hover:text-red-500 m-3 "
        >
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default RegisterForm;
