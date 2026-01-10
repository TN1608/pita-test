"use client"

import Image from 'next/image';
import React from 'react';

export default function CTA2Section() {
    return (
        <section className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Mission & Stats Box */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
                            We're On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of Bloating...And Feel Like Themselves Again
                        </h2>
                        <p className="text-[#1A1A1A] text-lg font-medium">
                            Here's where we're at right now:
                        </p>
                    </div>

                    <Image src={"/img/imgi_90.png"} alt="imgi_90" className={"w-full h-auto"} width={500} height={500} />
                </div>

                <Image src={"/img/imgi_89.jpg"} alt="imgi_89" className={"w-full h-auto"} width={500} height={500} />
            </div>
        </section>
    );
}
