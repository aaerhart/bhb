import { Box, HStack, VStack } from "@chakra-ui/react";



export default function SellPage() {


    return (
        <VStack paddingTop={'200px'}>
        <HStack display={'flex'} justifyContent={'space-around'} paddingLeft={'100px'} width={'100vw'}>
           
            <Box zIndex={1} color={'#007B9A'} borderColor={'#5ebebe'} background={'#fdfbfb'} borderWidth={'3px'} minWidth={'500px'} width={'800px'} height={'500px'}>
                <Box>{'Selling With Us'}</Box>
                <Box>{"Want to give your child's belongings a new life? We'd love to take a look!  Customers must now make an appointment to sell their items on weekdays, or opt to drop-off their items on weekends following the procedure below.If looking to sell at our St. Albans location, please visit us here."}</Box>
                <Box>{'But Outright v Consignment'}</Box>
            </Box>
            <Box zIndex={0} position={'relative'} left={'-175px'} bottom={'100px'} background={'gray.400'} minWidth={'500px'} width={'800px'} height={'500px'}></Box>
        </HStack>
        <VStack background={"#FF8A85"} width={'100vw'}>
            <Box>{'WEEKDAY APPOINTMENTS NOW AVAILABLE!'}</Box>
            <Box>{'All customers looking to sell their items on weekdays must now make an appointment '}</Box>
            <Box>{'Make an Appointment'}</Box>
        </VStack>
        <HStack display={'flex'} flexFlow={'row wrap'} width={'100vw'} justifyContent={'space-around'}>
            <VStack color={'#007B9A'} width={'550px'} borderColor={'#5ebebe'} borderWidth={'3px'}>
                <Box width={'100px'} height={'100px'} background={"gray.100"}></Box>
                <Box>{'Consignment'}</Box>
                <Box>{'Items are looked through and selected then priced under the consignor’s account. Please allow 10-14 days for your items to bepriced and put on the floor.'}</Box>
                <ul>
                    <li>{"We will not contact you if you have chosen consignment.  We make an account for you if you don't have one already and automatically process any consignment items in your account. Items from the weekend are typically ready for pickup by Tuesday. "}</li>
                    <li>{"Consignors will receive 40% of the price (set by Boho Baby) when an item sells"}</li>
                    <li>{"Consignors may request a payout at any time or use their balance in the store. If used as store credit they will receive 10% of theirbalance extra. For example if a consignor has a payout of $50 theywould receive an additional $5 when using store credit."}</li>
                    <li>{"Consignors do not need to choose whether they want cash or store credit as both are always an option when there is a balance."}</li>
                    <li>{"Items expire after 90 days from the time they are entered/priced in the consignor’s account. Items can be picked up beforeexpiration but it is the consignor’s responsibility to locate the items in the store. If the items are not retrieved before they expire theysimply become store inventory and the consignor will not receive credit after that point."}</li>
                    <li>{"We are unable to contact consignors when their items are near expiration. We recommend setting a reminder in your calendar or checking in frequently!"}</li>
                </ul>
            </VStack>
            <VStack color={'#007B9A'} width={'550px'}  borderColor={'#5ebebe'} borderWidth={'3px'}>
                <Box width={'100px'} height={'100px'} background={"gray.100"}></Box>
                <Box>{"Buy Outright"}</Box>
                <Box>{"Items are looked through and selected the same as they would be for consignment."}</Box>
                <ul>
                    <li>{"If you accept our offer, cash (under $50) or a check can be picked up at the store. Or we can also send payment through PayPal or Venmo."}</li>
                    <li>{"Items accepted for buy-outright include clothing, footwear, outerwear, toys and accessories. We do not offer buy outright on gear such as strollers, high chairs, bassinets etc."}</li>
                </ul>
            </VStack>
        </HStack>
        <Box></Box>
        <Box></Box>
        </VStack>
    )
}