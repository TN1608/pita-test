import type {Metadata} from 'next';
import ClientHomePage from "@/components/pages/Product/client";

export const metadata: Metadata = {
    title: "Home Page",
    description: "This is the home page"
}

export default function Home() {
    return (
        <div className={"flex-col flex items-center justify-center"}>
            <ClientHomePage/>
        </div>
    );
}
