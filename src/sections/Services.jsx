import React from "react";

const services = [
    {
        title: "Aerobics",
        description:
            "Group-based aerobic workouts designed around movement and cardiovascular exercise."
    },
    {
        title: "CrossFit",
        description:
            "Functional fitness workouts combining different styles of physical training."
    },
    {
        title: "Cycling",
        description:
            "Cycling-based fitness sessions for an energetic workout."
    },
    {
        title: "Dance Fitness",
        description:
            "Move to the music with dance-inspired fitness classes."
    },
    {
        title: "HIIT Training",
        description:
            "High-intensity interval training sessions built around alternating work and recovery."
    },
    {
        title: "Kickboxing",
        description:
            "A dynamic workout combining kickboxing movements and fitness training."
    },
    {
        title: "Nutrition Consulting",
        description:
            "Nutrition consulting to support your personal fitness journey."
    },
    {
        title: "Personal Training",
        description:
            "One-on-one training sessions with a focus on your individual fitness goals."
    },
    {
        title: "Pilates",
        description:
            "Controlled movement exercises focused on strength, balance and flexibility."
    },
    {
        title: "Weight Training",
        description:
            "Resistance-based workouts to help develop strength and muscular fitness."
    },
    {
        title: "Yoga",
        description:
            "Yoga classes focused on movement, flexibility and mindful practice."
    },
    {
        title: "Zumba",
        description:
            "Dance-based group fitness sessions with energetic movement."
    }
];

const Services = () => {
    return (
        <section
            id="services"
            className="
                w-full bg-[#EFF5FF]
                px-5 sm:px-8 md:px-16 lg:px-20
                py-12 sm:py-14 md:py-20
                flex flex-col items-center
                gap-6
            "
        >
            <p className="
                text-[#174DAD] font-montserrat
                font-extrabold tracking-[0.2em]
                text-xs md:text-sm
            ">
                TRAIN YOUR WAY
            </p>

            <h1 className="
                text-black font-nudge font-bold
                tracking-wider text-center
                text-[clamp(28px,4vw,50px)]
            ">
                Explore Our Fitness Programs
            </h1>

            <p className="
                text-black font-Work font-medium
                text-sm md:text-lg leading-relaxed
                max-w-[680px] text-center
            ">
                Choose from a variety of fitness activities
                and find the workout style that suits you.
            </p>

            <div className="
                w-full max-w-[1100px]
                grid grid-cols-1 md:grid-cols-2
                gap-4 mt-5
            ">
                {services.map((service, index) => (
                    <div
                        key={service.title}
                        tabIndex={0}
                        className="
                            collapse collapse-arrow
                            bg-white text-black
                            border border-black/5
                            rounded-xl shadow-sm
                            focus:bg-[#174DAD]
                            focus:text-white
                            transition-colors duration-300
                        "
                    >
                        <div className="
                            collapse-title font-nudge
                            tracking-wider
                            text-[clamp(14px,1.4vw,18px)]
                            min-h-[64px] flex items-center
                        ">
                            <span className="
                                text-[#174DAD] mr-4
                                font-montserrat font-black
                                text-sm
                            ">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            {service.title}
                        </div>

                        <div className="
                            collapse-content font-Work
                            text-sm leading-relaxed
                        ">
                            {service.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;