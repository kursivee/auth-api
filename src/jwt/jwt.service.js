import jwt from 'jsonwebtoken';
import randToken from 'rand-token';

const SECRET_KEY = 'NEW_SECRET_WEW';

export function createJWT(content) {
    return jwt.sign(content, SECRET_KEY);
}

export function createRefreshToken() {
    return randToken.uid(256);
}

export function verifyJWT(token) {
    return jwt.verify(token, SECRET_KEY);       
}