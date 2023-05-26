import { useForm } from "react-hook-form"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"

type Props = {
    setSelectedPage: (value : SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white outline-none`
    const {  trigger, register, formState: { errors },} = useForm();

    const onSubmit = async (e: any) => {
       const isValid = await trigger();
       if(!isValid){
        e.preventDefault();
       }
  
    }
  
    return (
    <section 
    id="contactus"
    className="mx-auto w-5/6 pt-24 pb-32"
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
            >
                <HText>
                   <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5">
                If you're interested in joining our gym, please feel free to contact us. Our dedicated team is here to assist you on your fitness journey and help you achieve your goals. Get in touch with us today to get started!
                </p>
            </motion.div>
            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                }}
                >
                    <form
                    target="_blank"
                    onSubmit={onSubmit}
                    method="POST"
                    action="https://formsubmit.co/20f96cec971b1feee03edd372b64a924"
                    >
                       <input
                       className={inputStyles}
                       type="text"
                       placeholder="NAME"
                       {...register("name", {
                           required: true,
                           maxLength: 100,
                       })} />
                       {errors.name && (
                        <p className="mt-1 text-primary-500">
                           {errors.name.type === "required" && "This Field is Required"}
                           {errors.name.type === "maxLength" && "Max length is 100 characters"}
                        </p>
                       )}

                       <input
                       className={inputStyles}
                       type="text"
                       placeholder="EMAIL"
                       {...register("email", {
                           required: true,
                           pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                       })} />
                       {errors.email && (
                        <p className="mt-1 text-primary-500">
                           {errors.email.type === "required" && "This Field is Required"}
                           {errors.email.type === "pattern" && "Invalid Email Address"}
                        </p>
                       )}

                       <textarea
                       className={inputStyles}
                       rows={4}
                       cols={50}
                       placeholder=" WRITE A MESSAGE"
                       {...register("message", {
                           required: true,
                           maxLength: 2000,
                       })} />
                       {errors.message && (
                        <p className="mt-1 text-primary-500">
                           {errors.message.type === "required" && "This Field is Required"}
                           {errors.message.type === "maxLength" && "Max length is 2000 characters"}
                        </p>
                       )}
                         
                       <button
                       type="submit"
                       className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                        SUBMIT
                       </button>
                    </form>
                </motion.div>
            </div>
        </motion.div>

    </section>
  )
}

export default ContactUs