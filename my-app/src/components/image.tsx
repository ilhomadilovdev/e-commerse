"use client";

import { ProductType } from "@/interfaces";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
    product: ProductType;
    fill?: boolean
};
const LoadImage: FC<Props> = ({ product, fill }) => {

    const [isLoading, setIsloading] = useState(true);
    return (
        <div>
            {fill ? (
                <Image src={product.image} alt={product.title} fill className={` object-contain duration-700
                 ease-in-out  group-hover: opacity-65 
                 
                   ${isLoading ?
                        " scale-125  blur-2xl grayscale"
                        :
                        " scale-110 blur-0 grayscale-0"

                    }`}


                    onLoadingComplete={() => setIsloading(false)}
                />
            ) : (<Image src={product.image}
                alt={product.title}
                width={400}
                height={1000}
                className={` object-contain duration-700
            ease-in-out  group-hover: opacity-65 
                     ${isLoading ?
                        " scale-125  blur-2xl grayscale"
                        :
                        " scale-110 blur-0 grayscale-0"

                    }`}
                    onLoadingComplete={() => setIsloading(false)}
            />

            )}
        </div>
    )
};

export default LoadImage;