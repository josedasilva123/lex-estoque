import { useState } from "react"

export const RegisterProductForm = ({ categories }) => {
    /*
        productName: "Banana",
        productWeight: 20,
        productCategory: "frutas",
    */

        // Dados únicos: string, number, boolean
        // Array: lista de dados
        // Objeto: conjunto de dados

        
    const [formData, setFormData] = useState({
        productName: "",
        productWeight: "",
        productCategory: "",
    });

    const submit = (event) => {
        event.preventDefault();
        console.log(formData);
    }
    
    /* spread operator ele pode servir para pegar tudo que está num objeto ou lista e aplicar num novo objeto o lista */    
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
            <button type="submit">Cadastrar Produtos</button>
        </form>
    )
}

/*
export const RegisterProductForm = ({ categories }) => {    
        productName: "Banana",
        productWeight: 20,
        productCategory: "frutas",
    
    const [productName, setProductName] = useState("");
    const [productWeight, setProductWeight] = useState("");
    const [productCategory, setProductCategory] = useState("");

    const submit = (event) => {
        event.preventDefault();
        console.log({ productName, productWeight, productCategory})
        setProductName("");
        setProductWeight("");
        setProductCategory("");
    }
    
    
    return(
        <form onSubmit={submit}>
            <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)}/>
            <input type="number" value={productWeight} onChange={(event) => setProductWeight(event.target.value)} />
            <select value={productCategory} onChange={(event) => setProductCategory(event.target.value)}>
                <option value="">Selecione uma categoria</option>
                {categories.map(category => (
                    <option key={category.slug} value={category.slug}>{category.label}</option>
                ))}
            </select>
            <button type="submit">Cadastrar Produtos</button>
        </form>
    )
}
*/