import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact7',
  templateUrl: 'contact7.component.html',
  styleUrls: ['contact7.component.css'],
})
export class Contact7 {
  @ContentChild('location2Description')
  location2Description: TemplateRef<any>
  @ContentChild('location1')
  location1: TemplateRef<any>
  @Input()
  location1ImgAlt: string = 'Email Icon'
  @Input()
  location2ImgSrc: string =
    'https://images.unsplash.com/photo-1532178324009-6b6adeca1741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDY1N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('location1Description')
  location1Description: TemplateRef<any>
  @Input()
  location1ImgSrc: string =
    'https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDY1Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('location2')
  location2: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  location2ImgAlt: string = 'Phone Icon'
  constructor() {}
}
