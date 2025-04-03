import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-testimonial17',
  templateUrl: 'testimonial17.component.html',
  styleUrls: ['testimonial17.component.css'],
})
export class Testimonial17 {
  @ContentChild('author4Name')
  author4Name: TemplateRef<any>
  @ContentChild('author2Position')
  author2Position: TemplateRef<any>
  @ContentChild('author3Name')
  author3Name: TemplateRef<any>
  @ContentChild('review3')
  review3: TemplateRef<any>
  @Input()
  author4Alt: string = 'Image of Sarah Thompson'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1579783901467-31b604eac7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('author1Name')
  author1Name: TemplateRef<any>
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1624561254177-28de5f2c36eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1596243651159-908a16206cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Alt: string = 'Image of Emily Johnson'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('author3Position')
  author3Position: TemplateRef<any>
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Alt: string = 'Image of Michael Lee'
  @ContentChild('author4Position')
  author4Position: TemplateRef<any>
  @ContentChild('author1Position')
  author1Position: TemplateRef<any>
  @ContentChild('author2Name')
  author2Name: TemplateRef<any>
  @ContentChild('review2')
  review2: TemplateRef<any>
  @ContentChild('review1')
  review1: TemplateRef<any>
  @Input()
  author1Alt: string = 'Image of John Smith'
  @ContentChild('review4')
  review4: TemplateRef<any>
  constructor() {}
}
