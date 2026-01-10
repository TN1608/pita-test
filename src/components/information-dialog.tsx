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
                <Button className="w-full max-w-[280px] md:w-1/2 mx-auto backdrop-blur-sm py-2.5 md:py-2 rounded-full flex items-center justify-center gap-2 border border-black/10 text-slate-700 font-light text-base md:text-lg hover:bg-white/90 transition-all shadow-sm">
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

                    <Image src={"/img/imgi_42.png"} alt={"Nutritional Information"} width={2500} height={2500} className="w-full h-auto" />
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