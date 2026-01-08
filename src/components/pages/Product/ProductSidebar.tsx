"use client"
import Image from "next/image";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import InformationDialog from "@/components/information-dialog";

export default function ProductSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={"flex flex-col gap-4"}>
            {/* Main Image with Button */}
            <div className="relative overflow-hidden rounded-xl">
                <Image
                    src={"/img/product/1.jpg"}
                    alt={"Main Product Image"}
                    className={"w-full h-auto object-cover"}
                    width={500}
                    height={500}
                />
                {/* New Years Sale Badge */}
                <div
                    className="absolute top-4 right-4">
                    <Image src={"/img/nysale_badge.png"} alt={"New Years Sale"} width={256} height={256}
                           className="w-36 h-36 mb-1"/>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
                    <InformationDialog isOpen={isOpen} setOpen={setIsOpen} />
                </div>
            </div>

            {/* 2 Column Grid */}
            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl overflow-hidden">
                    <Image src={"/img/product/2.jpg"} alt={"Feature 1"} width={250} height={250}
                           className="w-full h-auto object-cover"/>
                </div>
                <div className="rounded-xl overflow-hidden">
                    <Image src={"/img/product/3.jpg"} alt={"Feature 2"} width={250} height={250}
                           className="w-full h-auto object-cover"/>
                </div>
            </div>

            {/* 3 Column Grid */}
            <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg overflow-hidden">
                    <Image src={"/img/product/4.jpg"} alt={"Small 1"} width={150} height={150}
                           className="w-full h-auto object-cover"/>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image src={"/img/product/5.jpg"} alt={"Small 2"} width={150} height={150}
                           className="w-full h-auto object-cover"/>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image src={"/img/product/6.jpg"} alt={"Small 3"} width={150} height={150}
                           className="w-full h-auto object-cover"/>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 gap-4">
                <Image src={"/img/product/7.png"} alt={"Statistic 1"} width={300} height={100}
                       className="w-full h-auto object-contain"/>
                <Image src={"/img/product/8.png"} alt={"Statistic 2"} width={300} height={100}
                       className="w-full h-auto object-contain"/>
            </div>
        </div>
    )
}