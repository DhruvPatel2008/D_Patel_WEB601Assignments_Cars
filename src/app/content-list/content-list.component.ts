import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems = [
      {
        id: 0,
         creator : "Toyota",
        title  : "Camry",
        year: 2022,
        description: "The Toyota Camry is a popular midsize sedan known for its reliability and fuel efficiency.",
        imgURL: "https://i5.walmartimages.com/asr/b4b305f1-47c3-456a-8564-8222758e4da8.140f66a2022c6702260e03621bc83fd1.png?odnHeight=450&odnWidth=450&odnBg=ffffff",   
        tags: ["Car", "Racing"]
      },
      {
        id: 1,
        creator: "Honda",
        title: "Civic",
        year: 2022,
        description: "The Honda Civic is a compact car known for its value and comfortable ride.",
        imgURL: "https://www.oscars.org/sites/oscars/files/806x1075_the-godfather-part2.jpg",   
        tags: ["Formula 1", "Car"]
      },
      {
        id: 2,
        creator: "Ford",
        title: "F-150",
        year: 2022,
        description: "The Ford F-150 is a bestselling pickup truck known for its toughness and versatility.",
        imgURL: "https://img.freepik.com/premium-vector/vintage-classic-car-illustration_232942-51.jpg", 
        tags: ["Rally", "Racing"]    
      },
      {
        id: 3,
        creator: "Tesla",
        title: "title 3",
        year: 2022,
        description: "The Tesla title 3 is an electric sedan known for its advanced technology and performance.",
        imgURL: "https://static.vecteezy.com/system/resources/previews/015/697/010/non_2x/vintage-classic-car-retro-style-illustration-vector.jpg",   
        tags: ["Track Racing", "Performance Car"] 
      },
      {
        id: 4,
        creator: "Chevrolet",
        title: "Camaro",
        year: 2022,
        description: "The Chevrolet Camaro is a sports car known for its powerful engines and iconic design.",
        imgURL: "https://t3.ftcdn.net/jpg/02/92/46/90/360_F_292469014_asU8bWBtU4IZaFRapKbW2exKeN6hC5Gc.jpg",   
        tags: ["Racing", "Sportscar"]
      },
      {
        id: 5,
        creator: "Jeep",
        title: "Wrangler",
        year: 2022,
        description: "The Jeep Wrangler is an off-road SUV known for its ruggedness and adventure capabilities.",
        imgURL: "https://png.pngtree.com/png-vector/20200730/ourlarge/pngtree-classic-car-illustration-vector-flat-design-png-image_2316117.jpg",   
        tags: ["Luxury Car", "Racing"]
      },
    ];
  }
  
 
}