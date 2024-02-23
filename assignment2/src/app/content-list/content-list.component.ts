import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypedeciderPipe } from '../type-decider.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypedeciderPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }

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
        title: "tesla 3",
        year: 2022,
        description: "The Tesla title 3 is an electric sedan known for its advanced technology and performance.",
        imgURL: "https://static.vecteezy.com/system/resources/previews/015/697/010/non_2x/vintage-classic-car-retro-style-illustration-vector.jpg",   
        tags: ["Luxury Car", "Racing"]

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
      },{
        id: 6,
        creator: "Ferrari",
        title: "LaFerrari",
        year: 2021,
        description: "The Ferrari LaFerrari is a limited-production hybrid sports car, known for its performance and advanced technology.",
        imgURL: "https://img.freepik.com/premium-vector/vintage-classic-car-illustration_232942-51.jpg",
        tags: ["simple Car", "Hybrid"]
      },
      {
        id: 7,
        creator: "Porsche",
        title: "911",
        year: 2023,
        description: "The Porsche 911 is a classic sports car renowned for its iconic design and driving dynamics.",
        imgURL: "https://img.freepik.com/premium-vector/vintage-classic-car-illustration_232942-51.jpg",
        tags: ["Racing", "Sportscar"]
      },
      {
        id: 8,
        creator: "Lamborghini",
        title: "Aventador",
        year: 2022,
        description: "The Lamborghini Aventador is a high-performance supercar, recognized for its aggressive styling and powerful engine.",
        imgURL: "https://img.freepik.com/premium-vector/vintage-classic-car-illustration_232942-51.jpg",
        tags: ["Rally", "Racing"]   
      },
      {
        id: 9,
        creator: "alto",
        title: "totyotas",
        year: 2052,
        description: "The alto  is a low-performance simplecar, recognized for its aggressive styling and powerful engine.",
        imgURL: "",
        tags: ["Rally", "Racing"]   
      }
      
      
    ];
  }
  
 
}