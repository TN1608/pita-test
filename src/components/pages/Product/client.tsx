import ProductSidebar from "@/components/pages/Product/ProductSidebar";
import ProductDetails from "@/components/pages/Product/ProductDetails";
import MobileProductSidebar from "@/components/pages/Product/MobileProductSidebar";

export default function HeroSection() {

    return (
        <section className={"grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-4 lg:px-48 lg:py-14"}>
            {/*    Left     */}
            <div className="hidden lg:block">
                <ProductSidebar />
            </div>
            <div className="block lg:hidden">
                <MobileProductSidebar />
            </div>
            {/*    Right    */}
            <ProductDetails />
        </section>
    )
}