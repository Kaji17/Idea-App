export interface IIdea{
  id?: number;
  title?: string| null;
  content?: string| null;
  status?: number| null ;
}

// export class Idea implements IIdea{
//   constructor(
//   public id?: number,
//   public title?: string,
//   public content?: string,
//   public status?: number,
//   public lastmodif?: string
//   ){}
//}
