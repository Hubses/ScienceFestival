/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare namespace sf.enums.user {
  // enum Position {
  //   user,
  //   jouri,
  //   orgСommittee,
  //   admin
  // }
}
declare namespace sf.entities {
  export interface User {
    email: string;
     password: string;
     phone?: number; 
     position?: string;
  }
}