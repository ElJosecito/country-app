import React from 'react'

function Card({flags, name, population, capital, region, id}) {
  //push to the country page
  const getByName = () => {
    window.location.href = `/country/${id}`
  }
  return (
    <>
        <div className='dark:bg-darkBlueElement rounded-lg cursor-pointer' onClick={getByName}>
            <div className='md:h-64 rounded-t-lg'>
            <img src={flags} alt="" className='rounded-t-md w-full h-full'/>
            </div>
            <div className='p-5 mt-3 nunito'>
                <h3 className='text-xl font-bold pb-3 dark:text-veryLightGray'>{name}</h3>
                <p className='font-bold dark:text-veryLightGray'>Population: <span className='font-light dark:text-darkGray'>{`${Number(population).toLocaleString('en-US')}`}</span></p>
                <p className='font-bold dark:text-veryLightGray'>Region: <span className='font-light dark:text-darkGray'>{`${region}`}</span></p>
                <p className='font-bold dark:text-veryLightGray'>Capital: <span className='font-light dark:text-darkGray'>{`${capital}`}</span></p>
            </div>
        </div>
    </>
  )
}

export default Card