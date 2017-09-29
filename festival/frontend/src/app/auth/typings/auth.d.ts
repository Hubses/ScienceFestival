declare module '@sf/auth' {
  export interface Security {
    username: string;
    password: string;
  }
  export interface User {
    username: string;
    role: number;
  }
  // export enum UserRoles {
  //   ADMIN,
  //   ORGCOMITEETE,
  //   JURI,
  //   USER
  // }
}
