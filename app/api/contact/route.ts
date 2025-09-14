// import { Resend } from "resend";
// import { NextResponse } from "next/server";


//   const resend = new Resend(process.env.RESEND_API_KEY);
// const yourEmail = process.env.YOUR_EMAIL;
// if(!yourEmail){
//   throw new Error("Missing YOUR_EMAIL enviroment variable");
// }

// export async function POST(request: Request) {


//     try{

//         const {firstName, lastName, email, message} = await request.json();

//         if(!firstName || !lastName || !email || !message){
//             return NextResponse.json (
//                 {error: 'All Fields are Required'},
//                 {status: 400}
//             );
//         }

//         const emailResponse = await resend.emails.send({

//             from: 'onboarding@resend.dev',

//             to: 'glopez92@mail.valenciacollege.edu',
            
//             subject: `New Contact Form: ${firstName} ${lastName}`, 

//             html: `
//                 <div style="font-family: Arial, sans-serif; max-width: 600px;">
//           <h2 style="color: #E77014;">New Contact Form Submission</h2>
          
//           <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone:</strong> ${email}</p>
//           </div>
          
//           <div style="background: #fff; border-left: 4px solid #E77014; padding: 15px; margin: 20px 0;">
//             <h3>Message:</h3>
//             <p style="white-space: pre-wrap;">${message}</p>
//           </div>
          
//           <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          
//           <p style="color: #666; font-size: 14px;">
//             <strong>How to respond:</strong><br>
//             Simply reply to this email to respond directly to ${firstName} at ${email}
//           </p>
          
//           <p style="color: #999; font-size: 12px;">
//             This email was sent from your website contact form at ${new Date().toLocaleString()}
//           </p>
//         </div>
//             `,

//             replyTo: email

//         });

//         if(emailResponse.data){
//           console.log('Email sent successfully:', emailResponse);
//           return NextResponse.json({
//             message: 'Email sent successfully',
//             emailId: emailResponse.data.id 
//           });
//         }else if(emailResponse.error){
//           console.error('Email sending failed: ', emailResponse.error);
//           return NextResponse.json({
//             error: 'Failed to send email',
//             details: emailResponse.error.message
//           }, {status: 400});         
//         }else{
//           console.error('Unexpected error detected', emailResponse);
//           return NextResponse.json({
//             error: 'Unexpected response from email service'

//           }, {status: 500});
//         }
        
//     }catch(error: unknown){
//       if(error instanceof Error){
//                 console.error('API route error:', error.message);

//       }else{
//           console.error('API route error:', error );

//       }
//         return NextResponse.json(
//             {error: 'Internal server error'},
//             {status: 500}
//         );
//     }
// }


// export async function GET() {
//   return NextResponse.json({ 
//     message: 'Contact API is working!' 
//   });
// }


    