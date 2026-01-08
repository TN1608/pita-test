import ProductSidebar from "@/components/pages/Product/ProductSidebar";
import ProductDetails from "@/components/pages/Product/ProductDetails";

export default function ClientHomePage() {
    return (
        <section className={"grid grid-cols-1 lg:grid-cols-2 gap-8"}>
        {/*    Left     */}
            <ProductSidebar/>
        {/*    Right    */}
            <ProductDetails/>
        </section>
    )
}