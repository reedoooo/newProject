import axios from "axios";

const Test = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_API_URL,
    headers: { authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
  };

  try {
    const response = await axios(options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error calling API");
  }
};

export default Test;
