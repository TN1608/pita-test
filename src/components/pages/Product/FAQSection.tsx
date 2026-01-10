"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_ITEMS } from "@/constants";

export default function FAQSection() {
    return (
        <section className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] text-center mb-12">
                Frequently Asked Questions
            </h2>

            <div className="bg-[#FAF9F6] rounded-2xl p-6 lg:p-10 shadow-sm border border-[#EBE8E0]">
                <Accordion type="single" collapsible className="w-full space-y-2">
                    {FAQ_ITEMS.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                            <AccordionTrigger className="text-left text-base lg:text-lg font-medium py-5 hover:no-underline text-[#1A1A1A]">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-sm lg:text-base leading-relaxed pb-6 whitespace-pre-line">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className="flex flex-col items-center mt-12 space-y-4">
                <Button variant={"default"} size={"lg"} className="bg-black text-white px-12 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-md active:scale-95">
                    Try Lymphatic Drainage Risk-Free
                </Button>
                <p className="text-sm text-gray-600">60-Day Money-Back Guarantee</p>
            </div>
        </section>
    );
}
