import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const RemoveFavorite = (props) => {
  const handeButton = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["token"] = `${token}`;
    try {
      const response = await axios.post(
        "http://localhost:9000/delete-favorite",
        {
          title: props.title,
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className=" text-center p-3">
      <button
        onClick={handeButton}
        className="border-solid border-2 border-red-500 rounded-md p-1 bg-red-500 text-white hover:bg-transparent hover:text-red-500"
      >
        remove favorite
      </button>
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

export default RemoveFavorite;
