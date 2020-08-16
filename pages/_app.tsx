import React from 'react';
import { AppProps } from 'next/app';

import '../styles/main.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }): AppProps => <Component {...pageProps} />;

export default MyApp;
