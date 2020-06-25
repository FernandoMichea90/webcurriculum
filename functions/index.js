const functions = require('firebase-functions');
const nodemailer=require('nodemailer')

require('dotenv').config()

const express=require('express');
const app=express()

app.get('/',(req,res)=>
{
    console.log("paso por aca");
    

    res.send("Hello world")
})

exports.widgets = functions.https.onRequest(app);


//const{SENDER_EMAIL,SENDER_PASSWORD}=process.env;
/*
exports.helloWorld = functions.https.onRequest((request, response) => {
          response.send("Hello from Firebase!");

          let authData=nodemailer.createTransport(
            {
                host:'smtp.gmail.com',
                port:465,
                secure:true,
                auth:{
                    user:SENDER_EMAIL,
                    pass:SENDER_PASSWORD
                }
    
    
    
            })
    
    
         authData.sendMail(
             {
                from:'prueba@prueba.cl',
                to:`${SENDER_EMAIL}`,
                subject:"esto es una prueba",
                text:'te ha llegado el correo'
    
    
             }).then(res=>console.log("el correo se envio")).catch(err=>console.log(err));
               


     });

*/
/*
exports.enviarCorreo=functions.firestore.document('prueba/').onCreate((snap,ctx)=>
{

    const data=snap.data();

    let authData=nodemailer.createTransport(
        {
            host:'smtp.gmail.com',
            port:465,
            secure:true,
            auth:{
                user:SENDER_EMAIL,
                pass:SENDER_PASSWORD
            }



        })


     authData.sendMail(
         {
            from:'prueba@prueba.cl',
            to:`${data.email}`,
            subject:"esto es una prueba",
            text:'te ha llegado el correo'


         }).then(res=>console.log("el correo se envio")).catch(err=>console.log(err));
           
          


})
*/






// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
