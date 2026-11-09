import React from "react";
import Slider from "../components/Slider";
import { Phone, Star } from "lucide-react";

const phone = "+917600082233";

const heroImage =
    "https://img.magicpin.com/8235748_store_images_2.webp";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="
                relative w-full min-h-[100svh]
                bg-[#102f68] overflow-hidden
                flex flex-col justify-between
                select-none
            "
        >
            <div className="
                absolute top-[45%] left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[350px] h-[350px]
                bg-white rounded-full blur-[130px]
                opacity-30 pointer-events-none
            " />

            <div className="
                relative z-20 w-full
                mt-[125px] md:mt-[155px]
                max-w-7xl mx-auto px-6 md:px-12
                grid grid-cols-1 md:grid-cols-2
                items-center gap-10
            ">
                <div className="text-white">
                    <p className="
                        font-montserrat font-bold
                        tracking-[0.2em] text-sm
                        text-lime-300 mb-5
                    ">
                        WELCOME TO INFINITE FITNESS
                    </p>

                    <h1 className="
                        font-montserrat font-black
                        text-[clamp(48px,7.5vw,100px)]
                        leading-[0.95] tracking-tight
                    ">
                        TRAIN
                        <br />
                        HARDER.
                        <br />
                        <span className="text-lime-300">
                            GO
                        </span>
                        <br />
                        INFINITE.
                    </h1>

                    <p className="
                        mt-7 max-w-[480px]
                        text-white/90 text-sm md:text-base
                        leading-relaxed font-medium
                    ">
                        From strength training and CrossFit to
                        high-energy group workouts, find the
                        training style that moves you.
                    </p>

                    <div className="
                        flex flex-wrap items-center gap-4
                        mt-8
                    ">
                        <a
                            href={`tel:${phone}`}
                            className="
                                inline-flex items-center justify-center gap-2
                                bg-[#E8FE61] text-black
                                font-montserrat font-black
                                rounded-2xl px-7 py-4
                                hover:scale-105 transition
                            "
                        >
                            <Phone size={18} />
                            Call the Gym
                        </a>

                        <div className="
                            flex items-center gap-2
                            text-white font-bold text-sm
                        ">
                            <Star
                                size={19}
                                className="fill-lime-300 text-lime-300"
                            />
                            4.7 Rating
                        </div>
                    </div>

                    <p className="
                        mt-4 text-white/60 text-xs
                        font-semibold tracking-wide
                    ">
                        637 Google reviews
                    </p>
                </div>

                <div className="
                    relative w-full
                    rounded-3xl overflow-hidden
                    border-4 border-white/10
                    shadow-2xl
                ">
                    <img
                        src={heroImage}
                        alt="Interior of INFINITE FITNESS gym"
                        className="
                            w-full h-[350px] md:h-[520px]
                            object-cover
                        "
                    />

                    <div className="
                        absolute inset-0
                        bg-gradient-to-t from-[#102f68]/80
                        via-transparent to-transparent
                    " />

                    <div className="
                        absolute bottom-6 left-6
                        text-white
                    ">
                        <p className="font-black text-2xl">
                            INFINITE FITNESS
                        </p>
                        <p className="
                            text-lime-300 font-bold
                            tracking-widest text-xs
                        ">
                            PUSH YOUR LIMITS
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-full mt-16 z-30">
                <Slider />
            </div>
        </section>
    );
};

export default HeroSection;