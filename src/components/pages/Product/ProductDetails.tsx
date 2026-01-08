import { Star, Award, User, X, Truck, RotateCcw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCT, REVIEW } from "@/constants";
import ProductCard from "@/components/product-card";
import Image from "next/image";
import FAQ_section from "./FAQ_section";

export default function ProductDetails() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {/* Header / Ratings */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm md:text-base">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="bg-[#00d48a] p-1 rounded-sm">
                                <Star className="w-3 h-3 text-white fill-white" />
                            </div>
                        ))}
                    </div>
                    <span className="font-medium text-slate-700">
                        {PRODUCT.rating.count}/5 {PRODUCT.rating.type} | Based on 2381 Reviews
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-serif leading-tight text-[#0a1f2b]">
                    {PRODUCT.title}
                </h1>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col gap-5 mt-2">
                {PRODUCT.sub_details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="shrink-0 mt-1 p-2 rounded-full bg-transparent">
                            {item.icon}
                        </div>
                        <p className="text-base md:text-lg text-slate-800 leading-snug">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Product Options */}
            <ProductCard />


            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                    <Truck className="w-5 h-5 text-[#1a1a1a]" />
                    <span className="font-medium">Delivered on <span className="font-bold bg-[#009353] text-white px-1 rounded">Thứ Ba, 13 Tháng 1</span> with Express Shipping</span>
                </div>

                <Button className="w-full h-14 text-lg font-bold tracking-wider bg-black hover:bg-black/90 text-white rounded-md">
                    ADD TO CART
                </Button>

                <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                        <RotateCcw className="w-4 h-4" />
                        <span>Refills Ship Every 12 Week</span>
                    </div>
                    <div className="h-4 w-px bg-slate-300" />
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Stop or Cancel Anytime</span>
                    </div>
                </div>
            </div>

            {/* Extras Section */}
            <div className="flex flex-col gap-6">
                {/* Payment Icons */}
                <Image src={"/img/banks.png"} alt={"Banks"} width={600} height={100} className="w-full h-auto object-contain" />

                {/* Promo Banner */}
                <Image src={"/img/cta.png"} alt={"cta banner"} width={800} height={200} className="w-full h-auto object-cover rounded-lg shadow-md" />

                {/* Guarantees */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-slate-700">
                        <Award className="w-5 h-5 text-slate-400" />
                        <span>60-Day Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                        {/* Find a flag icon or similar */}
                        <div className="w-5 h-5 bg-slate-200 rounded-sm flex items-center justify-center text-[10px]">US</div>
                        <span>Free Shipping From USA Included</span>
                    </div>
                </div>

                {/* Review Card */}
                {REVIEW.map((review, idx) => (
                    <div key={idx} className="bg-[#fdf8ee] rounded-xl p-6 flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300">
                                {/* Placeholder for review image */}
                                <User className="w-full h-full text-slate-500 bg-slate-200 p-2" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-[#1a1a1a]">{review.name}</span>
                                    {review.isVerified && (
                                        <span className="flex items-center gap-1 text-xs text-[#009353] font-medium">
                                            <Award className="w-3 h-3" /> Verified Customer
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(review.rate_count)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-[#00d48a] text-[#00d48a]" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-[#1a1a1a]">{review.title}</h4>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                {review.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <FAQ_section />
        </div>
    )
}