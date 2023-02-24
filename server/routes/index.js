/*  
File name: index.js
Student’s Name: Mahfuzur Rahman
StudentID : 301336576
Date : Feb 7 2023 
*/
 
//

var express = require('express');

// const { authenticate } = require('passport');

var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
// Routing or Transferring the call to "index.js" of Controllers
router.get('/', indexController.displayHomePage);
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });

/* GET home page. */
// Routing or Transferring the call to "index.js" of Controllers
router.get('/home', indexController.displayHomePage);
// router.get('/home', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });

/* GET About page. */
// Routing or Transferring the call to "index.js" of Controllers
router.get('/about', indexController.displayAboutPage);
// router.get('/about', function(req, res, next) {
//   res.render('about', { title: 'About' });
// });

/* GET Projects page. */
// Routing or Transferring the call to "index.js" of Controllers
router.get('/projects', indexController.displayProjectsPage);
// router.get('/projects', function(req, res, next) {
//   res.render('projects', { title: 'Projects' });
// });

/* GET Services page. */
// Routing or Transferring the call to "index.js" of Controllers
router.get('/services', indexController.displayServicesPage);
// router.get('/services', function(req, res, next) {
//   res.render('services', { title: 'Services' });
// });

/* GET Contact us page. */
router.get('/contact', indexController.displayContactPage);
// Routing or Transferring the call to "index.js" of Controllers
// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Contact Me' });
// });

//------ new code for authentication 

/* GET Route for displaying Login Page*/
// Routing or Transferring the call to "index.js" of Controllers
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login Page*/
// Routing or Transferring the call to "index.js" of Controllers
router.post('/login',indexController.processLoginPage);

/* GET Route for displaying the Register Page*/
// Routing or Transferring the call to "index.js" of Controllers
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register Page*/
// Routing or Transferring the call to "index.js" of Controllers
router.post('/register',indexController.processRegisterPage);

/*GET Route for perform User Logout*/
// Routing or Transferring the call to "index.js" of Controllers
router.get('/logout', indexController.performLogout);




module.exports = router;
