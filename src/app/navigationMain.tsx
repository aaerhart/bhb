
import "./globals.css";
import { Button, Text, Flex } from '@chakra-ui/react' 

export default function NavigationMain() {

    return (
            <Flex display={'flex'} flexBasis={'auto'} className={'footer-main'} gap='4'>
                <Button width={'10vw'} size={'xs'} boxShadow={'2px 2px 5px 1px'} fontSize={'lg'}><Text>Home</Text></Button>
                <Button width={'10vw'} size={'xs'} boxShadow={'2px 2px 5px 1px'} fontSize={'lg'}><Text>Shop</Text></Button>
                <Button width={'10vw'} size={'xs'} boxShadow={'2px 2px 5px 1px'} fontSize={'lg'}>Sell</Button>
                <Button width={'10vw'} size={'xs'} boxShadow={'2px 2px 5px 1px'} fontSize={'lg'}>About Us</Button>
                <Button width={'10vw'} size={'xs'} boxShadow={'2px 2px 5px 1px'} fontSize={'lg'}>Boho Outlet</Button>
                <Button width={'10vw'} size={'xs'} boxShadow={'2px 2px 5px 1px'} fontSize={'lg'}>Contact</Button>
              </Flex>
    )
}

//padding={'0px 60px 0px 60px'}