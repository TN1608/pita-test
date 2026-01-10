
import { INGREDIENTS_DETAILS } from "@/constants";
import { Check } from "lucide-react";
import AccordionCard from "./AccordionCard";
import Image from "next/image";

import IngredientAccordionMobile from "./IngredientAccordionMobile";

export default function IngredientsSection() {
    return (
        <section className="container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4 text-center">
                    The <span className="text-emerald-500">8-Ingredient System</span> That Restores What
                    <br />
                    Hormones Once Maintained
                </h2>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed text-center">
                    Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not with symbolic doses, but with therapeutic amounts based on clinical research.
                    <br />
                    Not just moving fluid temporarily. Not just reducing inflammation. <span className="font-bold text-gray-800">Complete restoration.</span>
                </p>
            </div>

            {/* Desktop Grid for Ingredients */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
                {INGREDIENTS_DETAILS.map((item, index) => (
                    <AccordionCard key={index} item={item} />
                ))}
            </div>

            {/* Mobile View for Ingredients */}
            <div className="mb-16 md:hidden">
                <IngredientAccordionMobile items={INGREDIENTS_DETAILS} />
            </div>

            <div className="max-w-[600px] mx-auto w-full">
                <Image
                    src="/img/imgi_76.png"
                    alt="Synergistic Effect"
                    width={1200}
                    height={1200}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 600px"
                    quality={100}
                />
            </div>
        </section>
    );
}
