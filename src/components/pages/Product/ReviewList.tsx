'use client'
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { ChevronDown } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ReviewListProps {
    reviews: any[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
    const [sort, setSort] = useState("Most Recent");

    const sortOptions = ["Most Recent", "Highest Rating", "Lowest Rating", "Oldest"];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center gap-2 mb-8 text-sm font-medium text-secondary border-b border-gray-100 pb-4">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2 outline-none cursor-pointer hover:text-gray-900 transition-colors">
                        <span>Sort by: {sort}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[160px] bg-white border border-gray-100 shadow-sm">
                        {sortOptions.map((option) => (
                            <DropdownMenuItem
                                key={option}
                                onClick={() => setSort(option)}
                                className={`cursor-pointer ${option === sort ? "font-bold text-gray-900 bg-gray-50" : "text-gray-600"}`}
                            >
                                {option}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="space-y-0">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>

            <div className="mt-12">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
