import React from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp
