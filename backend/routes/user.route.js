import { Router } from "express";
import * as userController from '../controllers/user.controller.js';
import { body } from "express-validator";
import * as authMiddlware from '../middleware/auth.middleware.js';
const router = Router();


router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({min:3}).withMessage('Password must be at least  characters'),
    userController.createUserController);

router.post('/login',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({min: 3}).withMessage('Password must be at atlest 3 characters long'),
    userController.loginController
);

router.get('/profile', authMiddlware.authUser, userController.profileController);

router.get('/logout', authMiddlware.authUser, userController.logoutController);




export default router;