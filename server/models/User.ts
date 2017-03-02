class User {
    user_id: number;
    user_name: string;
    user_username: string;
    user_email: string;
    user_password: Date;
    user_phone: string;
    user_street: string;
    user_suite: string;
    user_city: string;
    user_zipcode: string;
    user_website: string;
    //user_displayImage: 


    constructor(
        id: number,
        name: string,
        username: string,
        email: string,
        password: Date,
        phone: string,
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        website: string) {
        this.user_id = id;
        this.user_name = name;
        this.user_username = username;
        this.user_email = email;
        this.user_password = password;
        this.user_phone = phone;
        this.user_street = street;
        this.user_suite = suite;
        this.user_city = city;
        this.user_zipcode = zipcode;
        this.user_website = website;

    }
}

export = User;
