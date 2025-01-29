
import "./globals.css";
import { Box, List, ListItem } from '@chakra-ui/react' 

export default function Footer() {

    return (
        <Box position={'relative'} bottom={'0vh'} height={'312px'} width={'100vw'} display={'flex'} justifyContent={'space-around'} className={'footer-main'}>
            <Box>
              <List.Root>
                <ListItem>34 Blair Park Rd Suite 103,</ListItem>
                <ListItem>Williston, VT 05495</ListItem>
              </List.Root>
              <List.Root>
                <ListItem>802 764 3023</ListItem>
                <ListItem>bohobabyvt@gmail.com</ListItem>
              </List.Root>
            </Box>
            <Box>
            <List.Root>
                <ListItem>Store Hours</ListItem>
                <ListItem>Monday-Friday 9:30-5</ListItem>
                <ListItem>Saturday 10-5</ListItem>
                <ListItem>Sunday 11-4</ListItem>
              </List.Root>
              </Box>
           <Box>
           <List.Root>
              <ListItem>Home</ListItem>
              <ListItem>Shop</ListItem>
              <ListItem>Sell</ListItem>
              <ListItem>About Us</ListItem>
              <ListItem>Boho Outlet</ListItem>
              <ListItem>Contact</ListItem>
              </List.Root>
            </Box>
            
        </Box>
    )
}