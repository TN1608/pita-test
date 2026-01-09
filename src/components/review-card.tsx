import { Star, Award, User } from "lucide-react";

interface Review {
    name: string;
    rate_count: number;
    isVerified?: boolean;
    title: string;
    description: string;
}

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="bg-[#fdf8ee] rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300">
                    {/* Placeholder for review image */}
                    <User className="w-full h-full text-slate-500 bg-slate-200 p-2" />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-[#1a1a1a]">{review.name}</span>
                        {review.isVerified && (
                            <span className="flex items-center gap-1 text-xs text-[#009353] font-medium">
                                <Award className="w-3 h-3" /> Verified Customer
                            </span>
                        )}
                    </div>
                    <div className="flex gap-0.5">
                        {[...Array(review.rate_count)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#00d48a] text-[#00d48a]" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="font-bold text-[#1a1a1a]">{review.title}</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                    {review.description}
                </p>
            </div>
        </div>
    );
}
