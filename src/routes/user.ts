import express from 'express';
import controller from '../controllers/user';
import userValidation from '../validator/user';
import { TokenValidation } from '../middleware/auth';

const router = express();

router.post(
  '/login',
  userValidation.userValidationLogin(),
  userValidation.validate,
  controller.login
);
router.post(
  '/signup',
  userValidation.userValidationSignup(),
  userValidation.validate,
  controller.signUp
);
router.get('/getprofile', TokenValidation, controller.userData);
router.get('/getallusers', controller.getAllUsers);

export = router;
