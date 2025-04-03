import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-legal',
  templateUrl: 'legal.component.html',
  styleUrls: ['legal.component.css'],
})
export class Legal {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Legal - Swalih-Portfolio')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Legal - Swalih-Portfolio',
      },
    ])
  }
}
