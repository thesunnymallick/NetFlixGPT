import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import manIcon from "../../assets/man.png"
import { FiLogOut } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { removeUser } from '../../features/userSlice'
import { BsSearch } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { RxCross1 } from "react-icons/rx"
import MobileMenu from './MobileMenu'



type RootState = {
    auth: {
        user: {
            uid: boolean,
            isAuth: boolean,
            email: string,
            displayName: string,
        }
    }
};
const Header = () => {
    const { user } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState<boolean>(false);



    const singOutHandel = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {
        });
    }

    const toggleMenu = () => {
        setIsShow(!isShow)
    }
    return (
        <>
            <div className="logo absolute w-full top-0 bg-gradient-to-b from-black  z-50 py-2 px-0 lg:px-5">
                <div className='flex items-center justify-between px-4 lg:px-0'>
                    <div className='flex items-center'>
                        <img className=' w-32 sm:w-40' src={logo} alt="logo" />
                        {
                            user.isAuth && (<div className='hidden lg:flex items-center gap-4 text-zinc-400 transition-all '>
                                <Link className='text-lg hover:text-white ' to="/movies">Home</Link>
                                <Link className='text-lg hover:text-white' to="/movies">Movies</Link>
                                <Link className='text-lg  hover:text-white' to="/tvshow">TVShow</Link>
                                <Link className='text-lg  hover:text-white' to="/tvshow">New & Popular</Link>
                                <Link className='text-lg  hover:text-white' to="/tvshow">MyList</Link>
                            </div>)
                        }
                    </div>

                    <div className='flex items-center gap-5'>
                        {
                            user.isAuth && (
                                <div className='flex items-center gap-4'>
                                    <button className='border-none outline-none text-zinc-400 font-semibold flex items-center justify-center hover:text-white transition-all'>
                                        <BsSearch className='text-xl' />
                                    </button>
                                    <button
                                        onClick={toggleMenu}
                                        className=' lg:hidden border-none outline-none text-zinc-400 font-semibold flex items-center justify-center hover:text-white transition-all'>
                                        {
                                            isShow === true ? <RxCross1 className='text-xl' /> : <FiMenu className='text-xl' />
                                        }
                                    </button>
                                </div>
                            )
                        }
                        {
                            user.isAuth && (<div className='hidden lg:flex items-center gap-4'>
                                <select className=' bg-zinc-700 text-zinc-300 px-2 py-1 rounded-md outline-none border-none'>
                                    <option value="">English</option>
                                    <option value="">Hindi</option>
                                    <option value="">Bengali</option>
                                </select>

                                <span className='text-white text-lg '>{user.displayName}</span>
                                <img className='w-7 h-7 rounded-full' src={manIcon} alt="user" />
                                <button
                                    onClick={singOutHandel}
                                    className='border-none outline-none text-xl text-white font-medium  flex items-center' >
                                    <FiLogOut className='text-xl  hover:text-red-500 transition-all' />
                                </button>
                            </div>)
                        }

                    </div>
                </div>
                {
                    (<MobileMenu isShow={isShow} />)
                }

            </div>

        </>
    )
}

export default Header 