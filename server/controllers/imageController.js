import userModel from "../models/usermodel.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    // Validate inputs
    if (!userId || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Fetch user
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Check credit balance
    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "Insufficient Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    // Prepare request to ClipDrop API
    const formData = new FormData();
    formData.append("prompt", prompt);

    let base64Image;
    try {
      const { data } = await axios.post(
        "https://clipdrop-api.co/text-to-image/v1",
        formData,
        {
          headers: {
            "x-api-key": process.env.Clipdrop_API,
            ...formData.getHeaders(),
          },
          responseType: "arraybuffer", // Handle binary response
        }
      );
      base64Image = Buffer.from(data, "binary").toString("base64");
    } catch (error) {
      console.error("ClipDrop API error:", error.message);
      return res.status(500).json({
        success: false,
        message: "Failed to generate image. Please try again later.",
      });
    }

    // Update user's credit balance
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance-1 ,
    });

    // Respond with the generated image
    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance -1,
      resultImage: `data:image/png;base64,${base64Image}`,
    });
  } catch (error) {
    console.error("Internal Error:", error.message);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
