import { Component , OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router , ActivatedRoute ,Params } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css']
})
export class OurProductComponent implements OnInit {
    Fruits : any = []
    Vegetables : any = []
    bakery : any = []
    dairy : any = []
    meat : any = []
    products : any = []
    categoryItems:any =['Fruits', 'Vegetables', 'Bakery', 'Dairy', 'Meat'];
    category: string = ''; 
    constructor(private datasevices :DataService , private router: Router, private active: ActivatedRoute ) {

        this.datasevices.getProductByCategory('Fruits').subscribe((data) => {
      console.log(data)
    }
  )
     }
    ngOnInit(): void {
    this.datasevices.getProducts().subscribe((data) => {
        this.Fruits = data['Fruits'];
        this.Vegetables = data['Vegetables'];
        this.bakery = data['Bakery'];
        this.dairy = data['Dairy'];
        this.meat = data['Meat'];
    
        this.products = [
            ...this.Fruits.slice(0, 2).map((item: any) => ({ ...item, category: 'Fruits' })),
            ...this.Vegetables.slice(0, 2).map((item: any) => ({ ...item, category: 'Vegetables' })),
            ...this.bakery.slice(0, 2).map((item: any) => ({ ...item, category: 'Bakery' })),
            ...this.dairy.slice(0, 1).map((item: any) => ({ ...item, category: 'Dairy' })),
            ...this.meat.slice(0, 1).map((item: any) => ({ ...item, category: 'Meat' })),
        ];
    }
);

     this.active.params.subscribe((params: Params) => {
      this.category = params['category'];
    //   console.log(this.category)
      this.datasevices.getProductByCategory(this.category).subscribe((data) => {
        if(data.length != 0)
        this.products = data;
      });
    })
}


}
