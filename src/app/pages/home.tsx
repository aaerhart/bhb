import { Box, HStack, Text, VStack } from '@chakra-ui/react'

export default function HomePage() {

    return (
        <VStack >
        <Box width={'100vw'} height={'500px'} background={'gray'}>{'Carosel will go here'}</Box>
        <HStack display={'flex'} justifyContent={'space-around'} height={'500px'}>
            <Box borderWidth={'1px'} borderColor={'black'} width={'350px'} height={'450px'} background={'gray.100'}></Box>
            <Box  borderWidth={'1px'} borderColor={'black'} width={'350px'} height={'450px'} background={'gray.100'}></Box>
        </HStack>
        <VStack display={'flex'} justifyContent={'center'} width={'100vw'} background={'#546e7a'}>
            <Text fontSize={'3xl'}>So Much More Than Clothes</Text>
            <Text fontSize={'xl'}>We are committed to providing excellend customer service and fair parices, while supporting</Text>
            <Text fontSize={'xl'}>conscious, sustainable consumerism, local artists, ethical and eco-friendly brands.</Text>
        </VStack>
        <Box width={'100vw'} height={'200px'} background={'gray'}>{'Carosel will go here'}</Box>
        <Box width={'100vw'} height={'300px'} background={'#546e7a'}>{'form with stick picture bg will go here'}</Box>
        </VStack>
    )
}