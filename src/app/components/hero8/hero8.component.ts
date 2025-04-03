import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-hero8',
  templateUrl: 'hero8.component.html',
  styleUrls: ['hero8.component.css'],
})
export class Hero8 {
  @ContentChild('action1')
  action1: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('action2')
  action2: TemplateRef<any>
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1715635845581-b1683792ed25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image1Alt: string = 'Business Analyst in Life Sciences Manufacturing'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  constructor() {}
}
