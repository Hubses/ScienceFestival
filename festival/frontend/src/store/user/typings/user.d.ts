declare namespace sf.entities {
    interface User {
        id?: number
        email: string;
        // lang?: sf.entities.Localization;
        name?: string;
        role?: string;
        isApproved?: boolean;
        submittedEvents?: number[];
        phone?: number;
    }
    interface Phone {
        code: string;
        number: string;
    }
    // interface AuthUser extends User {
    //     password: string
    // }
}
