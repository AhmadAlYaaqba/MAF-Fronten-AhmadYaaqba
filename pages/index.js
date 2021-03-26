import Head from 'next/head';
import BackgroundsBlure from '../components/BackgroundsBlure';
import Button from '../components/button';

export default function Home() {
  return (
    <div className={'container font-Playfair'}>
      <Head>
        <title>MAF Assignment</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='/fonts/PlayfairDisplay-Regular.ttf' rel='font/ttf'></link>
        <link href='/fonts/Larsseit-Bold.otf' rel='font/otf'></link>
      </Head>

      <div className='w-screen bg-top-hero bg-hero-landing bg-cover px-60 py-12 text-white relative'>
        <div className='flex items-center'>
          <span className='text-white text-4xl'>
            NT<span className='text-5xl font-bold text-turquoise-500'>.</span>
          </span>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' className='h-4 ml-auto'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
          <Button displayText='Menu' />
        </div>

        <div className='mt-32 text-center w-1/2	mx-auto pb-48'>
          <h1 className='text-9xl font-bold'>Night Trips</h1>
          <h2 className='uppercase text-base pt-12 font-bold tracking-widest'>WE GOT TRIPS FOR THE TRIPPSTER IN YOU</h2>
          <h3 className='font-Larsseit px-8 pt-12 text-1md-l'>
            Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis
            congue. Vel risus, arcu a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
          </h3>
        </div>
        <div className='flex items-end flex-col h-72'>
          <img className='mb-6' alt='twitter' src='/images/twitter.svg' />
          <img className='mb-6' alt='instagram' src='/images/instagram.svg' />
          <img alt='facebook' src='/images/facebook.svg' />
        </div>
        <div className='bg-hero-gradient w-screen h-96 absolute inset-x-0 bottom-0'></div>
      </div>

      <div className='px-60 pl-64 py-12 text-white w-screen relative'>
        <BackgroundsBlure />
        <div className='flex items-center'>
          <span className='text-7xl'>Pick your trip</span>
          <img className='h-6 mx-10' alt='x' src='/images/x1.svg' />
          <span className='text-base'>
            Our team put together some trips to you to discover,
            <br />
            feel free to discover each of them.
          </span>
        </div>
        {/* Tabs */}
        <div className='flex items-center mt-20 text-center justify-center border-b-2 border-turquoise-500'>
          <div className='flex-auto pb-8 border-b-4 border-turquoise-500'>Chill Adventure</div>
          <div className='flex-auto pb-8'>Spooky Times</div>
          <div className='flex-auto pb-8'>Desert Madness</div>
          <div className='flex-auto pb-8'>Out in the wild</div>
        </div>
        <div className='flex items-center mt-20 text-center mb-40 relative'>
          <div className='relative'>
            <img className='rounded-2xl relative z-10' alt='unsplash' src='/images/joe-mania-tyAAl6r_c2U-unsplash1.jpg' />
            <img className='absolute bottom-19min left-24min' alt='dots' src='/images/Dots.png' />
          </div>
          <div className='flex-1 pl-40 text-left'>
            <h1 className='text-6xl mb-8'>Chill Adventure</h1>
            <h2 className='text-base w-2/3 mb-12'>
              Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
              <br />
              <br /> Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus,
              dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.
            </h2>
            <Button displayText='SEE OUR LATEST OFFER' />
          </div>
          <div className='absolute bottom-0 right-0'>
            <div className='flex'>
              <img alt='twitter' src='/images/twitter.svg' />
              <img className='ml-6' alt='instagram' src='/images/instagram.svg' />
              <img className='ml-6' alt='facebook' src='/images/facebook.svg' />
            </div>
            <img className='relative z-10 bottom-4' alt='unsplash' src='/images/Gimmickline.svg' />
          </div>
        </div>
      </div>
    </div>
  );
}
