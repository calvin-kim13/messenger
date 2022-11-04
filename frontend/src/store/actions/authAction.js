import axios from "axios";

export const userRegister = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(
        "/api/messenger/user-register",
        data,
        config
      );
      console.log(response.data);
      console.log(dispatch);
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
