import styles from "../style"
import FeedBackCard from "./FeedBackCard"
import { feedback } from "../Constant"

const Testimonial = () => (
  <section id="client" className={`${styles.paddingY} ${styles.flexCenter}
   flex-col relative `}>
    <div />

    <div className="w-full flex flex-1 relative z-[1] justify-between items-center
     md:flex-row flex-col sm:mb-16 mb-6 ">
      <h2 className={`${styles.heading2} max-w-[470px]`}>
      What people are saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6 flex-1 flex justify-center">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center 
     w-full relative z-[1] feedback-container " >
        {feedback.map((card) => (
              <FeedBackCard key={card.id} {...card}/>
        ))}
    </div>
  </section>
)

export default Testimonial