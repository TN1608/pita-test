import type { Metadata } from 'next';
import HeroSection from "@/components/pages/Product/client";
import LogoLoop from '@/components/LogoLoop';
import SymptomsSection from "@/components/pages/Product/SymptomsSection";
import BenefitsSection from "@/components/pages/Product/BenefitsSection";
import WhyFailedSection from "@/components/pages/Product/WhyFailedSection";
import IngredientsSection from "@/components/pages/Product/IngredientsSection";
import ExpertAdviceSection from "@/components/pages/Product/ExpertAdviceSection";
import FAQSection from "@/components/pages/Product/FAQSection";
import CTA2Section from "@/components/pages/Product/CTA2Section";
import FinalRestorationSection from "@/components/pages/Product/FinalRestorationSection";
import ReviewsSection from "@/components/pages/Product/ReviewsSection";
import { benefits, TRUST_FEATURES } from "@/constants";

export const metadata: Metadata = {
    title: "Home Page",
    description: "This is the home page"
}

export default function Home() {
    const logos = [
        { src: "/img/logos/vogue.png", alt: "vogue logo", href: "#" },
        { src: "/img/logos/grazia.png", alt: "grazia logo", href: "#" },
        { src: "/img/logos/womenshealth.png", alt: "womenshealth logo", href: "#" },
    ]
    return (
        <div className={"flex-col flex items-center justify-center space-y-8"}>
            <HeroSection />
            {/* Logo Velocity */}
            <h1 className={"lg:text-4xl font-light text-center text-accent"}>As Seen In</h1>
            <LogoLoop
                logos={logos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={120}
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
            <div className="w-full">
                <SymptomsSection />
            </div>

            <div className="flex flex-col space-y-0 lg:space-y-12">
                <h1 className="text-2xl lg:text-4xl font-serif text-[#1A1A1A] mb-4 text-center">
                    Your <span className="text-emerald-500 text-center">Hidden</span> Drainage System
                </h1>
                {benefits.map((item, index) => (
                    <BenefitsSection
                        key={index}
                        data={item}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>

            <div className="w-full bg-[#F9F6F0]">
                <WhyFailedSection />
            </div>

            <div className="w-full bg-[#F9F6F0]">
                <IngredientsSection />
            </div>

            <div className="w-full">
                <ReviewsSection />
            </div>
            <div className="w-full py-12 px-4 bg-[#F9F6F0]">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-12 lg:gap-16">
                    {TRUST_FEATURES.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3">
                            <div className="p-0">
                                {feature.icon}
                            </div>
                            <div className="space-y-1 px-1">
                                <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-lg leading-tight">{feature.title}</h3>
                                <p className="text-xs sm:text-base text-gray-600 max-w-[160px] sm:max-w-xs mx-auto">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <ExpertAdviceSection />
            </div>

            <div className="w-full">
                <FAQSection />
            </div>

            <div className="w-full">
                <CTA2Section />
            </div>

            <div className="w-full">
                <FinalRestorationSection />
            </div>


        </div>
    );
}
