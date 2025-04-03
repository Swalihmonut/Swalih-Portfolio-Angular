import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features24',
  templateUrl: 'features24.component.html',
  styleUrls: ['features24.component.css'],
})
export class Features24 {
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1530817603074-a5bb9b3a71b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1571141133233-bef5495a1cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @Input()
  feature1ImgAlt: string = 'Power BI Dashboard'
  @Input()
  feature2ImgAlt: string = 'Python Programming'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature3ImgAlt: string = 'GMP and FDA Compliance'
  activeTab: number = 0
  constructor() {}
}
