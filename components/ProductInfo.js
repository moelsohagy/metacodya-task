import Image from 'next/image'
import styles from '../styles/Product.module.css'

export default function ProductInfo({ product }) {
  return (
    <div className={styles.productDetails}>
      <div>
        <h2>{product.title}</h2>
        <div className={styles.category}>
          <h3>{product.category}</h3>
          <span className={styles.price}>${product.price}</span>
        </div>
        <p className={styles.description}>{product.description}</p>
      </div>

      <Image
        src={product.image}
        alt={product.title}
        width={1024}
        height={1024}
      />
    </div>
  )
}
