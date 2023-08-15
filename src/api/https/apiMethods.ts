import axios from "axios";

export const getRequest = async (URL: any) => {
    let error: any = null;
    const response: any = await axios.get(URL).catch((e: any) => {
      error = e.response;
    });
    if (error !== null) {
      // error handling block
      return error
    }
    return response.data;
  };