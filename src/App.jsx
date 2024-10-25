import styles from './style'
import {Navbar, Hero,Stats,Business, Billing,CarDeal ,Testimonial,Clients,CTA, Footer,FeedBackCard, } 
from './Components'


const App = () => {
 return(
      <div className="w-full overflow-hidden bg-primary">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
               <div className={`${styles.boxWidth}`}>
                    <Navbar />
               </div>
          </div>

          <div className={`${styles.flexStart} bg-primary`}>
               <div className={`${styles.boxWidth}`}>
                    <Hero />
               </div>
          </div> 


          <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
               <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CarDeal />
                    <Testimonial />
                    <Clients />
                    <CTA />
                    <Footer />
               </div>
          </div>
      </div>
 )
  
}

export default App 