import { Box } from "@chakra-ui/react";
import nodemailer from 'nodemailer'

export default function ContactPage() {

    let message = {
        from: "aerhartic@gmail.com",
        to: "aerhartic@gmail.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>",
      };


    let transporter = nodemailer.createTransport(message)

    transporter.sendMail(message)



    return (
        <Box>

        </Box>
    )
}