import Layout from '@components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import ReactSwipe from 'react-swipe';
import Image from 'next/image';


export default function DashboardPage() {
  const [index, setIndex] = useState(0);
  let reactSwipeEl;

  const cardList = [
    {
      title: 'Activate',
      description: 'Create an account within minutes',
    },
    {
      title: 'Connect',
      description: 'Connect your database to the ListMe ecosystem and we will automatically inform the customers to download the app to see your events.',
    },
    {
      title: 'Event Planning',
      description: 'Create the events for the whole year within a seamless number of clicks.',
    },
    {
      title: 'No in-house ID machine needed',
      description: 'ListMe will manage and verify all IDs to eliminate human contact.',
    },
    {
      title: 'Messages',
      description: 'Respond to guests questions within seconds with the in chat feature.',
    },
    {
      title: 'Events made simple',
      description: 'View event analytics in real-time. A safe & secure full digital hospitality solution, sign up today!',
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
      setIndex(index)

    },
  };

  return (
    <Layout>
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
                      <div className='text-green'>The ListMe Dashboard</div>
                    </div>
                    <div className='space-y-12'>
                      <div className='text-9xl font-bold text-purple'>0{idx + 1}</div>
                      <div className='text-5xl font-bold'>{title}</div>
                      <div className='md:text-2xl md:w-3/4 text-gray-350'>{description}
                      </div>
                    </div>
                  </div>
                  <div className='h-auto text-center'>
                    <Image src={`/images/dashboard/${idx + 1}.png`} priority width={815} height={640} />
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
                    key={idx} onClick={()=>{setIndex(idx)}}/>
                );
              })}
          </div>
        </div>

      </div>
    </Layout>


  );
}
