/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare namespace sf.enums.user {
  enum Role {
    user,
    jouri,
    orgСommittee,
    admin
  }
}
