const express = require('express')
const Details = require('../models/Student')

 const getAlldetail = async (req, res) => {
    try {
        const detail = await Details.findAll();
        res.json(detail);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
const getDetailById = async (req, res) => {
    try {
        const details = await Details.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(details[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
const createDetail = async (req, res) => {
    try {
        await Details.create(req.body);
        res.json({
            "message": "student details Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
const updateDetail = async (req, res) => {
    try {
        await Details.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Student Detail Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
const deleteDetail = async (req, res) => {
    try {
        await Details.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Student Details Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports = {
    getAlldetail,getDetailById,createDetail,updateDetail,deleteDetail
}
   