import Head from 'next/head';
import DashboardExample from '../components/DashboardExample';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <DashboardExample/>
    </div>
  )
}
