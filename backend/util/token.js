import jwt from "jsonwebtoken";

// Generate Access Token
export function generateAccessToken(userId) {
    const token = jwt.sign(
        { userId },
        process.env.TOKENSTRING,
        { expiresIn: "10d" }
    );
    return token;
};

