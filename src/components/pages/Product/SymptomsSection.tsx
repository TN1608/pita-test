
import { card_item } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function SymptomsSection() {
    return (
        <section className="container mx-auto px-4 py-12 lg:py-20 lg:px-48">
            <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl lg:text-4xl font-serif text-[#1A1A1A] mb-4">
                    Why Your <span className="text-emerald-600 font-medium">Bloating, Brain Fog & Swollen Legs</span> Are
                    <br />
                    Actually Connected
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    If you're experiencing more than one of these symptoms, your body is trying to tell you something:
                </p>
            </div>

            {/* Grid for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-8 relative">
                {card_item.map((item, index) => (
                    <div key={index} className="flex flex-col h-full">
                        <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
                            {/* Placeholder logic since img is empty in constant */}
                            {item.img ? (
                                <Image
                                    src={item.img}
                                    alt="Symptom"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-100 flex-grow flex items-start text-center">
                            <p className="text-sm text-secondary leading-relaxed font-semibold mx-auto">
                                {item.sub}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Result Box */}
            <Image src="/img/imgi_52.png" alt="Result Box" className="w-full" width={1000} height={1000} />

            {/* Chevron */}
            <div className="flex justify-center mt-12">
                <ChevronDown className="w-10 h-10 text-black animate-bounce" strokeWidth={1.5} />
            </div>
            <div className="flex justify-center">
                <h1 className="text-2xl lg:text-4xl font-serif text-[#1A1A1A] mb-4">
                    The Connection <span className="text-emerald-500 text-center">You've Been Missing</span>
                </h1>
            </div>
            <Image src={"/img/imgi_56.png"} className="w-[500px] h-full mx-auto" alt="Result Box" width={1000} height={1000} />
        </section>
    );
}
