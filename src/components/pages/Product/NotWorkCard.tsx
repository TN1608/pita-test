import { ArrowDown, X } from "lucide-react";
import Image from "next/image";

interface NotWorkCardProps {
    item: {
        img: string;
        description: string;
        sub: string;
    };
}

export default function NotWorkCard({ item }: NotWorkCardProps) {
    return (
        <div className="flex flex-col h-full">
            <div className="relative aspect-square mb-6 overflow-hidden bg-gray-200">
                {item.img ? (
                    <Image
                        src={item.img}
                        alt="Method failed"
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}

            </div>

            <p className="text-center text-secondary font-medium mb-6 px-4">
                {item.description}
            </p>
            <div className="mt-auto bg-red-50 p-6 rounded-lg relative">
                <h4 className="text-center text-red-800 font-bold text-sm mb-2 flex items-center justify-center gap-1">
                    Why it failed <X className="w-4 h-4" />
                </h4>
                <p className="text-sm text-center text-secondary leading-relaxed">
                    {item.sub}
                </p>
            </div>

            <div className="hidden lg:flex justify-center mt-4 text-secondary">
                <ArrowDown className="w-8 h-8 animate-bounce" />
            </div>
        </div>
    );
}
