export enum SelectedPage {
    Home = "home",
    Benifits = "benifits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string,
    description?: string; //it can be optional or it does not exsists. 
    image: string;
}