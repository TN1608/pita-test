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
            icon: ""
        },
        {
            label: "Restores your body’s natural 24-hour lymphatic cycle",
            icon: ""
        },
        {
            label: "Helps reduce fluid retention and the appearance of puffiness and bloating",
            icon: ""
        },
        {
            label: "Helps fall asleep faster, stay asleep longer and wake up energized",
            icon: ""
        },
        {
            label: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
            icon: ""
        },
        {
            label: "Boosts energy, mental clarity and emotional balance",
            icon: ""
        }
    ],
    images: [
        "/product-image-1.png",
        "/product-image-2.png",
        "/product-image-3.png"

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
        img: "",
        sub: "Your stomach is flat in the morning, but by evening you look six months pregnant."
    },
    {
        img: "",
        sub: 'Your ankles disappear into "kankles" by the end of the day.'
    },
    {
        img: "",
        sub: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try."
    },
    {
        img: "",
        sub: "You feel foggy and exhausted even after a full night's sleep."
    },
    {
        img: "",
        sub: "You wake up stiff and achy, like your body aged overnight."
    }
]

export const benefits = [
    {
        img: "",
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
            <div className={"text-md lg:text-xl font-light"}>
                Instead of processing and removing waste, it backs up in your tissues.
            </div>
        )
    },
    {
        img: "",
        description: () => (
            <div className={"lg:text-xl font-light text-md"}>
                <p>
                    <span className={"font-semibold"}>
                        And it accumulates. Day after day. Week after week.
                    </span>
                    <br/>
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
            <div className={"text-md lg:text-xl font-light"}>
                <span className={"font-semibold"}>
                    Your cells are literally sitting in their own waste—and your body can&#39;t flush it out.
                </span>
                <br/>
                The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an
                already compromised system.
            </div>
        )
    }

]