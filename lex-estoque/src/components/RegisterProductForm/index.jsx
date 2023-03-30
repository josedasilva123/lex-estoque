import { useState } from "react"

export const RegisterProductForm = ({ categories, addProductToProductList }) => { 
        
    const [formData, setFormData] = useState({
        productName: "",
        productWeight: "",
        productCategory: "",
    });

    const submit = (event) => {
        event.preventDefault();
        addProductToProductList(formData);
        setFormData({
            productName: "",
            productWeight: "",
            productCategory: "", 
        })
    }

    const isEmpty = formData.productName === "" || formData.productWeight === "" || formData.productCategory === "";
    
    return(
        <form onSubmit={submit}>
            { /* adicionar evento de onChange para captura e espelhar o valor do estado no atributo value*/}
            <input placeholder="Nome do produto" type="text" value={formData.productName} onChange={(event) => setFormData({ ...formData, productName: event.target.value})} required/>
            <input placeholder="Peso (n°)" type="number" value={formData.productWeight} onChange={(event) => setFormData({ ...formData, productWeight: event.target.value})} required min={0}/>
            <select value={formData.productCategory} onChange={(event) => setFormData({ ...formData, productCategory: event.target.value })} required>
                <option value="">Selecione uma categoria</option>
                {categories.map(category => (
                    <option key={category.slug} value={category.slug}>{category.label}</option>
                ))}
            </select>
            <button type="submit" disabled={isEmpty ? true : false}>Cadastrar Produtos</button>
        </form>
    )
}