import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-navbar8',
  templateUrl: 'navbar8.component.html',
  styleUrls: ['navbar8.component.css'],
})
export class Navbar8 {
  @Input()
  logoSrc: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
  @ContentChild('link3')
  link3: TemplateRef<any>
  @ContentChild('page4Description')
  page4Description: TemplateRef<any>
  @ContentChild('page2Description')
  page2Description: TemplateRef<any>
  @ContentChild('page3Description')
  page3Description: TemplateRef<any>
  @ContentChild('link2')
  link2: TemplateRef<any>
  @ContentChild('page3')
  page3: TemplateRef<any>
  @ContentChild('page4')
  page4: TemplateRef<any>
  @Input()
  page1ImageSrc: string =
    'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  linkUrlPage4: string = 'https://www.teleporthq.io'
  @Input()
  page2ImageSrc: string =
    'https://images.unsplash.com/photo-1717501218347-64853a917fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('action2')
  action2: TemplateRef<any>
  @Input()
  page3ImageAlt: string = 'image'
  @Input()
  page4ImageSrc: string =
    'https://images.unsplash.com/photo-1606820049560-cfaa8cba5859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('page2')
  page2: TemplateRef<any>
  @Input()
  link2Url: string = 'https://www.teleporthq.io'
  @Input()
  link3Url: string = 'https://www.teleporthq.io'
  @ContentChild('page1Description')
  page1Description: TemplateRef<any>
  @Input()
  linkUrlPage1: string = 'https://www.teleporthq.io'
  @ContentChild('link1')
  link1: TemplateRef<any>
  @ContentChild('page1')
  page1: TemplateRef<any>
  @Input()
  link1Url: string = 'https://www.teleporthq.io'
  @Input()
  linkUrlPage3: string = 'https://www.teleporthq.io'
  @ContentChild('link4')
  link4: TemplateRef<any>
  @Input()
  page4ImageAlt: string = 'image'
  @ContentChild('action1')
  action1: TemplateRef<any>
  @Input()
  page3ImageSrc: string =
    'https://images.unsplash.com/photo-1604757910263-bdf361745bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  page1ImageAlt: string = 'image'
  @Input()
  logoAlt: string = 'Business Analyst Portfolio Logo'
  @Input()
  linkUrlPage2: string = 'https://www.teleporthq.io'
  @Input()
  page2ImageAlt: string = 'image'
  link5DropdownVisible: boolean = false
  link5AccordionOpen: boolean = false
  constructor() {}
}
