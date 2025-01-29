import Footer from './footer' 
import { Provider } from "@/components/ui/provider"
import Header from './header';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import FaqPage from './pages/faq';
import IntakePage from './pages/intakeappt';
import SellPage from './pages/sell';
import ShopPage from './pages/shop';
import TeamPage from './pages/team';
import { Box, Flex, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
 
    <div>
      <Provider>
        <VStack >
        <Header />
          <AboutPage />
          <Footer />
      </VStack>
      </Provider>
     
    </div>
   
  );
}


/* 

position={'relative'} top={'100vh'}

   <html suppressHydrationWarning>
 </html>
*/