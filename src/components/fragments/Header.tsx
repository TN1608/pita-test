import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white py-2 border-b border-gray-50">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <Image
                    src="/img/logo.png"
                    alt="sculptique."
                    width={140}
                    height={32}
                    className="h-12 w-auto object-contain"
                    priority
                />
            </div>
        </header>
    )
}