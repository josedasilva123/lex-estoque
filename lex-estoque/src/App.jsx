import { CardProduct } from "./components/CardProduct";
import { RegisterProductForm } from "./components/RegisterProductForm";
import { DefaultTemplate } from "./templates/DefaultTemplate";

function App() {
   //JSX = HTML + JS
   //Estado - useState
   // O estado é imutável (precisa ser alterado por meio da função modificadora (SET))
   // const [variavel, funcaoModicadora] = useState( /* valor inicial */);
   /*
   const [product, setProduct] = useState({
      name: 'Potato'
   })

   function something(){
      setProduct({ name: "Otavio"})
      // product = { name: Otavio }
   }
   */
   /*
   const [count, setCount] = useState(0);

   function sum(){
      setCount(count + 1);
   }

   function sub(){
      setCount(count - 1);
   }
   */

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

   // children - Children é um props especial, que emula o comportamento de tags abertas, renderizando o que estiver no interior da tag

   return (
      <DefaultTemplate>
         <div>                          
            <h1>Meu estoque: </h1>
            <ul>
               {categories.map(({ label, slug }, index) => (
                  <li key={slug}>{label}</li>
               ))}
            </ul>
            <RegisterProductForm categories={categories} />
            <ul>
               {fruitList.map(({ productName, productWeight }, index) => {
                  return (
                     <CardProduct
                        key={productName}
                        productName={productName}
                        productWeight={productWeight}
                     />
                  );
               })}
            </ul>
         </div>
      </DefaultTemplate>
   );
}

export default App;
