import { Component,OnInit } from '@angular/core';
import { CategorysService } from 'src/app/services/categorys.service';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit{

  constructor(private service:CategorysService) { }
  categoryData:any;
  ngOnInit(): void {
    this.categoryData = this.service.serviceCategoryDetails;
  }

}
