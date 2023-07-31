import React from 'react'

function Card({flags, name, population, capital, region, id}) {

  const setLocalStorage = () => { 
    console.log(id)
    localStorage.setItem("country", id)
  }
  return (
    <>
        <a href="/country">
        <div className='mt-5 md:w-64 md:h-80 md:m-4 rounded darkBlueElement' onClick={setLocalStorage}>
            <div className='md:h-40 rounded-t-lg'>
            <img src={flags} alt="" className='rounded-t-md w-full h-full'/>
            </div>
            <div className='p-5 mt-3'>
                <h3 className='text-lg font-bold nunito mb-3'>{`${name}`}</h3>
                <p className=' font-bold nunito'>Population: <span className='font-light'>{`${Number(population).toLocaleString('en-US')}`}</span></p>
                <p className='font-bold nunito'>Region: <span className='font-light'>{`${region}`}</span></p>
                <p className='font-bold nunito'>Capital: <span className='font-light'>{`${capital}`}</span></p>
            </div>
        </div>
        </a>
    </>
  )
}

export default Card