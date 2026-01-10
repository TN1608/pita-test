import { Star, Award, Truck, RotateCcw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCT, REVIEW } from "@/constants";
import ProductCard from "@/components/product-card";
import Image from "next/image";
import FAQ_section from "./FAQ_section";
import ReviewCard from "@/components/review-card";

export default function ProductDetails() {
    return (
        <div className="flex flex-col gap-4 md:gap-6">
            {/* Header / Ratings */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm md:text-base">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="bg-emerald-500 p-1 rounded-sm">
                                <Star className="w-3 h-3 text-white fill-white" />
                            </div>
                        ))}
                    </div>
                    <span className="font-medium text-slate-700">
                        {PRODUCT.rating.count}/5 {PRODUCT.rating.type} | Based on 2381 Reviews
                    </span>
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-[#0a1f2b]">
                    {PRODUCT.title}
                </h1>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col gap-3 md:gap-5 mt-2">
                {PRODUCT.sub_details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="shrink-0 p-1 md:p-2 rounded-full bg-transparent">
                            {item.icon}
                        </div>
                        <p className="text-sm md:text-base lg:text-lg text-slate-800 leading-snug">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Product Options */}
            <ProductCard />

            {/*CTA*/}
            <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2 text-xs md:text-sm text-[#1a1a1a]">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-[#1a1a1a] shrink-0" />
                    <p className="font-medium">Delivered on <span className="font-bold bg-[#009353] text-white px-1 rounded inline-block">Thứ Ba, 13 Tháng 1</span> with Express Shipping</p>
                </div>

                <Button className="w-full h-12 md:h-14 text-base md:text-lg font-bold tracking-wider bg-black hover:bg-black/90 text-white rounded-md">
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
                <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-3 md:gap-4 lg:gap-2">
                    <div className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
                        <Award className="w-4 h-4 md:w-5 md:h-5 text-slate-400 shrink-0" />
                        <span>60-Day Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
                        <div className="w-5 h-5 bg-slate-200 rounded-sm flex items-center justify-center text-[10px] shrink-0">US</div>
                        <span>Free Shipping From USA Included</span>
                    </div>
                </div>

                {/* Review Card */}
                {REVIEW.map((review, idx) => (
                    <ReviewCard key={idx} review={review} />
                ))}
            </div>

            {/* FAQ Section */}
            <FAQ_section />
        </div>
    )
}