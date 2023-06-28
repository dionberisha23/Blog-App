import Header from "./header";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostBlogs = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post("http://localhost:9000/blogs", values, {
        headers: {
          token: token,
        },
      });

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setSubmitting(false);
  };

  return (
    <div>
      <Header></Header>
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={handleSubmit}
      >
        <Form className=" text-center p-6">
          <div>
            <label htmlFor="title">Title:</label>
            <Field
              type="text"
              id="title"
              name="title"
              className=" border-red-200 border-2 rounded-md"
            />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <Field
              as="textarea"
              id="content"
              name="content"
              placeholder="content"
              rows={4}
              cols={50}
              className=" border-red-200 border-2 rounded-md mt-5 text-center"
            />
            <ErrorMessage name="content" component="div" />
          </div>
          <button
            type="submit"
            className=" border-solid border-2 border-red-500 rounded-md p-1 bg-red-500 text-white hover:bg-transparent hover:text-red-500"
          >
            Submit
          </button>
        </Form>
      </Formik>
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

export default PostBlogs;
