const express = require('express')
const router = express.Router()

const studentcontroller = require('../controller/studentcontroller')

 router.get('/', studentcontroller.getAlldetail);
router.get('/edit-student/:id', studentcontroller.getDetailById);
router.post('/create-student', studentcontroller.createDetail);
router.patch('/update-student/:id', studentcontroller.updateDetail);
router.delete('/delete-student/:id', studentcontroller.deleteDetail);
 
module.exports = router