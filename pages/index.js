import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
// import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <>
      <div className={styles?.container}>
        <Head>
          <title>Welcome to Next.js!</title>
        </Head>
        <h1>Index Page</h1>
        <h2><Link href="/about">Go to about page link</Link></h2>
        <span onClick={() => Router.push('/about')}>About Page Push Link</span>
        <div>Next stars: {props.stars}</div><br />
        <img src="/Img1.jpeg" alt="My demo images"></img>
      </div>
    </>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return {
    props: { stars: json.stargazers_count }
  }
}
