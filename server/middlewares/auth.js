import jwt from "jsonwebtoken";


const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: "Access denied. No token provided. Not Authorized, Login Again" });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
       
        if (tokenDecode.id) {

            req.body.userId = tokenDecode.id;

        } else {
            return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
        }
        next();



    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
    

};
export default userAuth;