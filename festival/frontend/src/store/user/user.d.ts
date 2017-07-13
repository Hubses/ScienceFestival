interface User {
    name: string;
    password: string;
    email?: string;
    phone?: Phone;
}
interface Phone {
    code: string;
    number: string;
}