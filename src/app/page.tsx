import type { Metadata } from 'next';
import ClientHomePage from "@/components/pages/Product/client";
import LogoLoop from '@/components/LogoLoop';
import SymptomsSection from "@/components/pages/Product/SymptomsSection";
import BenefitsSection from "@/components/pages/Product/BenefitsSection";
import WhyFailedSection from "@/components/pages/Product/WhyFailedSection";
import IngredientsSection from "@/components/pages/Product/IngredientsSection";
import { benefits } from "@/constants";

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

            <div className="w-full">
                <WhyFailedSection />
            </div>

            <div className="w-full">
                <IngredientsSection />
            </div>
        </div>
    );
}
