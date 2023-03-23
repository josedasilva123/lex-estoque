import { CardProduct } from "./CardProduct";
import styles from "./style.module.css"

export const ListProduct = ({ productList, removeProductFromProductList, editProductFromProductList }) => {
   // ternário no JSX: condicao ? resposta verdadeira : resposta falsa

   //JS     

   return (
      <>
         { /* JSX */}
         {/* declaro que vou exibir a lista somente se o productList tive length maior que zero do contrário exibirei um parágrafo */}
         {productList.length > 0 ? (
            <ul className={styles.productList}>
               {/* escreve um card product para cada item presente e product List */}
               {productList.map((product) => {
                  return (
                     <CardProduct
                        key={product.id}
                        product={product}
                        removeProductFromProductList={removeProductFromProductList}
                        editProductFromProductList={editProductFromProductList}
                     />
                  );
               })}
            </ul>
         ) : (
            <p>Nenhum item cadastrado no estoque por enquanto.</p>
         )}
      </>
   );
};
