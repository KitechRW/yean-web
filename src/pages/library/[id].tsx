import Head from 'next/head';
import React from 'react';
import MetaData from 'modules/_partials/MetaData';
import Scaffold from 'modules/layouts/Scaffold';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ViewBook from 'modules/_partials/PDFPreview/ViewBook';

const getBook = (id: number) => {
  return axios
    .get(`${process.env.DEFAULT_API}/api/libraries/${id}`)
    .then(resp => {
      return resp.data;
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {} },
      };
    });
};

const LibraryPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [book, setBook] = React.useState<any>(null);
  const router = useRouter();
  const getBookRef = React.useRef(() => {});

  getBookRef.current = async () => {
    setLoading(true);
    const fetchedBook = await getBook(Number(router.query.id));
    setLoading(false);
    if (fetchedBook?.data) {
      setBook(fetchedBook.data);
    } else {
      setBook(null);
    }
  };
  React.useEffect(() => {
    if (router.query.id) {
      getBookRef.current();
    }
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>Library - Yean</title>
        <MetaData />
      </Head>
      <Scaffold>
        {loading && <p className="p-4 md:p-8">Loading...</p>}
        {!book && !loading ? (
          <div className="flex space-x-6 p-4 md:p-8">
            <p className="text-bold">Book is not available</p>{' '}
            <p className="text-brand-green font-bold">
              <Link href="/library">Other books</Link>
            </p>
          </div>
        ) : null}
        {book ? (
          <div className="flex flex-col p-4 md:p-8">
            <h2 className="text-xl text-brand-green pb-6">
              {book.name}
            </h2>
            <ViewBook src={book.link} />
          </div>
        ) : null}
      </Scaffold>
    </>
  );
};

export default LibraryPage;
