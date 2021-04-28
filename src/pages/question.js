import Layout from '@components/Layout';
import Link from 'next/link';
import QuestionList from '@components/list/QuestionList';
import Button from '@components/element/Button';

export default function QuestionPage() {
  const questionList = [
    {
      question: 'Can I try before I buy?',
      answer: (
        <p>
          Yes sign up today and let our activation team walk you through the
          DEMO.
          <br />
          <br />
          The service is <strong>free.</strong>
        </p>
      ),
    },
    {
      question: 'What payment methods do you accept?',
      answer: (
        <p>
          Yes sign up today and let our activation team walk you through the
          DEMO.
          <br />
          <br />
          The service is <strong>free.</strong>
        </p>
      ),
    },
    {
      question: 'How do I create events?',
      answer: (
        <p>
          Yes sign up today and let our activation team walk you through the
          DEMO.
          <br />
          <br />
          The service is <strong>free.</strong>
        </p>
      ),
    },
    {
      question: 'How do my subscribers get on the guestlist for my events?',
      answer: (
        <p>
          Yes sign up today and let our activation team walk you through the
          DEMO.
          <br />
          <br />
          The service is <strong>free.</strong>
        </p>
      ),
    },
  ];
  return (
    <Layout>
      <div className="h-auto bg-page-black text-white py-20 text-sm text-center">
        <div className="font-bold text-4xl mx-auto text-center">
          All your business questions answered
        </div>
        <Link href="/contact">
          <Button type="small" />
        </Link>
        <div className="container mx-auto flex flex-col justify-center items-center space-y-8">
          <QuestionList list={questionList} />
        </div>
      </div>
    </Layout>
  );
}
