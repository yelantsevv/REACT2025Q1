import React from 'react';
import Head from 'next/head';
import { NotFoundPage } from '../components';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Not found" />
      </Head>
      <NotFoundPage />
    </>
  );
}
