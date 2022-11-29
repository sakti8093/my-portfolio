import express from 'express'
import connection from './db.js';
import nodemailer from 'nodemailer'
const app = express();

app.use(express.json());

app.post('/sendmail',(req,res)=>{
    if(req.body){
       // console.log(process.env.GMAIL_USER,process.env.GMAIL_PASSWORD)
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD
            }
        })
        const mailOptions = {
            from: req.body.from,
            to: process.env.GMAIL_USER,
            subject:`Message Recieved from ${req.body.name} as ${req.body.from} (PORTFOLIO)` ,
            text:req.body.message
        }
        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                res.status(400).send({
                    success:false,
                    message:error
                })
            }else{
                res.status(200).send({
                    success:true,
                    message:info
                })
            }
        })
    }else{
        res.status(500).send({
            success:false,
            message: 'Check Email Body'
        })
    }
})

app.listen(8080,(req,res)=>{
    try{
        console.log("connection established");
    }catch(err){
        res.send(err)
    }
});