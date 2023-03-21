export const CardProduct = ({ productName, productWeight }) => {
   return (
      <li>
         <h3>{productName}</h3>
         <p>{productWeight} kg</p>
      </li>
   );
};
