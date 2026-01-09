import ProductSidebar from "@/components/pages/Product/ProductSidebar";
import ProductDetails from "@/components/pages/Product/ProductDetails";

export default function ClientHomePage() {

    return (
        <section className={"grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto lg:px-48 lg:py-14"}>
            {/*    Left     */}
            <ProductSidebar />
            {/*    Right    */}
            <ProductDetails />
        </section>
    )
}