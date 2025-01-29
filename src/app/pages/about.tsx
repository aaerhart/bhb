import { HStack, Box } from "@chakra-ui/react";



export default function AboutPage() {


    return (
        <Box maxWidth={'80vw'} display={'flex'} flexFlow={'row wrap'} justifyContent={'space-around'}>
            <Box background={'#f7f4f4'} color={'#b2b0b0'} width={'700px'} height={'466px'}>
                <Box>{"Our Mission"}</Box>
                <Box>{"Boho Baby is your local children's resale boutique with a bohemian vibe. We are committed to providing excellent customer service and fair prices, while supporting conscious, sustainable consumerism, local artists, ethical and eco-friendly brands. "}</Box>
                <Box>{"Boho Baby's secondary mission is to provide connections in the parenting/family-centered community.  We are always happy to share resources and support causes that are relevant to our customer-base. "}</Box>
                <Box>{"Consume with purpose"}</Box>
                <Box>{"Celebrate our differences"}</Box>
            </Box>
            <Box background={'gray.300'} width={'525px'} height={'525px'}></Box>
        </Box>
    )
}