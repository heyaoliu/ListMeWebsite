import groq from 'groq';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import ReactSwipe from 'react-swipe';
import cn from 'classnames';
import Link from 'next/link';

import sanity from '../utils/sanity';
import Layout from '../components/Layout';
import { useState } from 'react';

function Index(props) {
  const { degrees = [], universities = [] } = props;
  const [index, setIndex] = useState(0);
  let reactSwipeEl;

  console.log('data', degrees, universities);

  const cardList = [
    {
      title: 'Get the app',
      description: 'You are just a moment away from thousands of events to explore',
    },
    {
      title: 'Create a social profile',
      description: 'Create your social media profile, scan your ID and be verified in minutes, leave the wallet at home.',
    },
    {
      title: 'Find Events',
      description: 'Find events that suit you and get listing',
    },
    {
      title: 'Entry Payments',
      description: 'Make payment to the venue once you are safety checked in.',
    },
    {
      title: 'Organise Events',
      description: 'Make new friends, follow brands and make social planning easier.',
    },
    {
      title: 'Enjoy the Experience',
      description: 'Your phone is the only thing you need',
    }];


  const startSlide = 0;
  const swipeOptions = {
    startSlide: index,
    auto: 1000,
    speed: 2000,
    disableScroll: true,
    continuous: true,
    callback(index) {
      //setIndex(index)
    },
    transitionEnd(index) {
      console.log('ended transition');
      setIndex(index);

    },
  };


  const handleContact = () => {
    console.log('handleContact');
    axios
      .post('/api/contact', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <NextSeo
        title='Kickoff NextJs'
        description='A short description goes here.'
      />
      <div className='relative flex flex-col items-center justify-center text-white overflow-hidden py-14 md:py-0'>
        <Image objectPosition='center' layout='fill' src='/images/background/image2.png' priority
               className='object-center object-cover pointer-events-none z-0' />
        <div className='w-full z-10 container'>
          <div className='container mx-auto relative flex flex-col justify-start md:py-64 py-24 md:space-y-12 z-10'>
            <div
              className='space-y-10 md:space-y-0 flex flex-col justify-between md:w-1/3 text-white md:h-80 text-lg px-10 md:px-0 space-y-3 md:space-y-0'>
              <div className='font-bold text-5xl'>Events made simple.</div>
              <div>A safe & secure social networking platform. We help brands & venues in the hospitality industry put
                the consumer first with a full digital solution.
              </div>
              <div>No paper lD,no paper clipboard & no in house ID machines needed</div>
              <button
                className='focus:outline-none border-2 w-24 rounded-lg border-green-500 py-0.5 cursor-pointer hover:bg-green-500 transition-colors duration-200'>Sign
                up
              </button>
            </div>
          </div>
          <div className='float-right mr-10 mb-10 text-lg font-bold'>(Listme 30second video)</div>
        </div>
      </div>
      <div className='w-full bg-black h-auto text-white md:py-32 py-10'>
        <div className='mx-auto'>
          <ReactSwipe
            ref={reactSwipe => (reactSwipeEl = reactSwipe)}
            swipeOptions={swipeOptions}
          >
            {
              cardList.map(({ title, description }, idx) => (
                <div className='md:px-56 px-8 justify-between flex flex-col md:flex-row' key={idx}>
                  <div className='flex justify-center flex-col h-full space-y-24 mt-14'>
                    <div className='text-3xl space-y-2'>
                      <div className='text-purple'> How ListMe Works</div>
                      <div className='text-green'>Our Application Interface</div>
                    </div>
                    <div className='space-y-12'>
                      <div className='text-9xl font-bold text-purple'>0{idx + 1}</div>
                      <div className='text-5xl font-bold'>{title}</div>
                      <div className='md:text-2xl md:w-3/4 text-gray-350'>{description}
                      </div>
                    </div>
                  </div>
                  <div className='h-auto text-center'>
                    <Image src={`/images/app/${idx + 1}.png`} priority width={367} height={654} />
                  </div>
                </div>
              ))
            }
          </ReactSwipe>
        </div>

        <div className='hidden md:block'>
          <div className='container mx-auto text-center flex justify-center space-x-5 mt-12'>
            {
              cardList.map(({}, idx) => {
                return (
                  <div
                    className={cn('cursor-pointer h-1.5 w-24 rounded-full', idx === index ? 'bg-gray-700' : 'bg-purple')}
                    key={idx} onClick={() => {
                    setIndex(idx);
                  }} />
                );
              })}
          </div>
        </div>

      </div>
      <div className='w-full bg-gray h-auto text-black md:py-32 py-20 '>
        <div className='md:container mx-auto justify-between flex  flex-col justify-center text-center space-y-24 py-8'>
          <div className='text-4xl font-bold'>Our Services</div>
          <div className='flex justify-around md:flex-row flex-col md:space-y-0 space-y-8'>
            <div className='text-center'>
              <Image src='/images/service/g.png' width={350} height={350} />
              <div className='mt-8'>Industry term</div>
              <div className='text-green font-bold'>"Guestlist".</div>
            </div>
            <div>
              <Image src='/images/service/r.png' width={350} height={350} />
              <div className='mt-8'>Industry term</div>
              <div className='text-green font-bold'>"Table Booking"</div>
            </div>
            <div>
              <Image src='/images/service/t.png' width={350} height={350} />
              <div className='mt-8'>Industry term</div>
              <div className='text-green font-bold'>"Guestlist".</div>
            </div>
            <div>
              <Image src='/images/service/v.png' width={350} height={350} />
              <div className='mt-8'>Industry term</div>
              <div className='text-green font-bold'>"Guestlist".</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-black h-auto text-white md:py-40 py-12 px-8 md:px-0'>
        <div className='container mx-auto justify-between flex flex-col md:flex-row'>
          <div className='flex justify-center flex-col h-full space-y-12 mt-14'>
            <div className='text-3xl space-y-3'>
              <div className='text-green md:text-5xl text-4xl font-bold md:w-3/4'>ListMe Dashboard & Personal Digiboard
              </div>
              <div className='text-purple text-4xl font-bold'>Your Safe Space</div>
            </div>
            <div className='h-auto md:hidden'>
              <Image src='/images/dashboard/dashboard.png' width={683} height={563} />
            </div>
            <div className='space-y-5 px-10 md:px-0'>
              <div className='text-xl md:w-3/4 text-gray-350'>A one-stop system that manages every aspect required for
                promoting and marketing a venue or event.
              </div>
              <div className='text-xl md:w-3/4 text-gray-350'>Brand analytics and real-time data capture.</div>
              <div className='text-center md:text-left'>
                <Link href='/dashboard'>
                  <button
                    className='mt-8 md:mt-0 focus:outline-none border-2 w-36 rounded-lg border-green-500 py-2 px-2 font-bold cursor-pointer hover:bg-green-500 transition-colors duration-200'>Find
                    out
                    more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='h-auto hidden md:block'>
            <Image src='/images/dashboard/dashboard.png' width={683} height={563} />
          </div>
        </div>
      </div>
      <div className='relative flex flex-col items-end justify-center text-white overflow-hidden'>
        <Image objectPosition='center' layout='fill' src='/images/background/image1.png' priority
               className='object-center object-cover pointer-events-none z-0' />
        <div className='md:w-1/2 z-10 md:container bg-purple-transparent'>
          <div className='md:container mx-auto relative flex flex-col justify-center md:py-64 py-32 z-10'>
            <div className='flex flex-col justify-between md:w-3/4 text-white md:text-lg md:px-20 px-10'>
              <div className='font-bold text-4xl text-green'>Features</div>
              <div className='font-bold text-2xl md:text-5xl md:mt-5 mt-2'>Wallet free</div>
              <div className='text-lg md:text-2xl md:mt-14 mt-5'>With ListMe, the consumers phone is the only thing that
                they need to enjoy
                an event. There's no need tobring their ID.
              </div>
            </div>
          </div>
        </div>
        <div className='md:hidden h-96' />
        <div className='md:hidden h-96' />
      </div>
      <div className='relative flex flex-col items-start justify-center text-white overflow-hidden'>
        <Image objectPosition='center' layout='fill' src='/images/background/image3.png' priority
               className='object-center object-cover pointer-events-none z-0' />
        <div className='md:w-1/2 z-10 md:container bg-purple-transparent'>
          <div className='md:container mx-auto relative flex flex-col justify-center md:py-64 py-32 z-10'>
            <div className='flex flex-col justify-between md:w-3/4 text-white text-lg md:px-20 px-10'>
              <div className='font-bold md:text-5xl text-3xl mt-5'>Discover</div>
              <div className='md:text-2xl md:mt-14 mt-5 text-lg'>Users can discover somewhere new and meet anew dance
                partner.
              </div>
            </div>
          </div>
        </div>
        <div className='md:hidden h-96' />
        <div className='md:hidden h-96' />
      </div>
      <div className='w-full bg-gray h-auto text-black py-24'>
        <div className='container mx-auto justify-between flex flex-col justify-center text-center space-y-10 py-8'>
          <div className='text-5xl font-bold text-purple'>Download our App</div>
          <div className='md:w-1/3 w-3/4 mx-auto md:text-2xl text-gray-500'>Looking for stress free nightlife
            experience?
            if so this is the application for you!
          </div>
          <div className='md:w-1/5 flex justify-around text-center items-center mx-auto'>
            <Image className='hover:opacity-90 cursor-pointer transition-opacity duration-200'
                   src='/images/store/apple.png' width={135} height={40} />
            <Image className='hover:opacity-90 cursor-pointer transition-opacity duration-200'
                   src='/images/store/google.png' width={135} height={40} />
          </div>
        </div>

      </div>
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  degrees: await sanity.fetch(groq`
    *[_type == "degree"]|order(publishedAt desc)
  `),
  universities: await sanity.fetch(groq`
    *[_type == "university"]|order(publishedAt desc)
  `),
});

export default Index;
