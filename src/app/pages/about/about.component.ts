import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
})
export class About {
  rawbgj9: string = ' '
  rawz09v: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About - Swalih-Portfolio')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'About - Swalih-Portfolio',
      },
    ])
  }
}
