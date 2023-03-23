import { useState } from "react"; 
import { RegisterProductForm } from "./components/RegisterProductForm";
import { DefaultTemplate } from "./templates/DefaultTemplate";
import { v4 as uuidv4 } from 'uuid';
import { ListProduct } from "./components/ListProduct";
import { ListCategories } from "./components/ListCategories";
import './styles/index.css';

function App() {
   const fruitList = [
      {
         productName: "Banana",
         productWeight: 20,
         productCategory: "frutas",
      },
      {
         productName: "Morango",
         productWeight: 5,
         productCategory: "frutas",
      },
      {
         productName: "Uva",
         productWeight: 12,
         productCategory: "frutas",
      },
      {
         productName: "Maçã",
         productWeight: 20,
         productCategory: "frutas",
      },
   ];

   const categories = [
      {
         slug: "frutas",
         label: "Frutas",
      },
      {
         slug: "legumes",
         label: "Legumes",
      },
      {
         slug: "ovos",
         label: "Ovos",
      }
   ];   

   const [darkMode, setDarkMode] = useState(false);

   const [productList, setProductList] = useState([]);

   //const [count, setCount] = useState(0); - posso forjar id com estado de contador

   const addProductToProductList = (formData) => {
      // utilizar o uuidv4
      const newProduct = { ...formData, id: uuidv4(), productWeight: Number(formData.productWeight)};
      setProductList([...productList, newProduct]);
   }

   const removeProductFromProductList = (productId) => {
      const newProductList = productList.filter((product) => product.id !== productId);
      setProductList(newProductList);

      /* retorna tudo, menos o item que eu quero remover */
   }

   const editProductFromProductList = (productId, productWeight) => {
      const newProductList = productList.map((product) => {
         if(product.id === productId){
            //Produto que eu quero editar vai ser alterado
            return { ...product, productWeight: Number(productWeight)};
         } else {
            //Demais produtos serão mantidos do mesmo jeito
            return product;
         }
      })

      setProductList(newProductList);
   }

   return (
      <div className={darkMode ? "darkMode" : "lightMode"}>
         <DefaultTemplate>
         <div>             
            <button onClick={() => setDarkMode(!darkMode)}>
               {darkMode ? "Ir para Light Mode" : "Ir para Dark Mode"}
            </button>             
            <h1>Meu estoque: </h1>
            <ListCategories categories={categories} />
            <RegisterProductForm categories={categories} addProductToProductList={addProductToProductList} />
            <ListProduct editProductFromProductList={editProductFromProductList} productList={productList} removeProductFromProductList={removeProductFromProductList} />
         </div>
      </DefaultTemplate>
      </div>
      
   );
}

export default App;
