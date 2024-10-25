import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] 
    rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`rounded-full ${styles.flexCenter} flex-col bg-primary h-[100%] w-[100%]`}>
            <div className={` ${styles.flexStart} flex-row`}>
                <p className={`font.poppins text-gradient leading-[23px] text-[18px] font-medium mr-2` }>
                    <span className='font.poppins '>
                        Get 
                    </span>
                </p>
                <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow' />
            </div>
            <p className={`font.poppins text-gradient leading-[23px] text-[18px] font-medium` }> 
                <span className='font.poppins '>
                    Started
                </span>       
            </p>
        </div>
    </div>
)

export default GetStarted