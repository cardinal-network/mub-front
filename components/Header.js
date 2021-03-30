import Head from 'next/head';
import Nav from '../components/Nav';

export default function Header() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width-device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mubmusic.com/" />
      <meta property="og:site_name" content="Mub Music" />
      <meta property="og:image" content="https://s0.wp.com/i/blank.jpg" />
      <meta property="og:locale" content="en" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
    </Head>
    <header>
        <Nav />
    </header>
    </>
  )
}