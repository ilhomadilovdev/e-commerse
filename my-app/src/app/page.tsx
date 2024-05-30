import Product from "@/components/product";
import { ProductType } from "@/interfaces";
import Image from "next/image";

export default async function Home() {

  const res = await fetch('https://fakestoreapi.com/products');
  // .then(res => res.json())
  // .then(json => console.log(json))

  const products: ProductType[] = await res.json();
  console.log(products)


  return (
    <main className=" min-h-screen max-w-7xl mx-auto px-8 xl:px- mt-52">
      <section className=" flex flex-col  space-y-12">
        <h1 className=" text-5xl  font-bold text-center" >E-commerse</h1>
{ 
         <div className=" grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  xl:gap-x-8">
           {products.map((product) =>(
             <Product key={product.id} product={product}/>
           ))}
         </div> }
      </section>

    </main>
  );
}
