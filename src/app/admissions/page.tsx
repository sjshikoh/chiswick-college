import React from 'react'
export default async function Admissions() {
  await new Promise(resolve => {setTimeout(resolve, 5000 )
  })
  // add   delay  to show loading 

  return (
    <div className='h-[100vh]'>
      <h2 className='text-[50px] font-semibold text-center'>Admissions</h2>
      <p className='text-[24px] mt-10 max-w-7xl text-center mx-auto my-20 px-4'>
        Welcome to our Alumni Page, a dedicated platform to connect 30 years of
        graduates of The English College. This page serves as a hub for
        registering and staying in touch with fellow alumni and sharing
        cherished memories and experiences from your time at our school. Join us
        as we celebrate the lasting bonds formed during your journey at The
        English College and embark on new adventures together.
      </p>
    
    </div>
  );
}


