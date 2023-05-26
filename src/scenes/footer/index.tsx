import Logo from '@/assets/Logo.png'

type Props = {}

const index = ({}: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'> 
           <div className='mt-16 basis-1/2 md:mt-0'>
            <img alt='logo' src={Logo} />
            <p className='my-5'>
                Transform your body, empower your mind. Join our fitness community and unlock your full potential. Discover a world of strength, endurance, and vitality. Let our expert trainers guide you towards your goals. Embrace the grind, conquer your limits, and become the best version of yourself. Your fitness journey starts here.
            </p>
            <p> © Evogym All Rights Reserved.</p>
           </div>
           <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Massa orci senctus</p>
            <p className='my-5'>Massa orci senctus</p>
            <p>Ullamcorper vivamus</p>
           </div>

           <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'>Massa orci senctus</p>
            <p className='my-5'>Massa orci senctus</p>
            <p>(91)378-5912</p>
           </div>
           
        </div>
    </footer>
  )
}

export default index