"use client"

import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';

export default function FinalRestorationSection() {
    return (
        <section className="bg-[#FAF9F6] py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#009353] text-[#009353]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#1A1A1A] font-medium tracking-tight">
                                93,000+ Customers Worldwide ★ Trustpilot
                            </span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
                            Stop Masking Symptoms. Start Restoring Root Cause.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                You deserve to feel like yourself again. To wake up without puffiness. To see your ankles. To look in the mirror and recognize the vibrant woman staring back. To have energy for the people you love.
                            </p>
                            <p>
                                You deserve a solution that actually works. Not temporary relief. Not symptom masking. Complete lymphatic restoration.
                            </p>
                        </div>

                        <div className="flex flex-col space-y-4 pt-4">
                            <Button className="bg-black text-white px-12 py-7 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all w-full sm:w-fit uppercase tracking-wider">
                                Try Lymphatic Drainage Risk-Free
                            </Button>

                            <div className="flex items-center gap-2 text-gray-500 font-medium">
                                <BadgeCheck className="w-5 h-5 text-gray-400" />
                                <span>60-Day Money-Back Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Before/After Grid Placeholder */}
                    <Image src="/img/imgi_94.png" alt="imgi_94" className={"w-full h-auto"} width={500} height={500} />
                </div>
            </div>
        </section>
    );
}
