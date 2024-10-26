import styles from '../style'
import {quotes} from '../assets'

const FeedBackCard = ({content, name, title, img}) => (
  <div className='flex flex-wrap  flex-row rounded-[20px] py-12 px-10 bg-black-gradient 
    max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5  feedback-card'>
    <img src={quotes} alt="quotes" className='w-[42px] h-[27px]'/>
    <p className={`mt-5 ${styles.paragraph}`}>
      {content}
    </p>

    <div className={`${styles.flexCenter} mt-2`}>
        <div className='h-[48px] w-[48px] rounded-full'>
          <img src={img} alt="customers" className='w-[100%] h-[100%] object-contain' />
        </div>
        <div className=' ml-2 font-poppins'>
          <h4 className='text-[20px] font-normal text-white leading-[32px]'>
            {name}
          </h4>
          <p className='text-dimWhite leading-[24px]'>
            {title}
          </p>
        </div>
    </div>
  </div>
)


export default FeedBackCard