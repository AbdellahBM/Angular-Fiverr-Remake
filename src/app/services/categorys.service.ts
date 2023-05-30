import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor() { }

  serviceCategoryDetails = [
    {
      id:1,
      categoryName:"Graphic Design",
      categoryDetails:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at assumenda tenetur facere quidem dicta recusandae autem nobis, obcaecati consequatur ipsa.",
      categoryImg:"../../../assets/img/banner.jpg"
    },
    {
      id:2,
      categoryName:"Web Devlopement",
      categoryDetails:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at assumenda tenetur facere quidem dicta recusandae autem nobis, obcaecati consequatur ipsa.",
      categoryImg:"../../../assets/img/banner.jpg"
    },
    {
      id:3,
      categoryName:"Voice Over",
      categoryDetails:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at assumenda tenetur facere quidem dicta recusandae autem nobis, obcaecati consequatur ipsa.",
      categoryImg:"../../../assets/img/banner.jpg"
    },
    {
      id:4,
      categoryName:"Socil Media Creation",
      categoryDetails:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at assumenda tenetur facere quidem dicta recusandae autem nobis, obcaecati consequatur ipsa.",
      categoryImg:"../../../assets/img/banner.jpg"
    },
    {
      id:5,
      categoryName:"trading",
      categoryDetails:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at assumenda tenetur facere quidem dicta recusandae autem nobis, obcaecati consequatur ipsa.",
      categoryImg:"../../../assets/img/banner.jpg"
    },
    {
      id:6,
      categoryName:"CEO",
      categoryDetails:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at assumenda tenetur facere quidem dicta recusandae autem nobis, obcaecati consequatur ipsa.",
      categoryImg:"../../../assets/img/banner.jpg"
    },
    
  ]
}
