"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { FAQ } from "@/constants"

function FAQAccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>div>svg]:rotate-45",
                    className
                )}
                {...props}
            >
                {children}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdf8ee] text-[#009353] transition-transform duration-200">
                    <Plus className="h-4 w-4" />
                </div>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
}

function FAQAccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
            {...props}
        >
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
}

export default function FAQ_section() {
    return (
        <AccordionPrimitive.Root type="multiple" className="flex flex-col gap-4">
            {FAQ.map((item, index) => (
                <AccordionPrimitive.Item
                    key={index}
                    value={`item-${index}`}
                    className="rounded-[2rem] border border-slate-200 px-6 py-2 bg-white data-[state=open]:border-[#009353] data-[state=open]:bg-[#fdf8ee]/30 transition-colors"
                >
                    <FAQAccordionTrigger className="text-base md:text-lg text-[#1a1a1a] hover:no-underline">
                        {item.label}
                    </FAQAccordionTrigger>
                    <FAQAccordionContent className="text-slate-600 leading-relaxed">
                        {item.sub.title && (
                            <p className="font-bold mb-2 text-[#1a1a1a]">{item.sub.title}</p>
                        )}

                        {item.sub.items && (
                            <ul className="list-disc pl-5 space-y-1 mb-3">
                                {item.sub.items.map((subItem, idx) => (
                                    <li key={idx}>
                                        <span className="font-semibold text-[#1a1a1a]">{subItem.name}: </span>
                                        {subItem.description}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {item.sub.descriptions && (
                            <div className="flex flex-col gap-3">
                                {item.sub.descriptions.map((desc, idx) => (
                                    <p key={idx}>{desc}</p>
                                ))}
                            </div>
                        )}

                        {item.sub.footer && (
                            <p className="italic mt-2 text-slate-500 font-medium">
                                {item.sub.footer}
                            </p>
                        )}
                    </FAQAccordionContent>
                </AccordionPrimitive.Item>
            ))}
        </AccordionPrimitive.Root>
    )
}
