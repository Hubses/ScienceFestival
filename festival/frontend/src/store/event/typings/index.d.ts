declare namespace sf.entities {
    interface Event {
        id?: number;
        title: string;
        start: string;
        end: string;
        url?: string;
    }
    interface Coordinates extends sf.common.Coordinates { }
}