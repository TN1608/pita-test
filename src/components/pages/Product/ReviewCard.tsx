import { Star, User } from "lucide-react";

interface ReviewCardProps {
    review: {
        name: string;
        location?: string;
        rate_count: number;
        isVerified: boolean;
        date: string;
        title?: string;
        description: string;
        reviewType: string;
    }
}

export default function ReviewCard({ review }: ReviewCardProps) {
    const { name, rate_count, isVerified, date, description, reviewType } = review;

    return (
        <div className="py-8 border-b border-gray-100 last:border-0">
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < rate_count ? "fill-red-400 text-red-400" : "fill-gray-200 text-gray-200"}`}
                        />
                    ))}
                </div>
                <span className="text-xs text-gray-400 font-light">{date}</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <User className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{name}</span>
                        {isVerified && (
                            <span className="bg-red-400 text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                                Verified
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <p className="text-sm text-gray-800 leading-relaxed max-w-4xl">
                    {description}
                </p>

                <div className="bg-gray-50 inline-block px-3 py-1.5 rounded border border-gray-100">
                    <span className="text-[10px] text-gray-500 font-medium italic">
                        {reviewType}
                    </span>
                </div>
            </div>
        </div>
    );
}
