import { createJWT, createRefreshToken, verifyJWT } from '../jwt/jwt.service';
import { Error, Response } from '../util/response.utils';

export function login(username, password) {
    // Move this to db call
    if(username === 'user' && password === 'password') {
        const content = {
            data: 'woo' 
        };
        return new Response({
            token: createJWT(content),
            refreshToken: createRefreshToken()
        });
    }
    throw new Error('Invalid Credentials', 401);
}

export function verifyToken(token) {
    try {
        verifyJWT(token);
        return new Response({
            success: true
        });
    } catch(err) {
        throw new Error('Invalid Token', 401);
    }
}