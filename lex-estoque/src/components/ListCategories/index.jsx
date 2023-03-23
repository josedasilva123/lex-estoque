export const ListCategories = ({ categories }) => {
   return (
      <ul>
         {categories.map(({ label, slug }) => (
            <li key={slug}>{label}</li>
         ))}
      </ul>
   );
};
