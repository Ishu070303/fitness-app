import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string; //you have to tell the type of the props you passes
    selectedPage : SelectedPage;
    setSelectedPage : (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {

   //everytime we gotta sapce it cgonna remove it.
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
    className={`${selectedPage == lowerCasePage} ? "text-primary-500" : "" 
    transition duration-500 hover:text-primary-300`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link