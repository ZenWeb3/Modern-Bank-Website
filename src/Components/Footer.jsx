import styles,{layout} from '../style'
import {logo} from '../assets'
import { footerLink, socialMedia } from '../Constant'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.marginY}  flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col md-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="logo" 
          className='w-[266px] h-[72px] object-contain' 
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
      </div>
      <div className='flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLink.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className="font-poppins font-medium text-[18px] text-white leading-[27px]">
                  {footerLink.title}
                </h4>
                <ul className='list-none mt-4'>
                {footerLink.links.map((link) => (
                    <li href={link.link} key={link.name}
                    className={`font-poppins font-mornal text-[16px]
                     text-dimWhite hover:text-secondary cursor-pointer leading-[24px] 
                     ${link !== link.length - 1 ?"mb-4" : "mb-0"}`}  
                     
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
            </div>
          ))}
      </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-row flex-col
    pt-6 border-t-[1px] border-t-[#3f3r5]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2021 Hoobank. All Rights Reserved.
      </p>
      <div className='flex flex-row md:mt-0 mt-6'>
          { socialMedia.map((icons,index) => (
            <img 
            className={`cursor-pointer w-[21px] h-[21px] object-contain
               ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} 
            key={icons.id}
            src={icons.icon}
            href={icons.link}
            />
          ))}
      </div>

    </div>
  </section>
)

export default Footer