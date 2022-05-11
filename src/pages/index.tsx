import {Footer, Header, NavBar, SectionOne, SectionTwo} from 'components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<main>
			<Head>
				<title>Insure Landing Page</title>
				<meta name='description' content='Coded By Markos Bahgat' />
				<link rel='icon' href='./favicon-32x32.png' />
			</Head>

			<div>
				<NavBar />
				<Header/>
				<SectionOne />
				<SectionTwo />
				<Footer/>
			</div>
		</main>
	);
};

export default Home;
