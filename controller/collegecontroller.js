import clgModel from "../models/college.js"

class collegeController {
    static createDoc = async(req , res ) =>{
        // console.log(req.body)
        try {
            const {name,age,city} = req.body
            const doc = new clgModel({
                name:name,
                age:age,
                city:city

            })
            const result = await doc.save()
            console.log(result)
        res.redirect("/clg")
        } catch (error) {
            console.log(error)
        }
    }

    static editDoc = async(req , res) =>{
        // console.log(req.params.id)
        try {
            const result = await clgModel.findById(req.params.id)
            // console.log(result)
            res.render("edit", {data:result})
        } catch (error) {
        console.log(error)           
        }
    }

    static updatebyid = async(req , res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await clgModel.findByIdAndUpdate(req.params.id,req.body)
            console.log(result)
            res.redirect("/clg")
        } catch (error) {
            console.log(error)
        }
    }

    static deletebyid = async (req , res) =>{
        // console.log(req.params.id)
        try {
            const result = await clgModel.findByIdAndDelete(req.params.id)
            res.redirect("/clg")
        } catch (err) {
             console.log(err)
        }
    }
    static getAlldoc = async(req , res) =>{
        try {
            const result  = await clgModel.find()
            // console.log(result)
            res.render("index",  {data: result})
        } catch (error) {
            console.log(error)
        }
    }
}

export default collegeController