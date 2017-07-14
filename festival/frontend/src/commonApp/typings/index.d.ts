declare namespace sf.common {
    interface Tab {
        id: number;
        title: string;
        content: any;
    }
    interface FormOption {
        label: string;
        type: FormType
    }
    enum FormType {
        autocomplete,
        checkbox,
        datepicker,
        input,
        radiobutton,
        select,
        slider,
        trigger
    }

    interface DropdownOptions<T> {
        placeholder?: string;
        values?: T[];
        selectedValue?: T;
    }

    interface Coordinates {
        latitude: number;
        longitude: number;
        description: string;
    }

    interface Events {
        id?: number;
        title: string;
        start: string;
        end: string;
        url?: string;
    }
    interface Input {
        placeholder?: string;
        value?: any;
    }
    interface StringInput extends Input {
        isSecure?: boolean;
        value?: string;
    }
    interface NumberInput extends Input {
        value?: number;
        minValue?: number;
        maxValue?: number;
    }
    interface Dropdown<T> {
        selectedValue: T;
        dropdownOptions: sf.common.DropdownOptions<T>
    }
    interface Icon {
        type: string;
    }
    interface Accordion {
        isCollapsed: boolean;
    }
}