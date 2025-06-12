import { Component , OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css']
})
export class OurProductComponent implements OnInit {
    products : any;
    constructor(private datasevices :DataService){
    }

    ngOnInit(): void {
        this.datasevices.getProducts().subscribe((data) => {
            this.products = data;
        });
    }
}
