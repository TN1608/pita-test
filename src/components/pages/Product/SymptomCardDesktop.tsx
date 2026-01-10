import Image from "next/image";

interface SymptomCardProps {
    img: string;
    sub: string;
}

export default function SymptomCardDesktop({ img, sub }: SymptomCardProps) {
    return (
        <div className="flex flex-col h-full">
            <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
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
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-100 grow flex items-start text-center">
                <p className="text-sm text-secondary leading-relaxed font-semibold mx-auto">
                    {sub}
                </p>
            </div>
        </div>
    );
}
