import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import Image from 'next/image' 

export default function FaqPage() {


    return (
        <VStack>
        <HStack>
            <VStack>
                <VStack>
                    <Box>{'Frequently Asked Questions'}</Box>
                    <Box><Text>{"We’ve compiled a list of frequently asked questions and answers for your convenience. If you can’t find what you’re looking for, please get in touch and we’ll respond to your inquiry as quickly as possible."}</Text></Box>
                </VStack>
                <VStack>
                    <Box><Image></Image></Box>
                    <Box><Image></Image></Box>
                    <Box><Image></Image></Box>
                </VStack>
            </VStack>
            <VStack>
                <Box><Text>{'What items do you accept? '}</Text></Box>
                <Box><Text>{'We accept...'}</Text></Box>
            </VStack>
        </HStack>
        <HStack>
            <Box><Text fontSize={'2xl'}>{'Want to know more?'}</Text></Box>
            <Box>
                <Text fontSize={'md'}>{'Customers who would like to learn about item availability, their account balance, or more specific information not listed here are welcome to call our store during business hours. We look forward to connecting!'}</Text>
            </Box>
        </HStack>
        </VStack>
    )
}