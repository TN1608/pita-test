
import { not_work_card_item } from "@/constants";
import NotWorkCard from "./NotWorkCard";
import { Button } from "@/components/ui/button";

export default function WhyFailedSection() {
    return (
        <section className="container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A]">
                    Why Nothing Has <span className="text-emerald-500">Worked</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 relative">
                {not_work_card_item.map((item, index) => (
                    <NotWorkCard key={index} item={item} />
                ))}
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="bg-[#e6f0e6] border border-emerald-100 rounded-xl p-8 lg:p-12 text-center shadow-sm">
                    <h3 className="text-2xl lg:text-3xl font-serif text-[#1A1A1A] mb-4">
                        The Missing Piece:
                    </h3>
                    <p className="text-secondary leading-relaxed lg:text-lg max-w-3xl mx-auto">
                        Comprehensive lymphatic restoration that addresses vessel pumping, protein blockages, vessel wall integrity, immune clearance, inflammation, and metabolism—all at once.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Button className="bg-black text-white px-10 py-4 hover:bg-gray-800 transition-colors uppercase tracking-wider text-sm font-semibold mb-4 w-full md:w-auto h-auto">
                        Try Lymphatic Drainage Risk-Free
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-sm text-secondary">
                        <span className="font-medium">60 day money-back guarantee</span>
                    </div>
                </div>
            </div>

        </section>
    );
}
