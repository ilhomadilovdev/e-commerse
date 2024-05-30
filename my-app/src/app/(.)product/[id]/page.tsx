"use client";

import { ProductType } from "@/interfaces";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import LoadImage from "@/components/image";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";



function ProductPage() {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<ProductType>();
    const [isOpen, setIsOpen] = useState(true);
    const { id } = useParams();


    const router = useRouter()


    const handlerBtn = () => {
       
        const products: ProductType[] = JSON.parse(localStorage.getItem("carts") as string) || [];

        const isExitProduct = products.find(c => c.id === product?.id);

        if (isExitProduct) {
            const updatedProduct = products.map(
                c => {
                    if (c.id === product?.id) {
                        return {
                            ...c,
                            quantity: c.quantity + 1,
                        };
                    }
                    return c;
                }
            );

            localStorage.setItem("carts", JSON.stringify(updatedProduct));
        } else {
            const data = [...products, { ...product, quantity: 1 }];
            localStorage.setItem("carts",JSON.stringify(data))
        }

        toast("Product added your bag");
    }

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await res.json();
            setProduct(product);
            setLoading(false);
        }
        getData()
    }, [id])
    return (
        <Dialog open={isOpen}
            onClose={() => {
                setIsOpen(false);
                router.back();

            }} className=" relative z-50">
            <div className="fixed  inset-0  bg-black/35" aria-hidden="true" >

                <div className=" fixed inset-0  overflow-y-auto" >
                    <div className="flex min-h-full  items-center justify-center p-4" >
                        <DialogPanel className={" mx-auto  max-w-3xl rounded bg-blue-200 p-10"}>
                            {loading ? (
                                <div className=" h-8 w-8 rounded-full border-2 
                           border-dotted border-blue-700 animate-spin" />
                            ) : (
                                <div className=" flex gap-x-8 h-96" >
                                    {product?.image && (
                                        <div className=" relative w-72 h-full  flex-1hidden md:inline" >
                                            <LoadImage product={product} fill />
                                        </div>
                                    )}

                                    <div className="flex flex-1 flex-col" >
                                        <div className="flex-1" >
                                            <h4 className=" font-semibold" >
                                                {product?.title}
                                            </h4>
                                            <p className=" font-medium text-sm" >
                                                {product?.price}
                                            </p>

                                            <div className="flex items-center text-sm my-4" >
                                                <p>  {product?.rating.rate}</p>
                                                {product?.rating.rate && (
                                                    <div className=" flex items-center ml-2  mr-6" >
                                                        {Array.from({ length: Math.floor(product.rating.rate) },
                                                            (_, i) => (
                                                                <StarIcon key={i} className={"h-4 w-4  text-yellow-400"} />
                                                            ))}

                                                        {Array.from({ length: 5 - Math.floor(product.rating.rate) },
                                                            (_, i) => (
                                                                <StarIconOutline key={i} className={"h-4 w-4 text-yellow-500"} />
                                                            ))}
                                                    </div>
                                                )}

                                                <p className=" text-blue-600 hover:underline cursor-pointer text-xs" >
                                                    See all {product?.rating.count} reviews
                                                </p>
                                            </div>
                                            <p className=" line-clamp-5  text-sm" >
                                                {product?.description}
                                            </p>
                                        </div>

                                        <div onClick={handlerBtn} className=" space-y-3 text-sm" >
                                            <button className="button w-full bg-blue-600
                                             text-white border-transparent
                                              hover:border-blue-600  hover:bg-red-500">
                                                Add to card
                                            </button>
                                            <button onClick={() => window.location.reload()} className="button w-full
                                               bg-blue-600
                                               text-white border-transparent
                                              hover:border-blue-600  hover:bg-red-500">
                                                View full details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog >
    )
}

export default ProductPage