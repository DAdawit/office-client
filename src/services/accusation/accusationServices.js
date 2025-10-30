import { apiClient, publicApiClient } from "@/axios";

export const CreateAccusation = async (data) => {
  try {
    const res = await publicApiClient.post(`/accusation_api/create`, data, {
      headers: {
        CREATE_ACCUSATION_API: import.meta.env.VITE_CREATE_ACCUSATION_API,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const GetAccusations = async () => {
  try {
    const res = await apiClient.get(`/accusation_api/get`, {
      headers: {
        GET_ALL_ACCUSATIONS_API: import.meta.env.VITE_GET_ALL_ACCUSATIONS_API,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const GetStructures = async () => {
  try {
    const res = await apiClient.get(`/structure_api/get_all_structures`, {
      headers: {
        GET_STRUCTURES_API: import.meta.env.VITE_GET_STRUCTURES_API,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const AssignToStructure = async (accusationId, data) => {
  console.log(accusationId, data);
  try {
    const res = await apiClient.put(
      `/accusation_api/assign_user/${accusationId}`,
      data,
      {
        headers: {
          ASSIGN_ACCUSATION_API: import.meta.env.VITE_ASSIGN_ACCUSATION_API,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const GetAccusationById = async (accusationId) => {
  try {
    const res = await apiClient.get(`/accusation_api/get/${accusationId}`, {
      headers: {
        GET_ACCUSATION_BY_ID_API: import.meta.env.VITE_GET_ACCUSATION_BY_ID_API,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const MyAssignedAccusation = async () => {
  try {
    const res = await apiClient.get(`accusation_api/get_assigned`, {
      headers: {
        GET_ALL_ACCUSATIONS_API: import.meta.env.VITE_GET_ALL_ACCUSATIONS_API,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const RespolveAccusaion = async (id, formdata) => {
  try {
    const res = await apiClient.put(
      `/accusation_api/put_response/${id}`,
      formdata,
      {
        headers: {
          RESPOND_ACCUSATION_API: import.meta.env.VITE_RESPOND_ACCUSATION_API,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const ResolveAccusation = async (id, formdata) => {
  try {
    const res = await apiClient.put(`/accusation_api/resolve/${id}`, formdata, {
      headers: {
        RESOLVE_ACCUSATION_API: import.meta.env.VITE_RESOLVE_ACCUSATION_API,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
