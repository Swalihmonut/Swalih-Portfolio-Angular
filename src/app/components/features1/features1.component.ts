import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @ContentChild('secondaryAction')
  secondaryAction: TemplateRef<any>
  @Input()
  feature2ImageSrc: string =
    'https://images.unsplash.com/photo-1667374668335-1c810ca95bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('sectionDescription')
  sectionDescription: TemplateRef<any>
  @Input()
  feature1ImageAlt: string = 'BI Tools Icon'
  @ContentChild('mainAction')
  mainAction: TemplateRef<any>
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  @Input()
  feature2ImageAlt: string = 'Python Programming Icon'
  @ContentChild('slogan')
  slogan: TemplateRef<any>
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @ContentChild('sectionTitle')
  sectionTitle: TemplateRef<any>
  @Input()
  feature3ImageSrc: string =
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImageAlt: string = 'Regulatory Compliance Icon'
  constructor() {}
}
