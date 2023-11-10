import React from 'react'
import { useSelector } from 'react-redux';
import manIcon from "../../assets/man.png"
import { Link } from 'react-router-dom';
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
interface MobileMenuProps {
    isShow: boolean,
}
const MobileMenu: React.FC<MobileMenuProps> = ({ isShow }) => {
    const { user } = useSelector((state: RootState) => state.auth)
    return (
        <>
            <div className={`transition-transform duration-700 ease-in-out ${isShow === true ? "translate-y-0" : "-translate-y-[150%]"}  absolute top-11 z-50 py-4 w-[100%] bg-gradient-to-t from-black text-white   h-screen`}>
                <div className='flex flex-col items-center py-4 z-40 '>
                    <img className='w-10 h-10 rounded-full' src={manIcon} alt="user" />
                    <span className='text-white text-xl font-semibold '>{user.displayName}</span>
                </div>
                {
                    user.isAuth && (
                        <div className='flex flex-col gap-4 text-zinc-400 transition-all py-2 px-5 font-bold'>
                            <Link className='text-lg hover:text-white ' to="/movies">Home</Link>
                            <Link className='text-lg hover:text-white' to="/movies">Movies</Link>
                            <Link className='text-lg  hover:text-white' to="/tvshow">TVShow</Link>
                            <Link className='text-lg  hover:text-white' to="/tvshow">New & Popular</Link>
                            <Link className='text-lg  hover:text-white' to="/tvshow">MyList</Link>

                        </div>)
                }
                {
                    user.isAuth && (
                        <div className='px-3 py-2 flex flex-col gap-4'>
                            <select className=' bg-zinc-700 text-zinc-300 px-2 py-1 rounded-md outline-none border-none w-[70%]'>
                                <option value="">English</option>
                                <option value="">Hindi</option>
                                <option value="">Bengali</option>
                            </select>
                        </div>
                    )
                }
                {
                    user.isAuth && <div className='flex justify-center py-4'>
                        <button className='bg-zinc-700 w-[30%] text-base text-white px-2 py-1 rounded-md mt-5 font-bold'>Logout</button>
                    </div>
                }
                <div className='absolute w-full h-full -z-20 top-0  bg-gradient-to-t from-zinc-950  '>
                </div>
                <div className='absolute w-full h-full -z-20 top-0  bg-gradient-to-t from-zinc-950  '>
                </div>
                <div className='absolute w-full h-full -z-20 top-0  bg-gradient-to-t from-zinc-950  '>
                </div>
                <div className='absolute w-full h-full -z-20 top-0  bg-gradient-to-t from-zinc-950  '>
                </div>
                <div className='absolute w-full h-full -z-20 top-0  bg-gradient-to-t from-zinc-950  '>
                </div>
            </div>

        </>
    )
}

export default MobileMenu