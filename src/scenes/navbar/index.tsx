import { useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from '@/assets/logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    isTopOfPage: boolean
    selectedPage : SelectedPage;
    setSelectedPage : (value: SelectedPage) => void;
}

const Navbar = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage
}: Props) => {
    
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
    
    return <nav>
        {/*z index (z-30) so that it popps up before everything else, py-6 means padding up and down */}
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
                        page= "Benefits"
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

        {/*MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                <div className='flex justify-end p-12'> { /*exact pixelsnin tailwind css so need to add brackets [] */}
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className='h-6 w-6 text-gray-400' />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
            </div> 
        )}
    </nav>
}

export default Navbar;