import { LayoutMain } from '@components/layouts/LayoutMain';
import { MainContainer } from '@components/MainContainer';
import { NextPage } from 'next';
import Head from 'next/head';
import { site } from 'utils/data';

type ContactData = { title: string; link: string; content: string };
let data: ContactData[] = [
  { title: 'Pagina de facebook:', link: 'https://www.facebook.com/papitaslike/', content: 'Papitas like' },
  { title: 'Numero telefonico:', link: 'tel:+51987820552', content: '987 820 552' },
];

const ContactPage: NextPage = () => {
  return (
    <LayoutMain>
      <Head>
        <title>{site.title} | Contacto</title>
      </Head>
      <MainContainer>
        <div className='mx-auto flex h-full flex-col items-center justify-center md:w-[1000px]'>
          {data.map((e, i) => (
            <div key={i} className='w-full md:w-1/2'>
              <div className='mb-4 flex flex-col items-center justify-center rounded p-2 shadow-md'>
                <h3 className='font-bold'>{e.title}</h3>
                <a href={e.link} className='hover:text-primary'>
                  {e.content}
                </a>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </LayoutMain>
  );
};

export default ContactPage;
