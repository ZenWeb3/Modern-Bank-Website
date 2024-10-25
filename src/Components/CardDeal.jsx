import styles, {layout} from '../style'
import {card} from '../assets'
import Button from './Button'

const CardDeal = () => (
  <section id='solution' className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} max-w-[570px] mb-[24px]`} >
        Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[570px]  text-[18px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button/>
    </div>
    <div className={`${layout.sectionImg}`}>
        <img src={card} className='md:max-w-[513px] md:h-[449px] w-[100%] h-[100%] object-contain' 
        alt="Card deal image" />
    </div>
  </section>
)

export default CardDeal