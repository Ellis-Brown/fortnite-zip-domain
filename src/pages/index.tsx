import Head from 'next/head';
import React from 'react';
export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1f1f1f', 
      color: '#f5f5f5', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' }}>
      <Head>
        <title>Fortnite.zip Domain Name</title>
        <meta name="description" content="I love the name fortnite, it sounds nice" />
      </Head>

      <main style={{ 
        padding: '5rem 0', 
        flex: '1', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '2rem' }}>
          I think the name <span style={{ color: '#61dafb' }}>fortnite</span> is cool.
        </h1>

        <p style={{ 
          fontSize: '1.5rem', 
          textAlign: 'center', 
          lineHeight: '1.5', 
          maxWidth: '800px', 
          marginBottom: '2rem' }}>
          I love fortnite!
        </p>
      </main>

      <footer style={{ 
        width: '100%', 
        height: '100px', 
        borderTop: '1px solid #eaeaea', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' }}>
        Powered by{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' }}>
          Next.js
        </a>
      </footer>
    </div>
  )
}

