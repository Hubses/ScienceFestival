declare namespace sf.entities {
    interface User {
        id?: number
        email: string;
        password: string;
        // lang?: sf.entities.Localization;
        name?: string;
        role?: sf.enums.user.Role;
        isApproved?: boolean;
        submittedEvents?: number[];
        phone?: number;
    }
    interface Phone {
        code: string;
        number: string;
    }
}
