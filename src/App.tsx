import Navbar from "@/scenes/navbar"
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  // Type for usestate in ts typescript language 
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){ //you are at the top of the page 
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }

      if(window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return ( ) => window.removeEventListener("scroll", handleScroll); 
  }, []);
  
  return <div className="app bg-gray-20">
    <Navbar 
    isTopOfPage={isTopOfPage} 
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage} 
    />
  </div>
}

export default App;
