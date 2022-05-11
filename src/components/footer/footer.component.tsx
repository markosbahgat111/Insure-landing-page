import React from 'react'
import Image from 'next/image';
import logo from 'assets/images/logo.svg';
import styles from './style.module.scss';

interface Props { }

const Footer:React.FC<Props> = () => {
  return (
    <div className='w-full min-h-[50vh] bg-[#fafafa] sm:px-40 px-0 py-16'>
        <section className='flex sm:flex-row flex-col items-center justify-between gap-10 sm:gap-0'>
            <Image src={logo} alt='INSURE logo' />
            <div className='flex items-center gap-6'>
                <i className="fa-brands fa-facebook-square fa-xl cursor-pointer text-[#837d87] hover:text-black"></i>
                <i className="fa-brands fa-twitter fa-xl cursor-pointer text-[#837d87] hover:text-black"></i>
                <i className="fa-brands fa-pinterest fa-xl cursor-pointer text-[#837d87] hover:text-black"></i>
                <i className="fa-brands fa-instagram fa-xl cursor-pointer text-[#837d87] hover:text-black"></i>
            </div>
        </section>
        <hr className='w-full my-8 h-[2px] text-[#837d87]'/>
        <section className='w-full grid grid-cols-sectionOne gap-10 text-center sm:text-left m-0 p-0 px-0'>
            <div className={styles.links_container}>
                <h5>Our Company</h5>
                <ul>
                    <li>How we work</li>  
                    <li>why insure?</li>  
                    <li>view plans</li>  
                    <li>reviews</li>  
                </ul>    
            </div> 
            <div className={styles.links_container}>
                <h5>Help me</h5>
                <ul>
                    <li>faq</li>  
                    <li>terms of use</li>  
                    <li>privacy policy</li>  
                    <li>cookies</li>  
                </ul>    
            </div> 
            <div className={styles.links_container}>
                <h5>contact</h5>
                <ul>
                    <li>sales</li>  
                    <li>support</li>  
                    <li>live chat</li>  
                </ul>    
            </div> 
            <div className={styles.links_container}>
                <h5>Our Company</h5>
                <ul>
                    <li>careers</li>  
                    <li>press</li>  
                    <li>licenses</li>  
                </ul>    
            </div> 
        </section>
    </div>
  )
}

export default Footer;
