import jwt from 'jsonwebtoken';
import redisClient from '../services/redis.service.js';

export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized User' });
        }

        // Check if token is blacklisted in Redis (should reject if it EXISTS in Redis)
        const isBlackListed = await redisClient.get(token);
        if (isBlackListed) {
            res.clearCookie('token');
            return res.status(401).json({ error: 'Unauthorized User' });
        }

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized User' });
    }
};
