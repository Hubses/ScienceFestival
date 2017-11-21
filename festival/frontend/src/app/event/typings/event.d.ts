declare module "@sf/event" {
  export interface Event {
    id?: number;
    name: string;
    description: string;
    coords?: {
      lat: number;
      lng: number;
    };
  }
}
