import { Component ,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute , Params } from '@angular/router';
@Component({
  selector: 'app-view-item-page',
  templateUrl: './view-item-page.component.html',
  styleUrls: ['./view-item-page.component.css']
})
export class ViewItemPageComponent implements OnInit {

  items:any;
  category: string = '';
  name: string = '';
  selectedImg :string = '';
   constructor(private dataservice :DataService , private active : ActivatedRoute ,  ){}
    
   ngOnInit(): void {
       this.active.params.subscribe((params:Params)=>{
        this.category = params['category'];
        this.name = params['name'];
        this.dataservice.getProductByCategoryAndName(this.category ,this.name).subscribe((data)=>{
          this.items =data;
          // data.images.push(`https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`);
          this.selectedImg = data.images[0];
          console.log(this.items);
        })
       })
   }

   onClickHandler = (img:string)=>{
    this.selectedImg = img;
    console.log(img);
    // You can add any additional logic here when the button is clicked
   }

}
