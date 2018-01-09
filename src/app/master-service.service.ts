import { Injectable } from '@angular/core';

@Injectable()
export class MasterService {

  constructor() { }
  private masters:any = [
    {id:1,name:"Vche",mail:"vche@gmail.com",password:"vche123",categories:["darbin","anasun"],photo:"/assets/images/vChe.jpg"},
    {id:2,name:"Sargis",mail:"saqo@gmail.com",password:"sqe123",categories:["pinachi"],photo:"/assets/images/saqo.jpeg"},
    {id:3,name:"Pipo",mail:"pipka@gmail.com",password:"ppo123",categories:["ez"],photo:"/assets/images/image.webp"}
  ]
  getMaster(login: string, password: string){
    for(let i in this.masters){
      if(login == this.masters[i].mail && password == this.masters[i].password){
        return this.masters[i];
      }
    }
    return null;
  }
}
