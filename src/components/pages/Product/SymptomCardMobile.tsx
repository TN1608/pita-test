import Image from "next/image";

interface SymptomCardProps {
    img: string;
    sub: string;
}

export default function SymptomCardMobile({ img, sub }: SymptomCardProps) {
    return (
        <div className="flex flex-row items-stretch rounded-xl overflow-hidden bg-[#F5F5F3] shadow-sm border border-gray-100">
            {/* Left: Image(s) */}
            <div className="relative w-1/2 aspect-4/3">
                {img ? (
                    <Image
                        src={img}
                        alt="Symptom"
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                        No Image
                    </div>
                )}
            </div>
            {/* Right: Text */}
            <div className="w-1/2 flex items-center justify-center p-4">
                <p className="text-sm md:text-base text-[#333] font-medium leading-relaxed text-center">
                    {sub}
                </p>
            </div>
        </div>
    );
}
