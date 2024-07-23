import jwt from 'jsonwebtoken';

// jwt generator (create token)
export const generateJWT = (payload) => {
    return new Promise((resolve, reject) => 
        jwt.sign(
            payload,
            process.env.JWT_SIGNATURE,
            { expiresIn: '1 day'},
            (err, token) => {
                if (err) reject(err)
                else resolve(token)
            }
        )   
    );
};

// jwt verifier (decode token)
export const verifyJWT = (token) => {
    return new Promise((resolve, reject) => 
        jwt.verify(token, process.env.JWT_SIGNATURE, (err, decoded) => {
            if (err) reject(err)
            else resolve(decoded)
        })   
    );
};