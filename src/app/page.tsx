import type { Metadata } from 'next';
import ClientHomePage from "@/components/pages/Product/client";
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
            <ClientHomePage />
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
            <div className="w-full py-12 px-2 bg-[#F9F6F0]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {TRUST_FEATURES.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4">
                            <div className="p-2">
                                {feature.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-secondary text-lg sm:text-xl">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-secondary max-w-xs">{feature.description}</p>
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
