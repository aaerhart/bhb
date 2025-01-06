import { VStack, Box, Flex, Text } from "@chakra-ui/react";


export default function TeamPage() {


    return (
        <VStack>
             <Box margin={'auto'}>
                <Text fontSize={'2xl'}>{'Our Team.'}</Text>
                <Text fontSize={'xl'}>{'Our team is comprised of yogis, social workers, gardeners, dreamers, mothers,'}</Text>
                <Text fontSize={'xl'}>{'partners, shoppers, designers, friends, and so much more. . .  get to know us'}</Text>
                <Text fontSize={'xl'}>{'below! '}</Text>
             </Box>
              <Flex flexFlow={'row'}></Flex>
        </VStack>
    )
}