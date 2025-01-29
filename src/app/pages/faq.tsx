import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import Image from 'next/image' 

export default function FaqPage() {


    return (
        <VStack maxHeight={'600vh'} background={'#ededed'}>
        <HStack color={'#007B9A'} background={'#ededed'} display={'flex'} flexFlow={'row wrap'} maxWidth={'100vw'}>
            <VStack width={'470px'}>
                <VStack>
                    <Box>{'Frequently Asked Questions'}</Box>
                    <Box><Text>{"We’ve compiled a list of frequently asked questions and answers for your convenience. If you can’t find what you’re looking for, please get in touch and we’ll respond to your inquiry as quickly as possible."}</Text></Box>
                </VStack>
                <VStack>
                    <Box background={'gray.100'} width={'470px'} height={'495px'}><Image></Image></Box>
                    <Box background={'gray.100'} width={'470px'} height={'495px'}><Image></Image></Box>
                    <Box background={'gray.100'} width={'470px'} height={'495px'}><Image></Image></Box>
                </VStack>
            </VStack>
            <VStack width={'470px'}>
                <VStack>
                <Box><Text>{'What items do you accept? '}</Text></Box>
                <Box><Text>{'We accept the following items: clothing, accessories, footwear, outerwear, toys, books, dance/gymnastics/ dress-up, sport items (shin-guards, cleats, mini skis/skates). OUR FAVORITE BRANDS. '}</Text></Box>
                <Box><Text>{'We also accept the following for consignment only: maternity, gear, diaper bags, and carriers. '}</Text></Box>
                <Box><Text>{'Please refer to our selling page for more information. '}</Text></Box>
                </VStack>

                <VStack>
                <Box><Text>{'How can I drop off my items?  '}</Text></Box>
                <Box><Text>{'Our consignment process is now self-serve. When customers arrive, they will be asked to complete a form asking for their personal information as well as their selection for buy outright v. consignment. '}</Text></Box>
                <Box><Text>{'We accept TWO BINS per week or FOUR SHOPPING BAGS. Note: no trash bags will be accepted.  '}</Text></Box>
                <Box><Text>{'Click here for a step-by-step guide on our review process. '}</Text></Box>
                </VStack>

                <VStack>
                    <Box><Text>{'I selected Buy Outright.  How long do I have to wait for my offer?'}</Text></Box>
                    <Box><Text>{'Sellers can expect to hear from us within 3-5 days of drop-off with an offer.  We offer payment via: Venmo, Paypal, cash (if under $50) and check. '}</Text></Box>
                </VStack>

                <VStack>
                    <Box><Text>{'Can you explain the difference between buy outright and consignment?'}</Text></Box>
                    <Box><Text>{'Buy Outright means you will get paid upfront for your items, consignment means you will earn $ as items are sold in the store.  Buy outright is less $ but all at once.  Consignment is more $ over time. To learn more about the differences, click here. '}</Text></Box>
                </VStack>

                <VStack>
                    <Box><Text>{'What happens with the items you do not take?'}</Text></Box>
                    <Box><Text>{'The items we are unable to sell will be returned to the customer. Customers must pick up their passes within 3-7 days of drop-off.  '}</Text></Box>
                </VStack>

                <VStack>
                    <Box><Text>{'What is your return policy?'}</Text></Box>
                    <ul>
                        <li>{'-Tags on'}</li>
                        <li>{'-14 days for a refund'}</li>
                        <li>{'15-30 days for store-credit'}</li>
                        <li>{'-Clearance and gear (strollers, bassinets etc.) are final sale. '}</li>
                    </ul>
                </VStack>

                <VStack>
                    <Box><Text>{'Do you sell gift cards?'}</Text></Box>
                    <Box><Text>{'Yes, we do! We sell gift cards in store.  We do not have an online option for gift-card purchase at this time. Customers may also buy store credit for the intended recipient. Please visit our store or call us to learn more and to purchase. '}</Text></Box>
                </VStack>

                <VStack>
                    <Box><Text>{'What is the best way to contact you?'}</Text></Box>
                    <Box><Text>{'We want to ensure a clear, consistent message to all of our customers. Thus, we ask that all requests be called in during store hours. We do occasionally check out social media messengers as well, however, we will not be able to answer any specific requests or hold items online. '}</Text></Box>
                </VStack>

                <VStack>
                    <Box><Text>{'How long do consignment items sit on the floor? What happens to them after? '}</Text></Box>
                    <Box><Text>{'Consignment items live on our shop floor for 150 days. If they are not bought, customers are welcome to retrieve them at their discretion, or they will automatically become store-owned inventory.  Please note: customers must keep track of their donation time as we are not able to notify customers when their 150 day mark is approaching.  YOU DO NOT NEED TO RETRIEVE ITEMS.  Only if you want them back.  '}</Text></Box>
                </VStack>

            </VStack>
        </HStack>
        <HStack  background={'#ededed'}>
            <Box><Text fontSize={'2xl'}>{'Want to know more?'}</Text></Box>
            <Box>
                <Text fontSize={'md'}>{'Customers who would like to learn about item availability, their account balance, or more specific information not listed here are welcome to call our store during business hours. We look forward to connecting!'}</Text>
            </Box>
        </HStack>
        </VStack>
    )
}