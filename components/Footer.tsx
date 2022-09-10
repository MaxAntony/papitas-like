import Link from 'next/link';
import { FC } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const year = new Date();

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-center bg-gray-200 py-4'>
      <div className='flex flex-row justify-evenly'>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='font-bold'>Mas informacion</h3>
          <ul className='flex flex-col items-center'>
            <li>
              <Link href={'/policies/privacy-policy'}>Politicas de privacidad</Link>
            </li>
            <li>
              <Link href={'/policies/terms-of-service'}>Terminos y condiciones</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>Nuestras redes</h3>
          <ul className='flex items-center justify-center'>
            <li className='mx-2'>
              <a href={'https://www.facebook.com/papitaslike'} target='_blank' rel='noreferrer' title='facebook page'>
                <FaFacebook />
              </a>
            </li>
            <li className='mx-2'>
              <a
                href={'https://www.youtube.com/watch?v=9-DMzDrl-2A&ab_channel=AgenciaMAS'}
                target='_blank'
                rel='noreferrer'
                title='youtube channel'
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className='mt-4 text-center'>© {year.getFullYear()} Papitas Like</p>
    </footer>
  );
};
