import { Users, RefreshCw, Minimize2, Smile, Activity, Leaf } from "lucide-react";

export const PRODUCT = {
    title: "New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™",
    description: "",
    rating: {
        count: 4.8,
        type: "Excellent",
    },
    sub_details: [
        {
            label: "Join over 93 Thousand who say - it WORKS!",
            icon: <Users className="w-6 h-6 text-[#1a1a1a]" />
        },
        {
            label: "Restores your body’s natural 24-hour lymphatic cycle",
            icon: <RefreshCw className="w-6 h-6 text-[#1a1a1a]" />
        },
        {
            label: "Helps reduce fluid retention and the appearance of puffiness and bloating",
            icon: <Minimize2 className="w-6 h-6 text-[#1a1a1a]" />
        },
        {
            label: "Helps fall asleep faster, stay asleep longer and wake up energized",
            icon: <Smile className="w-6 h-6 text-[#1a1a1a]" />
        },
        {
            label: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
            icon: <Activity className="w-6 h-6 text-[#1a1a1a]" />
        },
        {
            label: "Boosts energy, mental clarity and emotional balance",
            icon: <Leaf className="w-6 h-6 text-[#1a1a1a]" />
        }
    ],
    images: [
        "/img/product/1.jpg",
        "/img/product/2.jpg",
        "/img/product/3.jpg",
        "/img/product/4.jpg",
        "/img/product/5.jpg",
        "/img/product/6.jpg",
        "/img/product/7.png",
        "/img/product/8.png"
    ],
    packages: [
        {
            label: "1 Bottle",
            description: "1 bottle total",
            price: 59.95,
            savings: 27.99,
            details: [
                "Free USA Shipping",
            ],
            featured: ""
        },
        {
            label: "Buy 2 get 1 free",
            description: "3 bottles total",
            price: 179.85,
            savings: 115.93,
            details: [
                "Free USA Shipping",
                "Free Anti-Bloating Protocol E-book"
            ],
            featured: "New Year Sale"
        },
        {
            label: "Buy 3 Get 2 Free",
            description: "5 bottles total",
            price: 299.75,
            savings: 203.67,
            details: [
                "Free USA Shipping",
                "Free Anti-Bloating Protocol E-book",
                "$20 Gift Card",
            ],
            featured: "",
        }
    ]
}

export const REVIEW = [
    {
        name: "Margaret Ellison | FL",
        rate_count: 5,
        isVerified: true,
        title: "Even my husband noticed... the spark came back.",
        description: "After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I’ve been present. Even my marriage feels renewed, not just in how I look but in how I feel. It’s hard to explain, but once you try it you’ll get it. I’d recommend this to my closest friends without question."
    }
]

export const FAQ = [
    {
        label: "Ingredients proven by science",
        sub: {
            title: "Sculptique Ingredients:",
            items: [
                {
                    name: "Echinacea purpurea Extract",
                    description: "Known for its anti-inflammatory properties, it may support skin health."
                },
                {
                    name: "Dandelion Extract",
                    description: "Traditionally used as a diuretic, it may help reduce water retention."
                },
                {
                    name: "Burdock Powder",
                    description: "Contains antioxidants that may promote skin clarity."
                },
                {
                    name: "Cleavers Extract",
                    description: "Believed to support lymphatic drainage and detoxification."
                },
                {
                    name: "Rutin",
                    description: "A flavonoid that may strengthen blood vessels and improve circulation."
                },
                {
                    name: "Bromelain Powder",
                    description: "An enzyme from pineapple that may reduce inflammation and support tissue repair."
                },
                {
                    name: "Lemon Powder",
                    description: "Rich in vitamin C, it may aid in collagen production and skin rejuvenation."
                },
                {
                    name: "Kelp Extract",
                    description: "A source of iodine and minerals that may support skin metabolism."
                }
            ],
            footer: "These natural ingredients work together to reduce puffiness, bloating, fluid retention."
        }
    },
    {
        label: "How does it actually work?",
        sub: {
            descriptions: [
                "Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid buildup that causes puffiness, inflammation, and water retention. It also reduces inflammation and boosts collagen production to help skin become firmer and smoother."
            ]
        }
    },
    {
        label: "Shipping and returns",
        sub: {
            descriptions: [
                "All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually shipped out within 1-2 working days, and you should receive the order within 3-7 working days for domestic USA orders, and within 10 working days for International orders.",
                "We also offer a 60-day money back guarantee - if you are unsatisfied with our product, you can take advantage of our guarantee and ship back the product to us to get your return within 60 days of receiving your order."
            ]
        }
    },
]

export const card_item = [
    {
        img: "/img/card_items/1.png",
        sub: "Your stomach is flat in the morning, but by evening you look six months pregnant."
    },
    {
        img: "/img/card_items/2.png",
        sub: 'Your ankles disappear into "kankles" by the end of the day.'
    },
    {
        img: "/img/card_items/3.png",
        sub: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try."
    },
    {
        img: "/img/card_items/4.png",
        sub: "You feel foggy and exhausted even after a full night's sleep."
    },
    {
        img: "/img/card_items/5.png",
        sub: "You wake up stiff and achy, like your body aged overnight."
    }
]

