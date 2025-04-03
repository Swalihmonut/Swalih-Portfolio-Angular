import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features25',
  templateUrl: 'features25.component.html',
  styleUrls: ['features25.component.css'],
})
export class Features25 {
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1700747335150-9f0f1c9726ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgAlt: string = 'Compliance'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature1ImgAlt: string = 'BI Tools'
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @Input()
  feature2ImgAlt: string = 'AI/ML'
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1476968622916-424ced6115be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1590935217281-8f102120d683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
