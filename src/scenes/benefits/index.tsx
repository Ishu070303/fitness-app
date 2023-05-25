import { SelectedPage } from "@/shared/types"
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
import { motion } from "framer-motion";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon 
} from "@heroicons/react/20/solid"
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon : <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Cutting-edge equipment, advanced fitness technology, spacious workout areas, expert trainers, immersive virtual reality workouts, luxurious amenities, and personalized training programs."
    },

    {
        icon : <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Wide range of classes including yoga, HIIT, cycling, Zumba, Pilates, kickboxing, dance, strength training, and more, catering to diverse fitness interests and goals."
    },

    {
        icon : <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Highly skilled and certified trainers with extensive experience and expertise in guiding and motivating individuals towards their fitness goals."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren : 0.2 } //It will stagget all thi children below the conatiner. 
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
        >
            {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants= {{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
            >
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and Classes to
                    get you to your ultimate fitness goals with ease, We provide true
                    Care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView= "visible"
            viewport={{ once:true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                     key={benefit.title}
                     icon={benefit.icon}
                     title={benefit.title}
                     description={benefit.description}
                     setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
                />

                {/* DESCRIPTION */}
                <div>

                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before: content-stretch">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants= {{
                                hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0},
                            }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.3, duration: 0.5 }}
                    variants= {{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0},
                    }}
                    >
                        <p className="my-5">The statement "Millions of happy members getting fit" suggests that there is a large number of individuals who are dedicated to improving their physical health and wellness. These members could be part of a gym, fitness center, or any other community that promotes a healthy lifestyle. The term "getting fit" implies that these individuals are actively pursuing their fitness goals through exercise, proper nutrition, and other healthy habits.</p>
                        <p className="mb-5">The phrase "happy members" indicates that these individuals are experiencing positive results from their efforts. This could include improved physical health, increased energy and stamina, better mental health, and a sense of accomplishment. It is likely that these individuals have found a sense of community and support within their fitness group, which has helped them stay motivated and committed to their goals.</p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:left-24 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    </section>
  )
}

export default Benefits