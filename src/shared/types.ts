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