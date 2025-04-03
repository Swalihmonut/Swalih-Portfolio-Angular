import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'content-list1',
  templateUrl: 'content-list1.component.html',
  styleUrls: ['content-list1.component.css'],
})
export class ContentList1 {
  @ContentChild('heading4')
  heading4: TemplateRef<any>
  @ContentChild('content4')
  content4: TemplateRef<any>
  @ContentChild('content6')
  content6: TemplateRef<any>
  @ContentChild('heading2')
  heading2: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('content2')
  content2: TemplateRef<any>
  @ContentChild('heading6')
  heading6: TemplateRef<any>
  @ContentChild('content5')
  content5: TemplateRef<any>
  @ContentChild('heading5')
  heading5: TemplateRef<any>
  @ContentChild('heading3')
  heading3: TemplateRef<any>
  @ContentChild('content3')
  content3: TemplateRef<any>
  constructor() {}
}
