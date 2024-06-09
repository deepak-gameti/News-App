import React from 'react'
import spinner from '../assets/spiner.gif'

const Spinner = () => {
  return (
    <>
    <div className='flex justify-center items-center dark:bg-slate-800'>
    <img src={spinner} alt="spinner" />
    </div>
    </>
  )
}

export default Spinner