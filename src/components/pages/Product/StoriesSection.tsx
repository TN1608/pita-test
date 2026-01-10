"use client"
import React from "react"
import { videos_VIDEOS } from "@/constants"
import VideoSlider from "@/components/VideoSlider"
import Image from "next/image"
import { BadgeCheck } from "lucide-react"

export default function StoriesSection() {
    return (
        <section className="bg-[#F9F6F0] py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Trustpilot Header as Image */}
                <div className="flex flex-col items-center mb-8">
                    <Image
                        src="/img/imgi_86.png"
                        alt="Trustpilot"
                        width={300}
                        height={60}
                        className="h-auto w-auto max-w-[300px]"
                    />
                    <h2 className="text-2xl lg:text-4xl font-serif text-[#1A1A1A] mt-6 text-center max-w-2xl leading-tight">
                        See The Stories of Sculptique™ Women Firsthand
                    </h2>
                </div>

                {/* Video Slider */}
                <div className="max-w-6xl mx-auto mb-16">
                    <VideoSlider videos={videos_VIDEOS} />
                </div>

                {/* Footer CTA */}
                <div className="flex flex-col items-center gap-6">
                    <button className="bg-black text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-xl w-full max-w-[400px]">
                        Try Lymphatic Drainage Risk-Free
                    </button>

                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <BadgeCheck className="w-5 h-5 text-gray-400" />
                        <span className="font-medium">60-Day Money-Back Guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
