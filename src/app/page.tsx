import type {Metadata} from 'next';
import ClientHomePage from "@/components/pages/Product/client";
import {log} from "node:util";

export const metadata: Metadata = {
    title: "Home Page",
    description: "This is the home page"
}

export default function Home() {

    
    return (
        <div className={"flex-col bg-white flex items-center justify-center px-80 py-14"}>
            <ClientHomePage/>
        </div>
    );
}
