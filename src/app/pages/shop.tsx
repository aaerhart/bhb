import { Box, VStack, Text, HStack } from "@chakra-ui/react";


export default function ShopPage() {


    return (
        <VStack>
            <Box width={'100vw'} height={'500px'} background={'gray'}>{'Container will go here'}
                <Box>{'Container will go here'}</Box>
            </Box>
            <VStack>
                <HStack>
                    <Box backgroundColor={'gray.100'} className="shop-img" width={'540px'} height={'600px'}></Box>
                    <Box background={'gray.100'} className="shop-list" width={'450px'} height={'600px'}></Box>
                </HStack>
                <HStack>
                    <Box background={'gray.100'} className="shop-img" width={'540px'} height={'600px'}></Box>
                    <Box background={'gray.100'} className="shop-list" width={'450px'} height={'600px'}></Box>
                </HStack>
            </VStack>
            <Box paddingBottom={'50px'}>
                <Box margin={'auto'} overflow={'hidden'} borderWidth={'2px'} borderColor={'#5ebebe'} width={'980px'} height={'391px'}>
                    <Text color={'black'} fontSize={'2xl'}>{'Our Favorite Brands'}</Text>
                    <Text color={'black'} fontSize={'xl'}>{'Tea Collection, Mini Boden, Hanna Andersson, Burton, Rylee + Cru, Quincy Mae, Kickee Pants, Kyte, Magnetic'}</Text>
                    <Text color={'black'} fontSize={'xl'}>{'me, Vans, primary, wool: Disana, Gap, Patagonia, Zara, H&M, North Face,  Nui Organics, Kickee Pants,'}</Text>
                    <Text color={'black'} fontSize={'xl'}>{'Zutano, Peek, See Kai Run, Crewcuts, Keen, Bogs, Crocs, Cat & Jack, Old Navy, L.L. Bean and anything "boho,"'}</Text>
                    <Text color={'black'} fontSize={'xl'}>{'locally-made, globally-inspired or unique!'}</Text>
                </Box>
            </Box>
        </VStack>
    )

}