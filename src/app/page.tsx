import Footer from './footer' 
import { Provider } from "@/components/ui/provider"
import Header from './header';
import HomePage from './pages/home';

export default function Home() {
  return (
 
    <div>
      <Provider>
        <Header />
          <HomePage />
      <Footer />
      </Provider>
     
    </div>
   
  );
}


/* 

   <html suppressHydrationWarning>
 </html>
*/