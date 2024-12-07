import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl+"/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  // const generateImage = async (props) => {
  //   try {
  //     const { data } = await axios.post(backendUrl + "/api/image/generate-image",
  //       {prompt : props.prompt},
  //       { headers: { token } }
  //     );
  //      console.log("API Response:", data);
  //     if (data.success) {
  //       loadCreditsData();
  //       return data.resultImages;
  //     } else {
  //       toast.error(data.message);
  //       if (data.creditBalance === 0) {
  //         navigate("/buy");
  //       }
  //     }
  //   } catch (err) {
  //     console.error("Error in image generation:", err);
  //     toast.error(err?.response?.data?.message|| "An unexpected error occurred." );
  //   }
  // };
const generateImage = async (props) => {
  try {
    const { data } = await axios.post(
      `${backendUrl}/api/image/generate-image`,
      props,
      {
        headers: { token },
      }
    );
    console.log("API Response:", data); // Log the entire response
    if (data.success && data.resultImage) {
      loadCreditsData();
      return data.resultImage; // Return the base64 image string
    } else {
      toast.error(data.message || "Something went wrong.");
      if (data.creditBalance === 0) {
        navigate("/buy");
      }
    }
  } catch (err) {
    console.error("Error in image generation:", err);
    toast.error(
      err?.response?.data?.message ||
        "Failed to generate image. Please try again."
    );
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(false);
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    credit,
    setCredit,
    token,
    setToken,
    loadCreditsData,
    logout,
    generateImage,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
