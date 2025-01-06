import { Flex, Text, VStack } from "@chakra-ui/react"
import NavigationMain from "./navigationMain"
import Image from 'next/image' 
import image from ".//../../dist/838926_c9c549d03b1a49a5b48fddceb835a4d3_mv2_d_1696_1725_s_2.webp"

export default function Header() {

    return (
        <Flex bgImage={'url(https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/media/ironpatern.84ec58ff.png)'} height={'312px'}  width={'100vw'} justifyContent={'space-around'} className={'header-main'}>
            <VStack paddingTop={'5vh'}>
            <Image width={133} height={136} id="boho-img" src={image} alt={"bhb"}></Image>
            <Text>Gently-loved clothing and paraphernalia for little free-thinkers</Text>
            <NavigationMain />
            </VStack>
        </Flex>
    )
}