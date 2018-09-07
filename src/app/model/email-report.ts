export class EmailReport {
    names: Name[];
    emails: Email[];
    images: Image[];    
    social: Social[];
    jobs: Job[];
    educations: Education[];
}

export class Name {
    full :string;
}

export class Email {
    email_address :string;
}

export class Image {
    url :string;
}

export class Social {
    type :string;
    url : string;
    domain : string;
}

export class Job {
    company : string;
    title : string;
    industry : string; 
}

export class Education {
    school : string;
    degree : string;
}