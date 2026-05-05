import { useState, useEffect } from 'react'
import './App.css'

import ProductCard from './components/ProductCard';
import SkeletonCard from './components/SkeletonCard';

const BASE_URL = "https://api.freeapi.app/api/v1/public/randomproducts";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();

      console.log(data?.data?.data);
      return data?.data?.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, [])

  return (
    <>
      <section className='grid'>
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))
          : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </>
  )
}

export default App
