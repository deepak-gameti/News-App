import React from 'react'
import { Switch } from '@headlessui/react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [show, setShow] = useState(false);
    // const [catToggle, setCatToggle] = useState(false);


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);


    return (
        <nav className='dark:text-slate-50 dark:bg-slate-800'>
            <div className='flex justify-between items-center max-w-7xl mx-auto h-20 '>
                <div>
                    <h1 className='text-4xl font-semibold'>News App</h1>
                </div>


                <div className='flex items-center gap-10 justify-center'>
                    <Switch
                        checked={darkMode}
                        onChange={setDarkMode}
                        className={`${darkMode ? 'bg-blue-600' : 'bg-gray-300'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}>
                        <span className={`${darkMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                    </Switch>
                    <div className='mt-3'>
                        <a className='text-slate-800 inline-block h-10 w-10 mr-3 mb-3 text-center leading-10 rounded-3xl bg-slate-50 transition-all hover:text-slate-50 hover:bg-slate-800' href="#"><i className="fab fa-github"></i></a>
                        <a className='text-slate-800 inline-block h-10 w-10 mr-3 mb-3 text-center leading-10 rounded-3xl bg-slate-50 transition-all hover:text-slate-50 hover:bg-slate-800' href="#"><i className="fab fa-twitter"></i></a>
                        <a className='text-slate-800 inline-block h-10 w-10 mr-3 mb-3 text-center leading-10 rounded-3xl bg-slate-50 transition-all hover:text-slate-50 hover:bg-slate-800' href="#"><i className="fab fa-instagram"></i></a>
                        <a className='text-slate-800 inline-block h-10 w-10 mr-3 mb-3 text-center leading-10 rounded-3xl bg-slate-50 transition-all hover:text-slate-50 hover:bg-slate-800' href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='px-20 mx-auto flex justify-center items-center h-10 gap-8 text-sm font-medium tracking-wide'>
                <Link to="/">Home</Link>
                <Link onClick={() => { setShow(!show) }}>Category <i className={`fa-solid fa-angle-down transition-transform ${show ? 'rotate-180' : ''}`}></i></Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                {show &&
                    <ul className='bg-slate-200 p-10 flex flex-col gap-4 absolute top-[120px] right-[850px] w-48 dark:bg-slate-700 rounded-md backdrop-blur-lg'>
                        <li className='text-sm text-slate-600 hover:text-slate-800 hover:text-[16px] dark:text-slate-50 transition-all'><Link to="/business">business</Link></li>
                        <li className='text-sm text-slate-600 hover:text-slate-800 hover:text-[16px] dark:text-slate-50 transition-all'><Link to="/entertainment">entertainment</Link></li>
                        <li className='text-sm text-slate-600 hover:text-slate-800 hover:text-[16px] dark:text-slate-50 transition-all'><Link to="/general">general</Link></li>
                        <li className='text-sm text-slate-600 hover:text-slate-800 hover:text-[16px] dark:text-slate-50 transition-all'><Link to="/health">health</Link></li>
                        <li className='text-sm text-slate-600 hover:text-slate-800 hover:text-[16px] dark:text-slate-50 transition-all'><Link to="/science">science</Link></li>
                        <li className='text-sm text-slate-600 hover:text-slate-800 hover:text-[16px] dark:text-slate-50 transition-all'><Link to="/sports">sports</Link></li>
                        <li className='text-sm text-slate-600 hover:text-slate-800 hover:text-[16px] dark:text-slate-50 transition-all'><Link to="/technology">technology</Link></li>
                    </ul>

                }
            </div>
            <hr />
        </nav>
    )
}

export default Navbar