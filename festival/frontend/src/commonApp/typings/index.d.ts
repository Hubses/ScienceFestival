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
        values: string[] | number[];
        selectedValue: string | number;
    }
    interface menuOptions {
        
    }
}