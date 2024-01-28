import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.addContent({
      id: 0,
      title: "Ford Mustang",
      description: "A classic American muscle car known for its performance and style.",
      creator: "Ford Motor Company",
      imgURL: "https://i5.walmartimages.com/asr/b4b305f1-47c3-456a-8564-8222758e4da8.140f66a2022c6702260e03621bc83fd1.png?odnHeight=450&odnWidth=450&odnBg=ffffff",
      type: "Muscle Car"
    });

    this.contentList.addContent({
      id: 1,
      title: "Tesla Model S",
      description: "A luxury all-electric sedan that set new standards for EV performance.",
      creator: "Tesla, Inc.",
      imgURL: "https://i5.walmartimages.com/asr/b4b305f1-47c3-456a-8564-8222758e4da8.140f66a2022c6702260e03621bc83fd1.png?odnHeight=450&odnWidth=450&odnBg=ffffff",
      type: "Electric Vehicle"
    });

    this.contentList.addContent({
      id: 2,
      title: "Toyota Prius",
      description: "One of the first mass-produced hybrid vehicles, known for its fuel efficiency.",
      creator: "Toyota Motor Corporation",
      imgURL: "https://i5.walmartimages.com/asr/b4b305f1-47c3-456a-8564-8222758e4da8.140f66a2022c6702260e03621bc83fd1.png?odnHeight=450&odnWidth=450&odnBg=ffffff",
      type: "Hybrid Vehicle"
    });
  }
}
