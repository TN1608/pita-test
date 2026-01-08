import Image from "next/image";

export default function Header() {
    return (
        <div className={"bg-white justify-center mx-auto flex items-center"}>
            <Image src={"/img/logo.png"} alt={"logo"} width={120} height={120} className={"w-xs h-full"}/>
        </div>
    )
}