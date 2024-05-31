import React from 'react'
import { Switch } from '@headlessui/react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);


    return (
        <nav className=' dark:text-slate-50 dark:bg-slate-800'>
            <div className='flex justify-between items-center max-w-7xl mx-auto h-20 '>
                <div className='text-3xl font-extrabold tracking-widest'>NA</div>
                <h1 className='text-4xl font-semibold'>News App</h1>
                <Switch
                    checked={darkMode}
                    onChange={setDarkMode}
                    className={`${darkMode ? 'bg-blue-600' : 'bg-gray-300'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}>
                    <span className={`${darkMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
                </Switch>
            </div>
                <hr />
            <div className='px-20 mx-auto flex items-center h-10 gap-8 text-sm font-medium tracking-wide'>
               <Link to="/business">business</Link>
               <Link to="/entertainment">entertainment</Link>
               <Link to="/general">general</Link>
               <Link to="/health">health</Link>
               <Link to="/science">science</Link>
               <Link to="/sports">sports</Link>
               <Link to="/technology">technology</Link>
            </div>
            <hr />
        </nav>
    )
}

export default Navbar