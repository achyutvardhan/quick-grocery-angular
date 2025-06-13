import { Component , OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
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

    constructor(private datasevices :DataService){
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
    });
}
}
