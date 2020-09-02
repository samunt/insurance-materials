import React from 'react';
import App from 'next/app';
import {GlobalFormProvider} from "../contexts/FormContext";
import Container from '@material-ui/core/Container';
import MainNavbar from "../components/MainNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../public/css/global.css';
import { ThemeProvider } from 'styled-components'

const theme = {
        colors: {
          primary: '#0070f3',
        },
      }

export default class MyApp extends App {
        render() {
          const { Component, pageProps } = this.props
          return (
                <ThemeProvider theme={theme}>
                  <Container maxWidth="lg">
                    <GlobalFormProvider>
                      <MainNavbar/>
                      <Component {...pageProps} />
                    </GlobalFormProvider>
                  </Container>
        </ThemeProvider>
          )
        }
      }

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

//export default MyApp
