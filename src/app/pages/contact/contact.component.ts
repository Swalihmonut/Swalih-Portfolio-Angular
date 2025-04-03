import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  raw4g9i: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contact - Swalih-Portfolio')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Contact - Swalih-Portfolio',
      },
    ])
  }
}
