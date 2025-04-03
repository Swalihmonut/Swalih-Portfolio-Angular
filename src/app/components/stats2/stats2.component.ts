import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-stats2',
  templateUrl: 'stats2.component.html',
  styleUrls: ['stats2.component.css'],
})
export class Stats2 {
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('stat4Description')
  stat4Description: TemplateRef<any>
  @ContentChild('stat3')
  stat3: TemplateRef<any>
  @ContentChild('stat4')
  stat4: TemplateRef<any>
  @ContentChild('stat2Description')
  stat2Description: TemplateRef<any>
  @ContentChild('stat2')
  stat2: TemplateRef<any>
  @ContentChild('stat1')
  stat1: TemplateRef<any>
  @ContentChild('stat3Description')
  stat3Description: TemplateRef<any>
  @Input()
  image1Alt: string = 'image'
  @ContentChild('content2')
  content2: TemplateRef<any>
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1580835916901-40770720c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('stat1Description')
  stat1Description: TemplateRef<any>
  constructor() {}
}
