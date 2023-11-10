import React, { useEffect } from 'react';
import Header from './components/header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { fetchApi } from "./utils/apiConfig"
import { useDispatch } from 'react-redux';
import { addUrl } from './features/apiConfigurationSlice';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        navigate("/browse")
      } else {
        navigate("/");
      }
    });
  }, [navigate])

  // fetch configuration

  useEffect(() => {
    const fecthConfiguration = async () => {
      try {
        const res = await fetchApi("/configuration")
        console.log("Res", res)
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        dispatch(addUrl(url))
      } catch (error) {

      }
    }
    fecthConfiguration()
  }, [dispatch])
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
