import { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      oldpassword: "",
      newpassword: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.put(
          "http://localhost:9000/update-credentials",
          values
        );

        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    validate: (values) => {
      const errors = {};

      return errors;
    },
  });

  return (
    <div className=" text-center p-20">
      <h1 className=" text-3xl text-red-500">Change Password!</h1>
      <form onSubmit={formik.handleSubmit} className=" p-5">
        <div>
          <input
            id="oldpassword"
            name="oldpassword"
            type="password"
            placeholder="oldpassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className=" border-red-200 border-2 rounded-md text-center"
          />
          {formik.touched.oldpassword && formik.errors.oldpassword && (
            <div>{formik.errors.oldpassword}</div>
          )}
        </div>

        <div>
          <input
            id="newpassword"
            name="newpassword"
            type="password"
            placeholder="newpassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className=" border-red-200 border-2 rounded-md text-center"
          />
          {formik.touched.newpassword && formik.errors.newpassword && (
            <div>{formik.errors.newpassword}</div>
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

export default ChangePassword;
