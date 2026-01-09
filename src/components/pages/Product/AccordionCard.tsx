import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

interface IngredientItem {
    tag: string;
    image: string;
    title: string;
    description: string;
}

interface AccordionCardProps {
    item: IngredientItem;
}

export default function AccordionCard({ item }: AccordionCardProps) {
    return (
        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full bg-white rounded-xl overflow-hidden">
            <CardHeader className="bg-white pb-2 pt-6 px-4">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wide">
                    <Check className="w-4 h-4" strokeWidth={3} />
                    {item.tag}
                </div>
            </CardHeader>
            <CardContent className="px-4 pb-6">
                {/* Image Area */}
                <div className="relative w-full h-32 mb-4 flex items-center justify-center">
                    {item.image ? (
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={120}
                            height={120}
                            className="object-contain"
                        />
                    ) : (
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-xs">
                            No Image
                        </div>
                    )}
                </div>

                {/* Accordion for Title & Description */}
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="hover:no-underline py-2 text-left">
                            <span className="font-serif font-bold text-secondary text-md">{item.title}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-secondary text-md leading-relaxed">
                            {item.description}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    );
}
