import { publicApiClient } from "@/axios";
export const login = async (data) => {
  try {
    const res = await publicApiClient.post(`/user_api/login_user`, data, {
      headers: {
        GET_LOGIN_USER_API: import.meta.env.VITE_GET_LOGIN_USER_API,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const forgetPassword = async (data) => {
  try {
    const res = await publicApiClient.post("/user_api/forget_password", data, {
      headers: {
        GET_USER_FORGET_PASSWORD_API: import.meta.env
          .VITE_GET_USER_FORGET_PASSWORD_API,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const resetPassword = async (data) => {
  try {
    const res = await publicApiClient.post(
      `/user_api/reset_password?id=${data?.id}&token=${data?.token}`,
      data,
      {
        headers: {
          GET_USER_PASSWORD_RESET_API: import.meta.env
            .VITE_GET_USER_PASSWORD_RESET_API,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const res = await publicApiClient.get("/user_api/get_users", {
      headers: {
        GET_USER_LIST_API: import.meta.env.VITE_GET_USER_LIST_API,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
