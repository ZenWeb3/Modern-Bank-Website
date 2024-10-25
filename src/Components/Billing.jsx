import {bill, apple,google} from '../assets'
import styles, {layout}  from '../style'

const Download = () => (
  <div className='flex flex-row flex-wrap  mt-5'>
    <div className='mr-[32px]'>
      <img src={apple} className='cursor-pointer sm:mb-0 mb-2 w-[128px] h-[42px] object-contain' alt="" />
    </div>

    <div>
      <img src={google} className='cursor-pointer w-[128px] h-[42px] object-contain'/>
    </div>
  </div>
)

const Billing = () => (
  <section id='product' className={` ${layout.sectionReverse}  `}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink'/>
      </div>

      <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2} mb-6`}>
          Easily control your billing & invoicing.
          </h2>
          <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>
          <Download/>
      </div>
  </section>
)

export default Billing