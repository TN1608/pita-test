"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PRODUCT } from "@/constants"
import InformationDialog from "@/components/information-dialog"

export default function MobileProductSidebar() {
    const [[page, direction], setPage] = useState([0, 0])
    const [isInfoOpen, setIsInfoOpen] = useState(false)

    const images = PRODUCT.images
    const currentIndex = ((page % images.length) + images.length) % images.length

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0
        })
    }

    const swipeConfidenceThreshold = 1000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <div className="flex flex-col gap-4 w-full p-4 rounded-xl lg:hidden">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white group select-none">
                {/* Sale Badge */}
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                    <Image src="/img/nysale_badge.png" alt="New Years Sale" width={100} height={100} className="w-24 h-24" />
                </div>

                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x)

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1)
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1)
                            } else if (Math.abs(offset.x) > 100) {
                                paginate(offset.x > 0 ? -1 : 1)
                            }
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Product view ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center backdrop-blur-sm border border-white/30"
                    onClick={() => paginate(-1)}
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center backdrop-blur-sm border border-white/30"
                    onClick={() => paginate(1)}
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-20">
                    <InformationDialog isOpen={isInfoOpen} setOpen={setIsInfoOpen} />
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 justify-center overflow-x-auto py-2 no-scrollbar">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            const newDirection = index > currentIndex ? 1 : -1
                            setPage([page + (index - currentIndex), newDirection])
                        }}
                        className={`relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${currentIndex === index ? "border-[#2F6D54]" : "border-transparent"
                            }`}
                    >
                        <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                    </button>
                ))}
            </div>
        </div>
    )
}
