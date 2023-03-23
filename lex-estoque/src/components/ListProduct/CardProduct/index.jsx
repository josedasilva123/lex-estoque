import styles from "./style.module.css";

export const CardProduct = ({ product, removeProductFromProductList, editProductFromProductList }) => {
   return (
      <li className={styles.productCard}>
         <h3>{product.productName}</h3>
         <button onClick={() => console.log(product)}>Debug</button>
         <input type="number" value={product.productWeight} onChange={(e) => editProductFromProductList(product.id, e.target.value)}/>
         <button onClick={() => removeProductFromProductList(product.id)}>Remover</button>
      </li>
   );
};
