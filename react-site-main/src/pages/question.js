import Layout from '@components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';


export default function QuestionPage() {
  const [current, setCurrent] = useState(-1);
  return (
    <Layout>
      <div className='h-auto bg-page-black text-white py-20 text-sm text-center'>
        <div className='font-bold text-4xl mx-auto text-center'>All your business questions answered</div>
        <Link href='/contact'>
          <button
            className='border-2 md:w-24 w-28 rounded px-0.5 border-green-500 py-0.5 cursor-pointer hover:bg-green-500 transition-colors duration-200 my-10 focus:outline-none '>
            Get in touch
          </button>
        </Link>
        <div className='container mx-auto flex flex-col justify-center items-center space-y-8'>
          {
            [
              {
                question: 'Can I try before I buy?',
                answer: (
                  <p>Yes sign up today and let our activation team walk you through the DEMO.
                    <br />
                    <br />
                    The service is <strong>free.</strong>
                  </p>),
              },
              {
                question: 'What payment methods do you accept?',
                answer: (
                  <p>Yes sign up today and let our activation team walk you through the DEMO.
                    <br />
                    <br />
                    The service is <strong>free.</strong>
                  </p>),
              },
              {
                question: 'How do I create events?',
                answer: (
                  <p>Yes sign up today and let our activation team walk you through the DEMO.
                    <br />
                    <br />
                    The service is <strong>free.</strong>
                  </p>),
              },
              {
                question: 'How do my subscribers get on the guestlist for my events?',
                answer: (
                  <p>Yes sign up today and let our activation team walk you through the DEMO.
                    <br />
                    <br />
                    The service is <strong>free.</strong>
                  </p>),
              }].map(({ question, answer }, index) => (
              <div className='md:w-1/2 w-3/4' key={index}>
                <div onClick={() => setCurrent(current === index ? -1 : index)}
                     className='flex flex-row justify-between border-purple px-5 py-4 md:text-xl text-lg text-left rounded-2xl hover:bg-purple cursor-pointer'>
                  <div className='leading-10 select-none'>{question}</div>
                  <div
                    className={cn(' text-3xl', current === index ? 'text-gray-300' : 'text-purple')}>{current === index ? '-' : '+'}</div>
                </div>
                <div className={cn('mt-5 text-left px-2 text-base', current === index ? '' : 'hidden')}>
                  {answer}
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </Layout>


  );
}
