'use client'
import { Box, Button, HStack, VStack, Input, Textarea } from "@chakra-ui/react";
//import nodemailer from 'nodemailer'
import React, { createContext } from 'react'
//import GoogleApiWrapper from '../map'
import {APIProvider, Map, Marker, AdvancedMarker} from '@vis.gl/react-google-maps';

export default function ContactPage() {


  /*      const email_user = 'aerhartic@gmail.com'
    const email_password =  'chhc jjsw puxr wzfe'

      const message = {
        service: "gmail",
        auth: {
            user: email_user,
            pass: email_password,
        }
      }

      const mailOptions = {
        from: email_user,
        to: email_user,
        subject: 'test email',
        text: 'hello there'
      }
    

    const transporter = nodemailer.createTransport(message) */

   /* transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log('error: ', error)
        }
        console.log(`email sent success:`, info.response)
    }) */



    return (
        <VStack>
            <VStack>
                <Box width={'1000px'} height={'333px'} background={'gray.400'}></Box>
                <Box width={'333px'} background={'#ededed'}>{'Contact'}</Box>
            </VStack>
            <HStack>
                <VStack>
                    <HStack>
                        <VStack color={'#007B9A'}>
                            <Box color={'black'}>Address</Box>
                            <Box>34 Blair Park Rd Suite 103,</Box>
                            <Box>Williston, VT 05495</Box>
                        </VStack>
                        <VStack color={'#007B9A'}>
                            <Box color={'black'}>Contact</Box>
                            <Box>802-764-3023</Box>
                        </VStack>
                    </HStack>
                    <Box>(map)</Box>
                </VStack>
                <VStack>
                    <VStack color={'#007B9A'}>
                        <Box color={'black'}>Store Hours</Box>
                        <Box>Mon - Sat 9:30am – 5:00pm</Box>
                        <Box>Saturday 10:00am-5:00pm</Box>
                        <Box>Sunday 11:00am – 4:00pm</Box>
                    </VStack>
                    <VStack color={'#007B9A'}>
                        <Box color={'black'}>Selling Hours</Box>
                        <Box>Wed-Sat 10:00am – 4:30pm</Box>
                        <Box>Sunday 11:00am - 3:30pm</Box>
                    </VStack>
                </VStack>
                <APIProvider apiKey={'AIzaSyCSXxfpv8wvgNkswZFnPpoxNFGFHV5wePU'} >
                <Map
                style={{width: '40vw', height:'40vh'}}
                defaultCenter={{
                    lat: 44.51416390953129, lng: -73.12507846304514
                }}
                defaultZoom={10}
                gestureHandling={'none'}
                disableDefaultUI={true}
                defaultTilt={45}
                backgroundColor={'#0052cc'}
            >
                <Marker position={{
                    lat: 44.51416390953129, lng: -73.12507846304514
                }}
                              />
                

            </Map> 
                </APIProvider>
            </HStack>
            <VStack display={'flex'} background={'#ededed'} width={'1000px'}>
                <Box color={'black'}><h1>{"Let's Connect"}</h1></Box>
                <HStack>
                    <Box borderColor={'#5ebebe'} borderBottomWidth={'3px'}>
                        <Input type="text" color={'black'} background={'#ededed'} name="firstName_input"></Input>
                    </Box>
                    <Box borderColor={'#5ebebe'} borderBottomWidth={'3px'}>
                    <Input type="text"  color={'black'} background={'#ededed'} name="lastName_input"></Input>
                    </Box>
                </HStack>
                <Box borderColor={'#5ebebe'} borderBottomWidth={'3px'}>
                    <Input type="text"  color={'black'} background={'#ededed'} name="email_input"></Input>
                </Box>
                <Box background={'#ffffff'} borderColor={'#5ebebe'} borderWidth={'1px 1px 3px 1px'}>
                <Textarea width={'800px'} background={'#ffffff'}  color={'#5ebebe'} name="message_input"></Textarea>
                </Box>
                <Button color={'black'}>{'Submit'}</Button>
            </VStack>
        </VStack>
    )
}