import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-chm',
  templateUrl: './slider-chm.component.html',
  styleUrls: ['./slider-chm.component.css']
})
export class SliderChmComponent implements OnInit {
  
  imagenes = Array<String>();
  catkey = "MjkwMjgz";


  constructor() { }

  ngOnInit() {
    this.imagenes  = [
      "https://source.unsplash.com/category/nature",
      "https://source.unsplash.com/category/food",
      "https://source.unsplash.com/category/buildings",
      "https://source.unsplash.com/category/objects",
      "https://source.unsplash.com/category/technology"
    ]

  }

}
