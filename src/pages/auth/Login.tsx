import React, { useRef, useState } from 'react'
import checkValidateForm from '../../utils/validateForm';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../utils/firebase"

import { useDispatch } from "react-redux"
import { addUser } from '../../features/userSlice';
const Login = () => {

    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isError, setIsError] = useState<null | string>(null)
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const name = useRef<HTMLInputElement | null>(null);


    const handelForm = async () => {
        const message = checkValidateForm(email.current?.value, password.current?.value, name.current?.value, isShow)

        setIsError(message)
        if (message) return;

        if (isShow === true) {
            // Create  new user 
            if (email.current?.value && password?.current?.value) {
                try {
                    await createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                    // update user
                    if (auth.currentUser !== null) {
                        updateProfile(auth.currentUser, {
                            displayName: name.current?.value,
                            photoURL: "https://example.com/jane-q-user/profile.jpg"
                        }).then(() => {

                            // dispath new  user
                            dispatch(addUser(JSON.stringify(auth.currentUser)))
                        }).catch((error) => {
                            console.log(error)
                        });
                    }
                } catch (error) {
                    setIsError("email Id / password not valid")
                }
            }

        } else {
            // sing in 
            if (email.current?.value && password.current?.value) {

                try {
                    const { user } = await signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                    dispatch(addUser(JSON.stringify(user)))
                } catch (error) {
                    setIsError("User email id / password not found")
                }


            }

        }

    }

    const toggleForm = () => {
        setIsShow(!isShow);
        setIsError(null);
    }





    return (
        <div className={`login w-full h-screen bg-opacity-20`}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='inset-0 absolute flex items-center justify-center'>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className='flex flex-col bg-black w-[85%] md:w-[47%] lg:w-[30%] gap-5 bg-opacity-70 px-5  <App /> py-10 rounded-md shadow-xl'>
                    <h1 className='text-white font-semibold text-3xl pb-5'>
                        {
                            isShow === true ? 'Sing up' : 'Sing in'
                        }
                    </h1>
                    {
                        isShow && (<input
                            ref={name}
                            className='w-full px-4 py-2 rounded-md border-none  bg-zinc-800 text-lg text-white outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700'
                            type="text"
                            placeholder='Enter your name'
                            required />)
                    }
                    <input
                        ref={email}
                        className='w-full px-4 py-2 rounded-md border-none  bg-zinc-800 text-lg text-white outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700' type="email" placeholder='Enter your email' required />
                    <input
                        ref={password}
                        className='w-full px-4 py-2 rounded-md border-none  bg-zinc-800 text-lg text-white outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700'
                        type="password" placeholder='Enter your password' required />
                    {
                        isError && <span className='text-sm text-yellow-500 font-bold text-center'>{isError}</span>
                    }
                    <button
                        onClick={handelForm}
                        className='w-full h-11 bg-red-600 text-white font-semibold text-lg rounded-md mt-2 hover:bg-red-700 transition-all'
                    >
                        {
                            isShow === true ? 'Sign up' : 'Sign in'
                        }
                    </button>

                    <div className='flex items-center gap-2 text-lg  mt-9'>
                        <span className='text-zinc-500'>
                            {
                                isShow === true ? 'Allready registerd?' : 'New to Netflix? '
                            }
                        </span>
                        <span
                            onClick={toggleForm}
                            className='text-white hover:text-red-600 transition-all cursor-pointer'>
                            {
                                isShow === true ? 'Sign in now' : 'Sign up now.'
                            }
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login