import React from "react";
import { Phone } from "lucide-react";

const phone = "+917600082233";

const HeadLine = () => {
    return (
        <section
            id="about"
            className="
                w-full bg-white text-black
                flex flex-col items-center justify-center
                px-5 sm:px-8 md:px-10
                py-[clamp(60px,8vw,110px)]
                text-center overflow-hidden
            "
        >
            <p className="
                text-[#174DAD] font-montserrat
                font-extrabold tracking-[0.25em]
                text-xs md:text-sm mb-5
            ">
                ABOUT INFINITE FITNESS
            </p>

            <h1 className="
                font-nudge
                text-[clamp(30px,5vh,58px)]
                md:text-[clamp(38px,5vh,64px)]
                leading-[1.15] tracking-[0.1rem]
                max-w-[900px]
            ">
                More Ways To Move.
                <br />
                <span className="text-[#174DAD]">
                    More Ways To Get Stronger.
                </span>
            </h1>

            <p className="
                mt-6 max-w-[720px]
                text-[clamp(13px,1.1vw,16px)]
                font-Work font-medium
                leading-[1.8] text-gray-700
            ">
                INFINITE FITNESS brings together different ways
                to train. Explore strength and weight training,
                group fitness, dance-based workouts, yoga and
                more—all in one fitness destination in Gota,
                Ahmedabad.
            </p>

            <a
                href={`tel:${phone}`}
                className="
                    inline-flex items-center gap-2
                    py-4 px-7 bg-[#E8FE61]
                    rounded-full mt-8
                    font-montserrat font-extrabold
                    text-sm hover:scale-105
                    transition duration-200
                "
            >
                <Phone size={17} />
                Contact the Gym →
            </a>

            <img
                src="https://img.magicpin.com/8235748_store_images_1.webp"
                alt="INFINITE FITNESS gym exterior"
                loading="lazy"
                className="
                    mt-12 w-full max-w-[1000px]
                    h-[250px] sm:h-[400px]
                    object-cover rounded-2xl
                    shadow-xl
                "
            />
        </section>
    );
};

export default HeadLine;