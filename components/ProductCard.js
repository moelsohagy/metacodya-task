import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function productCard({ product }) {
  return (
    <Link
      key={product.id}
      className={styles.product}
      href={`/product/${product.id}`}
      title={product.title}
    >
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={1024}
          height={1024}
        />
        <h3>{product.title}</h3>
      </div>

      <p className={styles.price}>${product.price}</p>
    </Link>
  )
}
