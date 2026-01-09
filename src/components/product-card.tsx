"use client"
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRODUCT } from "@/constants";
import { Truck, Check, Gift, ArrowRight, RotateCcw, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductCard() {
    const [selectedPackage, setSelectedPackage] = useState(PRODUCT.packages[1].label);

    return (
        <div className="flex flex-col gap-6 w-full">
            <RadioGroup
                defaultValue={PRODUCT.packages[1].label}
                className="grid gap-4"
                onValueChange={setSelectedPackage}
            >
                {PRODUCT.packages.map((pkg, index) => (
                    <Label
                        key={index}
                        htmlFor={pkg.label}
                        className={cn(
                            "relative cursor-pointer transition-all",
                            "[&_div[data-slot=card]]:border-[#009353] [&_div[data-slot=card]]:ring-1 [&_div[data-slot=card]]:ring-[#009353]",
                            selectedPackage !== pkg.label && "[&_div[data-slot=card]]:border-border [&_div[data-slot=card]]:ring-0"
                        )}
                    >
                        {pkg.featured && (
                            <div className="absolute -top-3 -right-2 z-20">
                                {/* <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 p-1 text-center text-[8px] font-bold leading-tight text-white shadow-sm ring-2 ring-white transform rotate-12">
                                    New Year's Sale
                                </span> */}
                                <Image src={"/img/ny_ba dge.png"} alt={"Featured"} width={100} height={100} className="w-full h-auto object-contain" />
                            </div>
                        )}
                        <Card className="overflow-hidden border-2 shadow-none hover:border-[#009353]/50 transition-colors p-0 gap-0 w-full">
                            <CardContent className="p-0">
                                <div className="flex items-center justify-between p-4 bg-white w-full">
                                    <div className="flex items-center gap-4">
                                        <RadioGroupItem
                                            value={pkg.label}
                                            id={pkg.label}
                                            className="w-6 h-6 border-slate-300 data-[state=checked]:border-[#009353] data-[state=checked]:text-[#009353]"
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-lg text-[#1a1a1a]">{pkg.label}</span>
                                            <div className="text-sm text-slate-600 flex gap-1">
                                                <span>{pkg.description}</span>
                                                {pkg.savings > 0 && (
                                                    <span className="text-slate-500">| Save ${pkg.savings}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="font-bold text-xl text-[#1a1a1a]">${(pkg.price / (pkg.label.includes("3") ? 5 : pkg.label.includes("2") ? 3 : 1)).toFixed(2)}</span>
                                        <span className="text-sm text-slate-400 z-30 line-through">${pkg.price}</span>
                                    </div>
                                </div>

                                <div className="bg-[#1f9d55] text-white divide-y divide-white/20">
                                    {pkg.details.map((detail, idx) => (
                                        <div key={idx} className="px-4 py-2 flex items-center gap-2 text-sm font-medium">
                                            {detail.includes("Shipping") && <Truck className="w-4 h-4" />}
                                            {detail.includes("E-book") && <ArrowRight className="w-4 h-4 bg-white text-[#1f9d55] rounded-full p-0.5" />}
                                            {detail.includes("Gift Card") && <Gift className="w-4 h-4" />}
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Label>
                ))}
            </RadioGroup>
        </div>
    )
}
