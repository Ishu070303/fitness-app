import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ClassType } from "@/shared/types";
import Class from './Class';

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Looking to build strength and tone your muscles? Join our weight training classes and achieve your fitness goals with expert guidance.",
        image: image1,
    },

    {
        name: "Yoga Classes",
        description: "Looking to build strength and tone your muscles? Join our weight training classes and achieve your fitness goals with expert guidance.",
        image: image2,
    },

    {
        name: "Abs Core Classes",
        description: "Looking to build strength and tone your muscles? Join our weight training classes and achieve your fitness goals with expert guidance.",
        image: image3,
    },

    {
        name: "Adventure Classes",
        description: "Looking to build strength and tone your muscles? Join our weight training classes and achieve your fitness goals with expert guidance.",
        image: image4,
    },

    {
        name: "Fitness Classes",
        description: "Looking to build strength and tone your muscles? Join our weight training classes and achieve your fitness goals with expert guidance.",
        image: image5,
    },

    {
        name: "Training Classes",
        description: "Looking to build strength and tone your muscles? Join our weight training classes and achieve your fitness goals with expert guidance.",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
       onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
       <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
        }}
        >
            <div className="md:w-3/5">
                <HText>OUR CLASSES</HText>
                <p className="py-5">One of the benefits of taking classes in a gym is the opportunity to learn new exercises and techniques that can help individuals achieve their fitness goals. Instructors are trained to provide safe and effective workouts that challenge participants while still being accessible to all fitness levels. Additionally, taking classes in a group setting can be motivating and inspiring. Participants can feed off each other's energy and support each other through the workout, which can help individuals push themselves harder than they would on their own.</p>
            </div>
       </motion.div>
       <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
                <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                />
            ))}
        </ul>
       </div>
      </motion.div>
    </section>
  )
}

export default OurClasses