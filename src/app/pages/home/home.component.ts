import { Component , OnInit } from '@angular/core';
import { CategorysService } from 'src/app/services/categorys.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:CategorysService) { }
  categoryData:any;
  ngOnInit(): void {
    this.categoryData = this.service.serviceCategoryDetails;
  }

}
