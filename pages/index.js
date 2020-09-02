import React from 'react';
import PersonalInformaionForm from '../components/PersonalInformationForm'
import Head from "next/head"
import CssBaseline from "@material-ui/core/CssBaseline"

function Index() {
    return (
        <React.Fragment>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <CssBaseline />
    <PersonalInformaionForm/>
  </React.Fragment>     
    )
}
export default Index


// get intiial props runs first time on the server,
// and each consecutive time on the client
// Index.getInitialProps = async (ctx) => {
//
//     // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     // const {data} = res;
//     // return {posts: data} //must be an object
//     return {}
//
// };

