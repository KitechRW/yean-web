import React from 'react';
import Head from 'next/head';
import SingleBlogActivity from 'modules/activities/SingleBlogActivity';
import Http from 'core/factory/fact.http';
import Keys from 'apis/utils/constants/keys';

export async function getServerSideProps({ query }: any) {
  return Http.axios
    .get(`${Keys.DEFAULT_API}/api/articles/${query.slugName}`)
    .then(async resp => {
      const relatedArticles = await Http.axios.get(
        `${Keys.DEFAULT_API}/api/articles?limit=3&status=published&cat=${resp.data.data.category_id}`,
      );
      const isExtension =
        resp.data.data?.type === 'EXTENSION_MATERIAL' &&
        !!resp.data.data?.category?.name;
      return {
        props: {
          isExtension,
          data: resp.data.data,
          relatedArticles: relatedArticles.data.data.filter(
            (item: any) => item.id !== resp.data.data.id,
          ),
        },
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {} },
      };
    });
}
const SingleBlogPage = ({
  data,
  relatedArticles,
  isExtension,
}: any) => {
  const content = data.text.replace(/<[^>]*>?/gm, '');
  let image: string = data.image || '';
  image = image.startsWith('/uploads') ? image : `/uploads/${image}`;
  if (image.slice(0, 3) !== 'http') {
    image = `${Keys.HOST}${image}`;
  }
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content={
            content.length > 150
              ? content.substring(0, 150) + '...'
              : content
          }
        />
        <meta
          name="keywords"
          content="youth, agribusiness, ubuhinzi, urubyiruko, amakuru, isoko, ihuriro, farmers, platform, Rwanda, farming"
        />
        <meta name="author" content="Celestin Niyindagiriye" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta property="fb:app_id" content="2004258806506916" />
        <meta property="og:url" content="https://yeanrwanda.org/" />
        <meta property="og:type" content="" />
        <meta
          property="og:description"
          content={
            content.length > 150
              ? content.substring(0, 150) + '...'
              : content
          }
        />
        <meta property="og:title" content={`${data.title}`} />
        <meta property="og:image" content="" itemProp={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YEAN_Rwanda" />
        <meta name="twitter:creator" content="@fridolin_r" />
        <meta property="twitter:title" content={`${data.title}`} />
        <meta
          name="twitter:description"
          content={
            content.length > 150
              ? content.substring(0, 150) + '...'
              : content
          }
        />
        <meta name="twitter:image" content={image} />
        <title>{`${data.title}`}</title>
      </Head>
      <SingleBlogActivity
        {...{ data, relatedArticles, isExtension }}
      />
    </>
  );
};

export default SingleBlogPage;
