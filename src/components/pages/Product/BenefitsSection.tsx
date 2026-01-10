
import { Check, X } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface BenefitItem {
    label: string;
    isChecked: boolean;
}

interface BenefitsData {
    img: string;
    description: () => ReactNode;
    items: BenefitItem[];
    footer: () => ReactNode;
}

interface Props {
    data: BenefitsData;
    isReversed?: boolean;
}

export default function BenefitsSection({ data, isReversed = false }: Props) {
    const { img, description: Description, items, footer: Footer } = data;

    return (
        <section className="container mx-auto px-4 py-8 lg:py-16 lg:px-32">

            <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Column - Order handling via Grid/Flex */}
                <div className={`relative w-full aspect-square lg:aspect-4/3 rounded-2xl overflow-hidden bg-gray-100 ${isReversed ? 'lg:order-2' : ''}`}>
                    {img ? (
                        <Image
                            src={img}
                            alt="Benefits"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
                            No Image
                        </div>
                    )}
                </div>

                {/* Content Column */}
                <div className={`flex flex-col space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>

                    {/* Description Component */}
                    <div className="text-gray-800">
                        <Description />
                    </div>

                    {/* Items List */}
                    <ul className="space-y-3">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="mt-1 shrink-0">
                                    {item.isChecked ? (
                                        <Check className="w-6 h-6 text-emerald-500" strokeWidth={2.5} />
                                    ) : (
                                        <X className="w-6 h-6 text-red-500" strokeWidth={2.5} />
                                    )}
                                </div>
                                <span className={`text-lg ${item.isChecked ? 'text-emerald-700' : 'text-red-700 font-medium'}`}>
                                    {item.label}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Footer Warning/Info Box */}
                    <div className="bg-red-50 border border-red-100 rounded-lg p-6">
                        <Footer />
                    </div>

                </div>
            </div>
        </section>
    );
}
