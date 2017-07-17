// узнать как будет называтся мероприятие на англ.
// coords:{
//     lat,lng
// }
declare namespace sf.entities {
  interface News {
    id: number;
    createDate: number;
    header: string;
    content: string;
  }
  interface NewsParams {
  }

}
