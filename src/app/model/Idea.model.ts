export interface IIdea{
  id?: number| null;
  title?: string| null;
  content?: string| null;
  status?: number| null ;
}

export class Idea implements IIdea{
  constructor(
  public id?: number| null,
  public title?: string| null,
  public content?: string| null,
  public status?:  number| null,
  ){}
}
