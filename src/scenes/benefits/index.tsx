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
            <div className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and Classes to
                    get you to your ultimate fitness goals with ease, We provide true
                    Care into each and every member.
                </p>
            </div>

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

        </motion.div>
    </section>
  )
}

export default Benefits