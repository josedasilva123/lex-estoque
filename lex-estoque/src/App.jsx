import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CardProduct } from "./components/CardProduct";

function App() {
   //JSX = HTML + JS
   //Estado - useState

   const fruitList = [
      {
         productName: "Banana",
         productWeight: 20,
      },
      {
         productName: "Morango",
         productWeight: 5,
      },
      {
         productName: "Uva",
         productWeight: 12,
      },
      {
         productName: "Maçã",
         productWeight: 20,
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
   ];

   function logout(){
    console.log('logout');
   }

   // Imperativa (Vanilla) -> Declarativas (React) 

   // map - retorna um resultado para cada item da minha lista (constroí uma lista nova)

   // entende como criar os componentes
   // fazer a passagem de props
   // entender o funcionamento do map

   return (
      <main>
         <Header logout={logout} />
         <div className="App">
            <h1>Meu estoque: </h1>
            {/* a chave é obrigatoria no map, e ficará no primeiro elemento o componente retornado */}
            {/* retorno implicito */}
            <ul>
               {categories.map(({ label, slug }, index) => (                
                  <li key={slug}>{label}</li>  
               ))}
            </ul>
            {/* retorno declarado */}
            { /* como eu vejo: ["A", "B", "C"] */}
            { /* como o React entende (sem key) ["A", "A", "A"] */}
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
         <Footer />
      </main>
   );
}

export default App;
