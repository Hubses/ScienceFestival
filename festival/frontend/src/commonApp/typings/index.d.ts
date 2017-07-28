// import { MdButton } from "@angular/material/typings";
// import { EventEmitter } from "@angular/core/src/event_emitter";

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
        values?: T[] | T;
        selectedValue?: T[] | T;
    }

    interface Coordinates {
        latitude: number;
        longitude: number;
        description: string;
    }

    interface CalendarOptions {
        aspectRatio?: number;
        contentHeight?: number | string;
        header?: any;
        editable?: boolean;
        eventLimit?: boolean;
        events?: sf.common.Event[];
    }

    interface Event {
        id?: number;
        title: string;
        start: Date;
        end: Date;
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
    interface Button {
        onButtonClick: any;
    }
}
