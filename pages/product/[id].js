import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Product.module.css'
import ProductInfo from '../../components/ProductInfo'

export default function ProductDetails({ product }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Metacodya</title>
        <meta name="description" content="Generated by Metacodya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Product Details</h1>
          <Link href={`/`} className={styles.back}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M19 48L3 32c5.32-5.35 10.65-10.67 16-16M64 32H3"
              ></path>
            </svg>
            <span>Go Back</span>
          </Link>
        </div>

        <ProductInfo product={product} />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  // Map over the data to create an array of paths with params
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return {
    paths, // Indicate which paths to pre-render at build time
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific product using the id from params
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()

  return {
    props: { product },
    revalidate: 10,
  }
}
