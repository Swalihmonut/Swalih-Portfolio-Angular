import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-cta1',
  templateUrl: 'cta1.component.html',
  styleUrls: ['cta1.component.css'],
})
export class CTA1 {
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('action2')
  action2: TemplateRef<any>
  @ContentChild('action1')
  action1: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  constructor() {}
}
