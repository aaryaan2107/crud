import express from 'express'
const router = express.Router();
// import collegeControllre from '../controllers/collegecontroller.js';
import collegeController from '../controller/collegecontroller.js';


router.get('/', collegeController.getAlldoc)
router.post('/', collegeController.createDoc)
router.get('/edit/:id', collegeController.editDoc)
router.post('/update/:id', collegeController.updatebyid)
router.post('/delete/:id', collegeController.deletebyid)



export default router;