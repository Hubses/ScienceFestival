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

    interface DropdownOptions {
        placeholder: string;
        values: string[];
        selectedValue?: string;
    }

    interface Coordinates {
        latitude: number;
        longitude: number;
        description: string;
    }

    interface Events {
        id: number;
        title: string;
        start: string;
        end: string;
        url: string;
    }
}