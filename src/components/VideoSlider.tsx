"use client"
import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface Video {
    thumbnail: string
    videoUrl: string
    title?: string
}

interface VideoSliderProps {
    videos: Video[]
}

export default function VideoSlider({ videos }: VideoSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const { scrollXProgress } = useScroll({
        container: containerRef
    })

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
            setCanScrollLeft(scrollLeft > 20)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20)
        }
    }

    useEffect(() => {
        checkScroll()
        const currentContainer = containerRef.current
        if (currentContainer) {
            currentContainer.addEventListener("scroll", checkScroll)
            return () => currentContainer.removeEventListener("scroll", checkScroll)
        }
    }, [])

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const { clientWidth } = containerRef.current
            const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
            containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="relative group">
                {/* Slider Container */}
                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
                >
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="flex-none w-[280px] md:w-[320px] aspect-9/16 relative rounded-2xl overflow-hidden snap-start bg-gray-100 shadow-lg group/video"
                        >
                            {video.thumbnail.match(/\.(mp4|webm|mov|ogg)$/i) ? (
                                <video
                                    src={video.thumbnail}
                                    className="object-cover w-full h-full"
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                />
                            ) : (
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title || "User story"}
                                    fill
                                    className="object-cover"
                                />
                            )}
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform transition-transform group-hover/video:scale-110">
                                    <Play className="w-6 h-6 text-black fill-current ml-1" />
                                </div>
                            </div>
                            {/* Title/Label if needed */}
                            {video.title && (
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1">
                                    <span className="text-white font-bold text-xl drop-shadow-lg uppercase tracking-tight">
                                        {video.title}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl items-center justify-center transition-opacity z-10 md:flex hidden ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ChevronLeft className="w-6 h-6 text-black" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl items-center justify-center transition-opacity z-10 md:flex hidden ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ChevronRight className="w-6 h-6 text-black" />
                </button>
            </div>

            {/* Bottom Navigation (Progress + Arrows) */}
            <div className="flex items-center gap-8 px-4">
                {/* Progress Bar Container */}
                <div className="grow h-[2px] bg-gray-300 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-[#009353] origin-left"
                        style={{ scaleX }}
                    />
                </div>

                {/* Arrows for Mobile/Tablet or just as custom controls */}
                <div className="flex gap-2 shrink-0">
                    <button
                        onClick={() => scroll("left")}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    )
}
