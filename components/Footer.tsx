import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { BsSuitHeartFill } from 'react-icons/bs';

const year = new Date();

const socialLinkData = [
  {
    icon: <FaFacebook />,
    title: 'facebook page',
    to: 'https://www.facebook.com/papitaslike',
  },
  {
    icon: <FaYoutube />,
    title: 'canal de youtube',
    to: 'https://www.youtube.com/watch?v=9-DMzDrl-2A&ab_channel=AgenciaMAS',
  },
];

const footerLinks = [
  { title: 'Politicas de privacidad', to: '/policies/privacy-policy' },
  { title: 'Terminos y condiciones', to: '/policies/terms-of-service' },
];

const FooterSection: FC<{ children: ReactNode; title: string }> = ({ children, title }) => {
  return (
    <div className='mt-6 flex flex-col items-center justify-center'>
      <h3 className='mb-3 font-bold'>{title}</h3>
      {children}
    </div>
  );
};

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-center py-4'>
      <div className='flex flex-col justify-evenly md:flex-row'>
        <FooterSection title='Mas Informacion'>
          <ul className='flex flex-col items-center'>
            {footerLinks.map((e, i) => (
              <li key={i} className='mb-2 text-sm'>
                <Link href={e.to}>{e.title}</Link>
              </li>
            ))}
          </ul>
        </FooterSection>
        <FooterSection title='Nuestras redes'>
          <ul className='flex items-center justify-center'>
            {socialLinkData.map((e, i) => (
              <li className='mx-4' key={i}>
                <a href={e.to} target='_blank' rel='noreferrer' title={e.title} className='text-3xl'>
                  {e.icon}
                </a>
              </li>
            ))}
          </ul>
        </FooterSection>
      </div>
      <p className='mt-8 text-center font-medium'>© {year.getFullYear()} Like Snacks</p>
      <p className='mt-8 flex items-center justify-center text-center text-sm'>
        Creado con <BsSuitHeartFill className='mx-2' /> por Max Antony
      </p>
    </footer>
  );
};
