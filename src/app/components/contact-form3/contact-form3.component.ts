import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'contact-form3',
  templateUrl: 'contact-form3.component.html',
  styleUrls: ['contact-form3.component.css'],
})
export class ContactForm3 {
  @Input()
  imageAlt: string = 'Image1'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('content2')
  content2: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('action')
  action: TemplateRef<any>
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1603638925702-37e1936b6d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDY1Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  rawar87: string = ' '
  rawgm50: string = ' '
  constructor() {}
}
