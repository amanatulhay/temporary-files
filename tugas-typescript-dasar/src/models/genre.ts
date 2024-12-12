class Genre{
  id: number;
  name: string;

  public constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }
}

module.exports={
  Genre
}