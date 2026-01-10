"use client"
import React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, ChevronDown } from "lucide-react"
import Image from "next/image"

interface IngredientItem {
    tag: string;
    image: string;
    title: string;
    description: string;
}

interface IngredientAccordionMobileProps {
    items: IngredientItem[];
}

export default function IngredientAccordionMobile({ items }: IngredientAccordionMobileProps) {
    return (
        <div className="border border-black rounded-xl overflow-hidden bg-white md:hidden">
            <Accordion type="single" collapsible className="w-full divide-y divide-black">
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="px-4 py-4 last:border-b-0 border-b border-black">
                        <div className="flex flex-col gap-2">
                            {/* Tag with Checkmark */}
                            <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium">
                                <Check className="w-5 h-5" strokeWidth={3} />
                                <span className="text-base">{item.tag}</span>
                            </div>

                            <AccordionTrigger className="hover:no-underline py-0 [&[data-state=open]>svg]:rotate-180">
                                <div className="flex items-center justify-between w-full gap-4">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-[10px]">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                        <span className="font-bold text-[#1A1A1A] text-lg">
                                            {item.title}
                                        </span>
                                    </div>
                                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                                </div>
                            </AccordionTrigger>
                        </div>
                        <AccordionContent className="pt-4 text-gray-600 leading-relaxed text-base">
                            {item.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
