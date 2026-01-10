import { Star } from "lucide-react";
import Image from "next/image";
import { REVIEWS_SUMMARY } from "@/constants";

export default function ReviewSummary() {
    const { average, total, breakdown } = REVIEWS_SUMMARY;

    return (
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-8 text-center bg-white">
            {/* Trustpilot Header */}
            <div className="flex justify-center mb-8">
                <Image
                    src="/img/imgi_92_trustpilot.png"
                    alt="Trustpilot"
                    width={1200}
                    height={1200}
                    className="h-auto w-[400px]"
                />
            </div>

            <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4 leading-tight">
                Real Women, Real Results: 93,000+ <br className="lg:hidden" /> Transformations
            </h2>
            <p className="text-sm text-gray-600 mb-12 font-light">All reviews verified from actual paying customers</p>

            <div className="border-t border-gray-100 pt-12">
                <h3 className="text-xl font-serif text-gray-900 mb-8 tracking-wide">Customer Reviews</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
                    {/* Average Rating */}
                    <div className="flex flex-col items-center">
                        <div className="flex gap-0.5 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(average) ? "fill-red-400 text-red-400" : "fill-gray-200 text-gray-200"}`}
                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-medium text-gray-900">{average} out of 5</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-500">
                            <span>Based on {total} reviews</span>
                            <div className="bg-emerald-500 rounded-sm p-0.5">
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Bars */}
                    <div className="space-y-2 w-full max-w-xs mx-auto">
                        {breakdown.map((item) => (
                            <div key={item.stars} className="flex items-center gap-4">
                                <div className="flex gap-0.5 w-20">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-3.5 h-3.5 ${i < item.stars ? "fill-red-400 text-red-400" : "fill-gray-200 text-gray-200"}`}
                                        />
                                    ))}
                                </div>
                                <div className="flex-1 h-3 bg-gray-100 rounded-sm overflow-hidden">
                                    <div
                                        className="h-full bg-red-400 transition-all duration-500"
                                        style={{ width: `${(item.count / total) * 100}%` }}
                                    />
                                </div>
                                <span className="text-xs text-gray-500 w-6 text-right font-medium">{item.count}</span>
                            </div>
                        ))}
                    </div>

                    {/* Write Review Button */}
                    <div className="flex justify-center lg:justify-end">
                        <button className="bg-red-200/50 hover:bg-red-400 hover:text-white text-red-400 px-12 py-3.5 rounded font-bold text-sm tracking-widest transition-all w-full lg:w-auto uppercase shadow-sm border border-red-400/20">
                            Write a review
                        </button>
                    </div>
                </div>
            </div>

            {/* Authenticity Badge */}
            <div className="mt-16 flex flex-col items-center">
                <Image
                    src="/img/download.svg"
                    alt="Diamond Authenticity"
                    width={80}
                    height={80}
                    className="opacity-80"
                />
                <p className="text-xs text-blue-500 mt-2 font-bold">100.0</p>
            </div>
        </div>
    );
}
