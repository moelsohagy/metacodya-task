import styles from '../styles/Home.module.css'
import ProductCard from './../components/ProductCard'

export default function Home({ products }) {
  return (
    <>
      <h1>Products</h1>

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return {
    props: { products },
  }
}
