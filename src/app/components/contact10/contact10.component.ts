import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact10',
  templateUrl: 'contact10.component.html',
  styleUrls: ['contact10.component.css'],
})
export class Contact10 {
  @ContentChild('location2')
  location2: TemplateRef<any>
  @ContentChild('location2Description')
  location2Description: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  location1ImageAlt: string = 'image1Alt'
  @ContentChild('location1Description')
  location1Description: TemplateRef<any>
  @Input()
  location2ImageSrc: string =
    'https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @Input()
  location1ImageSrc: string =
    'https://images.unsplash.com/photo-1734607404585-bd97529f1f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  location2ImageAlt: string = 'image2Alt'
  @ContentChild('location1')
  location1: TemplateRef<any>
  constructor() {}
}
