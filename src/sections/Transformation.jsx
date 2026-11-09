import React from "react";
import { Phone } from "lucide-react";

const phone = "+917600082233";

const gymImages = [
    {
        src: "https://img.magicpin.com/8235748_store_images_0.webp",
        alt: "INFINITE FITNESS exterior sign"
    },
    {
        src: "https://img.magicpin.com/8235748_store_images_2.webp",
        alt: "INFINITE FITNESS weight training area"
    },
    {
        src: "https://img.magicpin.com/8235748_store_images_6.webp",
        alt: "Member inside INFINITE FITNESS"
    },
    {
        src: "https://img.magicpin.com/8235748_store_images_8.webp",
        alt: "Members training inside INFINITE FITNESS"
    },
    {
        src: "https://img.magicpin.com/8235748_store_images_3.webp",
        alt: "INFINITE FITNESS gym exterior"
    },
    {
        src: "https://img.magicpin.com/8235748_store_images_5.webp",
        alt: "Group fitness activity"
    }
];

const Transformation = () => {
    return (
        <section
            id="transformations"
            className="
                w-full bg-white
                px-5 sm:px-8 md:px-12
                py-16 md:py-24
                flex flex-col items-center
            "
        >
            <p className="
                text-[#174DAD] font-montserrat
                font-extrabold tracking-[0.2em]
                text-xs md:text-sm mb-4
            ">
                THE INFINITE FITNESS SPACE
            </p>

            <h1 className="
                font-nudge text-black text-center
                text-[clamp(28px,5vw,56px)]
                leading-tight tracking-wider
            ">
                Take A Look Inside
            </h1>

            <h1 className="
                font-nudge text-[#174DAD] text-center
                text-[clamp(28px,5vw,56px)]
                leading-tight tracking-wider mt-2
            ">
                INFINITE FITNESS
            </h1>

            <p className="
                mt-5 max-w-[650px]
                text-center text-gray-600
                font-Work leading-relaxed
            ">
                A glimpse of the gym, training areas and
                fitness community at INFINITE FITNESS,
                Gota, Ahmedabad.
            </p>

            <div className="
                w-full max-w-[1100px]
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-4 sm:gap-5 mt-12
            ">
                {gymImages.map((image, index) => (
                    <div
                        key={index}
                        className="
                            group overflow-hidden
                            rounded-2xl bg-gray-100
                            shadow-md
                        "
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="
                                w-full h-[250px] sm:h-[280px]
                                object-cover
                                group-hover:scale-105
                                transition-transform duration-500
                            "
                        />
                    </div>
                ))}
            </div>

            <div className="
                mt-16 w-full max-w-[1100px]
                min-h-[320px] rounded-3xl
                bg-[#174DAD]
                flex flex-col justify-center items-center
                text-center px-6 sm:px-12 py-12
            ">
                <h1 className="
                    text-white font-nudge
                    text-[clamp(24px,4vw,42px)]
                    tracking-wide
                ">
                    Ready To Get Stronger?
                </h1>

                <p className="
                    mt-5 text-white
                    text-sm md:text-base
                    font-montserrat leading-relaxed
                    max-w-[700px]
                ">
                    Your next workout starts with one step.
                    Get in touch with INFINITE FITNESS
                    to learn more about its fitness programs.
                </p>

                <a
                    href={`tel:${phone}`}
                    className="
                        mt-8 bg-[#E8FE61] text-black
                        font-montserrat font-extrabold
                        px-8 py-4 rounded-2xl
                        hover:scale-105 transition
                        inline-flex items-center gap-2
                    "
                >
                    <Phone size={18} />
                    Call INFINITE FITNESS
                </a>
            </div>
        </section>
    );
};

export default Transformation;