export interface TabStylesProps {
    homeTab?:React.CSSProperties;
    skillsTab?:React.CSSProperties;
    projectsTab?:React.CSSProperties;
    contactsTab?:React.CSSProperties;
    
}

export interface FormProps {
    name:string;
    email:string;
    to_name:string;
    message:string;
    [key:string]:string;
}

export interface NavBarProps {
    tabStyles:TabStylesProps;
}

export interface TextAreaProps {
    value:string;
    onChange:(event:any)=>void;
    name:string;
    className:string;
}

export interface ContactFormState {
    form:FormProps;
    loading:boolean;
    messageSent:boolean;
    hasErrors:boolean;
    formIsValid?:boolean;
    textAreaProps?:TextAreaProps;
   
}

export interface ValidatedFormProps {
    form:FormProps;
    errors:FormProps;
    isClean:boolean;
    hasErrors:boolean;
};

interface filters {
    label:string;
    isChecked:boolean;
}


export interface  filtersDefault {
    label:string;
    isChecked:boolean;
}
