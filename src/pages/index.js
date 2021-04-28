import groq from 'groq';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/element/Button';

import HomeSwipe from '@components/index/HomeSwipe';
import ServiceList from '@components/list/ServiceList';
import Store from '@components/element/Store';
import sanity from '../utils/sanity';
import Layout from '../components/Layout';

function Index() {
  const cardList = [
    {
      title: 'Get the app',
      description:
        'You are just a moment away from thousands of events to explore',
    },
    {
      title: 'Create a social profile',
      description:
        'Create your social media profile, scan your ID and be verified in minutes, leave the wallet at home.',
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
      description:
        'Make new friends, follow brands and make social planning easier.',
    },
    {
      title: 'Enjoy the Experience',
      description: 'Your phone is the only thing you need',
    },
  ];

  const serviceList = [
    {
      img: '/images/service/g.png',
      title: 'Industry term',
      description: '"Guestlist".',
    },
    {
      img: '/images/service/r.png',
      title: 'Industry term',
      description: '"Table Booking"',
    },
    {
      img: '/images/service/t.png',
      title: 'Industry term',
      description: '"Guestlist".',
    },
    {
      img: '/images/service/v.png',
      title: 'Industry term',
      description: '"Guestlist".',
    },
  ];

  return (
    <Layout>
      <NextSeo
        title="Kickoff NextJs"
        description="A short description goes here."
      />
      <div className="relative flex flex-col items-center justify-center text-white overflow-hidden py-14 md:py-0">
        <Image
          objectPosition="center"
          layout="fill"
          src="/images/background/image2.png"
          priority
          className="object-center object-cover pointer-events-none z-0"
        />
        <div className="w-full z-10 container">
          <div className="container mx-auto relative flex flex-col justify-start md:py-64 py-24 md:space-y-12 z-10">
            <div className="space-y-10 md:space-y-0 flex flex-col justify-between md:w-1/3 text-white md:h-80 text-lg px-10 md:px-0 space-y-3 md:space-y-0">
              <div className="font-bold text-5xl">Events made simple.</div>
              <div>
                A safe & secure social networking platform. We help brands &
                venues in the hospitality industry put the consumer first with a
                full digital solution.
              </div>
              <div>
                No paper lD,no paper clipboard & no in house ID machines needed
              </div>
              <Button className="w-24">Sign up</Button>
            </div>
          </div>
          <div className="float-right mr-10 mb-10 text-lg font-bold">
            (Listme 30second video)
          </div>
        </div>
      </div>
      <HomeSwipe list={cardList} />
      <div className="w-full bg-gray h-auto text-black md:py-32 py-20 ">
        <div className="md:container mx-auto justify-between flex  flex-col justify-center text-center space-y-24 py-8">
          <div className="text-4xl font-bold">Our Services</div>
          <div className="flex justify-around md:flex-row flex-col md:space-y-0 space-y-8">
            <ServiceList list={serviceList} />
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-auto text-white md:py-40 py-12 px-8 md:px-0">
        <div className="container mx-auto justify-between flex flex-col md:flex-row">
          <div className="flex justify-center flex-col h-full space-y-12 mt-14">
            <div className="text-3xl space-y-3">
              <div className="text-green md:text-5xl text-4xl font-bold md:w-3/4">
                ListMe Dashboard & Personal Digiboard
              </div>
              <div className="text-purple text-4xl font-bold">
                Your Safe Space
              </div>
            </div>
            <div className="h-auto md:hidden">
              <Image
                src="/images/dashboard/dashboard.png"
                width={683}
                height={563}
              />
            </div>
            <div className="space-y-5 px-10 md:px-0">
              <div className="text-xl md:w-3/4 text-gray-350">
                A one-stop system that manages every aspect required for
                promoting and marketing a venue or event.
              </div>
              <div className="text-xl md:w-3/4 text-gray-350">
                Brand analytics and real-time data capture.
              </div>
              <div className="text-center md:text-left">
                <Link href="/dashboard">
                  <Button className="font-bold">Find out more</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-auto hidden md:block">
            <Image
              src="/images/dashboard/dashboard.png"
              width={683}
              height={563}
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-end justify-center text-white overflow-hidden">
        <Image
          objectPosition="center"
          layout="fill"
          src="/images/background/image1.png"
          priority
          className="object-center object-cover pointer-events-none z-0"
        />
        <div className="md:w-1/2 z-10 md:container bg-purple-transparent">
          <div className="md:container mx-auto relative flex flex-col justify-center md:py-64 py-32 z-10">
            <div className="flex flex-col justify-between md:w-3/4 text-white md:text-lg md:px-20 px-10">
              <div className="font-bold text-4xl text-green">Features</div>
              <div className="font-bold text-2xl md:text-5xl md:mt-5 mt-2">
                Wallet free
              </div>
              <div className="text-lg md:text-2xl md:mt-14 mt-5">
                With ListMe, the consumers phone is the only thing that they
                need to enjoy an event. There&apos;s no need tobring their ID.
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden h-96" />
        <div className="md:hidden h-96" />
      </div>
      <div className="relative flex flex-col items-start justify-center text-white overflow-hidden">
        <Image
          objectPosition="center"
          layout="fill"
          src="/images/background/image3.png"
          priority
          className="object-center object-cover pointer-events-none z-0"
        />
        <div className="md:w-1/2 z-10 md:container bg-purple-transparent">
          <div className="md:container mx-auto relative flex flex-col justify-center md:py-64 py-32 z-10">
            <div className="flex flex-col justify-between md:w-3/4 text-white text-lg md:px-20 px-10">
              <div className="font-bold md:text-5xl text-3xl mt-5">
                Discover
              </div>
              <div className="md:text-2xl md:mt-14 mt-5 text-lg">
                Users can discover somewhere new and meet anew dance partner.
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden h-96" />
        <div className="md:hidden h-96" />
      </div>
      <div className="w-full bg-gray h-auto text-black py-24">
        <div className="container mx-auto justify-between flex flex-col justify-center text-center space-y-10 py-8">
          <div className="text-5xl font-bold text-purple">Download our App</div>
          <div className="md:w-1/3 w-3/4 mx-auto md:text-2xl text-gray-500">
            Looking for stress free nightlife experience? if so this is the
            application for you!
          </div>
          <div className="md:w-1/5 flex justify-around text-center items-center mx-auto">
            <Store src="/images/store/apple.png" />
            <Store src="/images/store/google.png" />
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
