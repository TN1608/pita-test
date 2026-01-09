import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle2, X } from "lucide-react";
import { SUPPLEMENT_FACTS } from "@/constants";

interface InformationDialogProps {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
}

export default function InformationDialog({ isOpen, setOpen }: InformationDialogProps) {

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full max-w-[280px] md:w-1/2 mx-auto bg-white/80 backdrop-blur-sm py-2.5 md:py-2 rounded-full flex items-center justify-center gap-2 border border-black/10 text-slate-700 font-light text-base md:text-lg hover:bg-white/90 transition-all shadow-sm">
                    <Image src={"/img/leaf.png"} alt={"Leaf Icon"} width={20} height={20} className="w-5 h-5" />
                    Nutritional Information
                </Button>
            </DialogTrigger>
            <DialogContent size="4xl" className="bg-white p-0 border-0 gap-0 overflow-hidden max-h-[90vh] flex flex-col">
                <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar">
                    <DialogHeader className="mb-4">
                        <DialogTitle className="text-center text-3xl font-serif text-[#1a1a1a] tracking-wide">
                            Nutritional Information
                        </DialogTitle>
                    </DialogHeader>

                    {/* Supplement Facts Card */}
                    <div className="bg-[#009353] text-white p-4 md:p-6 rounded-xl shadow-lg border-2 border-[#007a45]">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                            Supplement Facts
                        </h2>
                        <div className="text-sm md:text-base mb-1 font-medium">
                            Serving Size: 2 Capsules
                        </div>
                        <div className="text-sm md:text-base mb-2 font-medium">
                            Servings Per Container: 30
                        </div>

                        {/* Thick Divider */}
                        <div className="h-3 bg-white w-full mb-2"></div>

                        <div className="flex justify-between items-end border-b border-white pb-1 mb-2 font-bold text-sm md:text-base">
                            <span>Amount Per Serving</span>
                            <span>%DV</span>
                        </div>

                        <div className="space-y-0 text-sm md:text-base">
                            {SUPPLEMENT_FACTS.map((item, idx) => (
                                <div key={idx} className={`flex justify-between items-start py-1 ${!item.sub ? 'border-b border-white/30' : ''}`}>
                                    {item.name ? (
                                        <>
                                            <span className="flex-1 pr-4 font-medium">
                                                {item.isItalic && item.italicText ? (
                                                    <span>
                                                        {item.name.split(item.italicText)[0]}
                                                        <i>{item.italicText}</i>
                                                        {item.name.split(item.italicText)[1]}
                                                    </span>
                                                ) : (
                                                    item.name
                                                )}
                                            </span>
                                            <div className="flex gap-4 min-w-[80px] justify-end">
                                                <span>{item.amount}</span>
                                                <span className="w-6 text-right">{item.dv}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <span className="pl-4 text-xs md:text-sm text-white/90 italic -mt-1 block pb-1">
                                            {item.sub}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="border-t-[3px] border-white mt-2 pt-1 text-xs md:text-sm font-medium">
                            ** Daily Value (DV) not established.
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/30 text-xs md:text-sm leading-relaxed">
                            <span className="font-bold">Other Ingredients:</span> Cellulose (vegetable capsule), Brown Rice Flour, Olive Oil.
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-6 space-y-4">
                        <Button className="w-full bg-black hover:bg-gray-900 text-white py-6 rounded-lg text-lg font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            Try Lymphatic Drainage Risk-Free
                        </Button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-xs text-gray-700">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
                                <span>Made & produced in the USA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
                                <span>100% Natural Ingredients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
                                <span>60-Day Money-Back Guarantee</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
                                <span>Free Shipping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}