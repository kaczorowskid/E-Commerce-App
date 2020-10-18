export interface IUser {
    name: string,
    email: string;
    password: string;
    role: string;
    birthdate: Date;
    createaccount: Date
}

export interface IUserDBModel {
    id: number;
    name: string,
    email: string;
    password: string;
    role: string;
    telefonnumber: string,
    birthdate: Date,
    createaccount: Date,
    myaddressstreet: string,
    myaddresspostcode: string,
    myaddressvoivodeship: string,
    myaddresscountry: string,
    shippingaddressname: string,
    shippingaddressstreet: string,
    shippingaddresspostcode: string,
    shippingaddressvoivodeship: string,
    shippingaddresscountry: string,
}
