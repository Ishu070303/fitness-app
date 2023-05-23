import { useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from '@/assets/logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    selectedPage : SelectedPage;
    setSelectedPage : (value: SelectedPage) => void;
}

const Navbar = ({
    selectedPage,
    setSelectedPage
}: Props) => {
    
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    
    return <nav>
        {/*z index (z-30) so that it popps up before everything else, py-6 means padding up and down */}
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* LEFT SIDE */}
                <div className={`${flexBetween} w-full gap-16`}>
                   <img alt='logo' src={Logo}/>

                 {/* RIGHT SIDE */}
                 
                 { isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} 
                        />

                        <Link 
                        page= "Benifits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} 
                        />

                        <Link 
                        page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} 
                        />

                        <Link 
                        page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} 
                        />

                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>Become a Mentor</ActionButton>
                    </div>
                 </div>)
                 : (
                   <button
                   className='rounded-full bg-secondary-500 p-2'
                   onClick={() => setIsMenuToggled(!isMenuToggled)}
                   >
                     <Bars3Icon className='h-6 w-6 text-white' />
                   </button>
                 )}
            </div>
        </div>
        </div>
    </nav>
}

export default Navbar;