export const benefits = [
    {
        img: "/img/imgi_57.png",
        description: () => (
            <div className={"lg:text-xl font-light text-md"}>
                <p>
                    Your lymphatic system is your body&#39;s internal cleaning crew—a network of vessels that
                    processes <span className={"font-semibold"}>
                        3-4 liters of cellular waste and excess fluid every single day.
                    </span>
                    When it&#39;s working properly, you don&#39;t even know it exists.
                </p>
            </div>
        ),
        items: [
            {
                label: "Waste gets drained away",
                isChecked: true,
            },
            {
                label: "Fluid stays balanced.",
                isChecked: true
            },
            {
                label: "Your body feels light and energized.",
                isChecked: false,
            },
            {
                label: "Vessel pumping weakens.",
                isChecked: false,
            },
            {
                label: "Protein clogs form",
                isChecked: false
            },
            {
                label: "Vessel walls become leaky.",
                isChecked: false
            }
        ],
        footer: () => (
            <div className={"text-md lg:text-xl font-light text-accent"}>
                Instead of processing and removing waste, it backs up in your tissues.
            </div>
        )
    },
    {
        img: "/img/imgi_58.png",
        description: () => (
            <div className={"lg:text-xl font-light text-md"}>
                <p>
                    <span className={"font-semibold"}>
                        And it accumulates. Day after day. Week after week.
                    </span>
                    <br />
                    That gallon of fluid your body should be draining every 24 hours? It&#39;s pooling in your stomach, your
                    legs, your face—anywhere gravity and tissue structure allow it to settle.
                </p>
            </div>
        ),
        items: [
            {
                label: "That's why you're bloated.",
                isChecked: true,
            },
            {
                label: "That's why your ankles swell.",
                isChecked: false,
            },
            {
                label: "That's why you see cellulite.",
                isChecked: false,
            },
            {
                label: "That's why you feel exhausted and foggy.",
                isChecked: false,
            }
        ],
        footer: () => (
            <div className={"text-md lg:text-xl font-light text-accent"}>
                <span className={"font-semibold"}>
                    Your cells are literally sitting in their own waste—and your body can&#39;t flush it out.
                </span>
                <br />
                The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an
                already compromised system.
            </div>
        )
    }

]

export const not_work_card_item = [
    {
        img: "/img/imgi_59.jpg",
        description: "You cut out gluten, dairy, sugar. You ate clean for months.",
        sub: "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there."
    },
    {
        img: "/img/imgi_61.jpg",
        description: "You tried viral lymphatic drops from TikTok.",
        sub: "They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine."
    },
    {
        img: "/img/imgi_62.jpg",
        description: "You got lymphatic massage or bought compression socks.",
        sub: "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own."
    }
]

export const INGREDIENTS_DETAILS = [
    {
        tag: "Reactivate Lymphatic Pumps",
        image: "/img/accordion_card/imgi_67.png",
        title: "Cleavers Extract (100mg)",
        description: 'Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance. [Study: Enhanced NK cell activity in immunosuppressed models]'
    },
    {
        tag: "Flush Excess Fluid",
        image: "/img/accordion_card/imgi_68.png",
        title: "Dandelion Extract (250mg)",
        description: "Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001). [Study: First human pilot study on diuretic effects]"
    },
    {
        tag: "Break Down Protein Clogs",
        image: "/img/accordion_card/imgi_69.png",
        title: "Bromelain Powder (100mg)",
        description: 'Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo. [Study: As effective as prescription NSAIDs for inflammation]'
    },
    {
        tag: "Strengthen Vessel Walls",
        image: "/img/accordion_card/imgi_70.png",
        title: "Rutin (100mg)",
        description: "Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients. [Study: Systematic review of 1,643 participants]"
    },
    {
        tag: "Reduce Inflammation",
        image: "/img/accordion_card/imgi_71.png",
        title: "Burdock Root Powder (200mg)",
        description: "Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance. [Study: 42-day trial in osteoarthritis patients]"
    },
    {
        tag: "Boost Immune Clearance",
        image: "/img/accordion_card/imgi_72.png",
        title: "Echinacea Purpurea Extract (500mg)",
        description: "Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections. [Study: Increased NK cell cytotoxic activity]"
    },
    {
        tag: "Support Metabolism",
        image: "/img/accordion_card/imgi_73.png",
        title: "Kelp Extract (30mg)",
        description: "Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials. [Study: Dose-dependent increase in TSH levels]"
    },
    {
        tag: "Antioxidant Protection",
        image: "/img/accordion_card/imgi_74.png",
        title: "Lemon Powder (50mg)",
        description: "Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health. [Study: Triple-masked trial in 90 participants]"
    }
]

export const SUPPLEMENT_FACTS = [
    { name: "Echinacea purpurea Extract (whole plant)", amount: "500 mg", dv: "**", isItalic: true, italicText: "Echinacea purpurea" },
    { name: "Dandelion Extract (leaf)", amount: "250 mg", dv: "**" },
    { name: "Burdock Powder (root)", amount: "200 mg", dv: "**" },
    { name: "Cleavers Extract (Galium aparine) (whole herb)", amount: "100 mg", dv: "**", isItalic: true, italicText: "Galium aparine" },
    { name: "Rutin (Sophora japonica) (whole flower bud)", amount: "100 mg", dv: "**", isItalic: true, italicText: "Sophora japonica" },
    { name: "Bromelain Powder (Ananas comosus) (stem)", amount: "100 mg", dv: "**", isItalic: true, italicText: "Ananas comosus" },
    { sub: "(std. to 2400 Gdu/g)" },
    { name: "Lemon Peel Powder (peel)", amount: "50 mg", dv: "**" },
    { name: "Kelp Extract (Laminaria japonica)", amount: "30 mg", dv: "**", isItalic: true, italicText: "Laminaria japonica" },
    { sub: "(std. to 10% fucoxanthin)" },
];

