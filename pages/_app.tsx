import '../styles/globals.css'
import type { AppProps } from 'next/app'
import WebLayout from '../component/Layout/webLayout'
import { useState,useEffect} from 'react';

function MyApp({Component, pageProps }: AppProps) {

  useState(typeof window === "undefined");

  const [isSSR, setIsSSR] = useState(true);

useEffect(() => {
	setIsSSR(false);
}, []);


  return (
    <WebLayout>
      <Component {...pageProps} />
    </WebLayout>
  )
}

export default MyApp
