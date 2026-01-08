"use client"
import Image from "next/image";
import { useState } from "react";
import InformationDialog from "@/components/information-dialog";
import { PRODUCT } from "@/constants";

export default function ProductSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={"flex flex-col gap-4"}>
            {/* Main Image with Button */}
            <div className="relative overflow-hidden rounded-xl">
                <Image
                    src={PRODUCT.images[0]}
                    alt={"Main Product Image"}
                    className={"w-full h-auto object-cover"}
                    width={500}
                    height={500}
                />
                {/* New Years Sale Badge */}
                <div
                    className="absolute top-4 right-4">
                    <Image src={"/img/nysale_badge.png"} alt={"New Years Sale"} width={256} height={256}
                        className="w-36 h-36 mb-1" />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
                    <InformationDialog isOpen={isOpen} setOpen={setIsOpen} />
                </div>
            </div>

            {/* 2 Column Grid */}
            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl overflow-hidden">
                    <Image src={PRODUCT.images[1]} alt={"Feature 1"} width={250} height={250}
                        className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                    <Image src={PRODUCT.images[2]} alt={"Feature 2"} width={250} height={250}
                        className="w-full h-auto object-cover" />
                </div>
            </div>

            {/* 3 Column Grid */}
            <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg overflow-hidden">
                    <Image src={PRODUCT.images[3]} alt={"Small 1"} width={150} height={150}
                        className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image src={PRODUCT.images[4]} alt={"Small 2"} width={150} height={150}
                        className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image src={PRODUCT.images[5]} alt={"Small 3"} width={150} height={150}
                        className="w-full h-auto object-cover" />
                </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 gap-4">
                <Image src={PRODUCT.images[6]} alt={"Statistic 1"} width={300} height={100}
                    className="w-full h-auto object-contain" />
                <Image src={PRODUCT.images[7]} alt={"Statistic 2"} width={300} height={100}
                    className="w-full h-auto object-contain" />
            </div>
        </div>
    )
}