import { useState } from "react";
import { useEffect } from "react";

const FetchOnRender = () => {

    const [categories, setCategories] = useState([]);

    const [products, setProducts] = useState([]);

    // data is fetched inside useEffect
    useEffect(() => {
        async function loadData() {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();
            setCategories()
            setProducts(data)
        }

        loadData();
    }, [])

    console.log(products)

    return (
        <div>
            <h2>Fetch on Render</h2>

            {

            }
        </div>
    );
};

export default FetchOnRender;