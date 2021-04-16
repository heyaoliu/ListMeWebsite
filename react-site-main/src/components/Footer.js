import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className='bg-black text-white py-24 pb-32'>
    <div className='container flex justify-around mx-auto  px-8 md:px-0 space-y-10 md:space-y-0 flex-col md:flex-row'>
      <div className='flex flex-col justify-between items-start md:w-1/2 md:space-y-20'>
        <Image className='hover:opacity-90 cursor-pointer transition-opacity duration-200' src='/images/logo.png'
               width={152} height={42} />
        <div className='text-xl md:w-2/3 mt-5 md:mt-0'>we are are technology-focused company with afocus on a digital transformation in
          the night-time industry
          B2B/B2C experiences.
        </div>
        <div className='flex justify-between md:w-1/4 w-1/2 mt-10 md:mt-0'>
          <Image className='hover:opacity-90 cursor-pointer transition-opacity duration-200'
                 src='/images/icon/facebook.png' width={32} height={32} />
          <Image className='hover:opacity-90 cursor-pointer transition-opacity duration-200'
                 src='/images/icon/twitter.png' width={32} height={32} />
          <Image className='hover:opacity-90 cursor-pointer transition-opacity duration-200'
                 src='/images/icon/linkedin.png' width={32} height={32} />
          <Image className='hover:opacity-90 cursor-pointer transition-opacity duration-200'
                 src='/images/icon/instagram.png' width={32} height={32} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-around md:w-1/2 space-y-10 md:space-y-0'>
        <div className='flex flex-col justify-between space-y-10 md:space-y-0'>
          <div className='text-4xl font-bold text-purple cursor-default space-y-10 md:space-y-0'>Contact us</div>
          <div className='h-3/4 flex flex-col justify-around text-sm space-y-10 md:space-y-0'>
            <div>
              <div className='text-gray-400'>Address</div>
              <div>20-22 Wenlock Road London N1 7Gu</div>
            </div>
            <div>
              <div className='text-gray-400'>Email</div>
              <div>hello@listmeapp.com</div>
            </div>
            <div>
              <div className='text-gray-400'>Whatsapp</div>
              <div>+447537144586</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between space-y-10 md:space-y-0'>
          <div className='text-4xl font-bold text-purple cursor-default '>Useful links</div>
          <div className='h-3/4 flex flex-col justify-around text-sm space-y-10 md:space-y-0'>
            <div className='hover:text-gray-300 cursor-pointer transition-colors duration-200'>Terms & Conditions</div>
            <div className='hover:text-gray-300 cursor-pointer transition-colors duration-200'>
              <Link href='/contact'>
                Contact us
              </Link>
            </div>
            <div className='hover:text-gray-300 cursor-pointer transition-colors duration-200'>
              <Link href='/question'>
                FAQS
              </Link>
            </div>
            <div className='hover:text-gray-300 cursor-pointer transition-colors duration-200'>Privacy Policy</div>
            <div className='hover:text-gray-300 cursor-pointer transition-colors duration-200'>Trademark Policy</div>
          </div>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
