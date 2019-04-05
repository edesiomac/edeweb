import React, { component} from 'react';
import api from "../../services/api";

export default class Main extends component{
    state = {
        products:[]
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get("/products");

       this.setState({products: response.data.docs});
    };

    render(){
        return <h1>Cotagem de produtos:{this.state.products.length}</h1>;
    }

    
}