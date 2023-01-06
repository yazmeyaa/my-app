import { GetServerSideProps } from "next"

const Sitemap = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://yazmeyaa.itracers.xyz/</loc>
      <lastmod>2023-01-05T18:03:31+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://yazmeyaa.itracers.xyz/projects</loc>
      <lastmod>2023-01-05T18:03:31+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://yazmeyaa.itracers.xyz/contacts</loc>
      <lastmod>2023-01-05T18:03:31+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://yazmeyaa.itracers.xyz/CV.pdf</loc>
      <lastmod>2023-01-02T20:19:52+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap
