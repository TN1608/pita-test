import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export default function ExpertAdviceSection() {
    return (
        <section className="container mx-auto px-4 py-8 lg:py-12">
            <div className="bg-[#F8F7F4] rounded-2xl overflow-hidden shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 lg:p-16 flex flex-col justify-center space-y-6">
                    <div>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">July 4th, 2025</span>
                        <h2 className="text-2xl lg:text-4xl font-serif text-[#1A1A1A] mt-2 leading-tight">
                            Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-700 italic font-medium leading-relaxed">
                            "Your nutrition plays a powerful role in your appearance. If your body is missing key vitamins and nutrients, it can't process fat and upkeep healthy connective tissue, which is why unprocessed fat flows up and starts pushing up against your skin, forming bumps you know as cellulite.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            SmoothSkin by Sculptique™ contains ingredients that are scientifically proven to enhance microcirculation, boost lymphatic drainage, and reduce inflammation, which restores your tissue and breaks down the fat cells in your skin."
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 pt-4">
                        <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors w-full sm:w-fit">
                            Try Lymphatic Drainage Risk-Free
                        </button>

                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <BadgeCheck className="w-5 h-5 text-gray-400" />
                            <span>60-Day Money-Back Guarantee</span>
                        </div>
                    </div>
                </div>

                {/* Image Placeholder Side */}
                <div className="relative bg-[#F2EDE4] min-h-[400px] lg:h-auto flex items-center justify-center overflow-hidden">
                    <Image src="/img/imgi_85.png" alt="imgi_85" className={"w-full h-auto"} width={500} height={500} />
                </div>
            </div>
        </section>
    );
}
