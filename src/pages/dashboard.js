import Layout from '@components/Layout';
import HomeSwipe from '@components/index/HomeSwipe';

export default function DashboardPage() {
  const cardList = [
    {
      title: 'Activate',
      description: 'Create an account within minutes',
    },
    {
      title: 'Connect',
      description:
        'Connect your database to the ListMe ecosystem and we will automatically inform the customers to download the app to see your events.',
    },
    {
      title: 'Event Planning',
      description:
        'Create the events for the whole year within a seamless number of clicks.',
    },
    {
      title: 'No in-house ID machine needed',
      description:
        'ListMe will manage and verify all IDs to eliminate human contact.',
    },
    {
      title: 'Messages',
      description:
        'Respond to guests questions within seconds with the in chat feature.',
    },
    {
      title: 'Events made simple',
      description:
        'View event analytics in real-time. A safe & secure full digital hospitality solution, sign up today!',
    },
  ];

  return (
    <Layout>
      <HomeSwipe type="dashboard" list={cardList} />
    </Layout>
  );
}
