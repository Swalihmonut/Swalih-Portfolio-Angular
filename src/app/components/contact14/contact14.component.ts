import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact14',
  templateUrl: 'contact14.component.html',
  styleUrls: ['contact14.component.css'],
})
export class Contact14 {
  @ContentChild('address1')
  address1: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('phone1')
  phone1: TemplateRef<any>
  @ContentChild('heading4')
  heading4: TemplateRef<any>
  @ContentChild('link1')
  link1: TemplateRef<any>
  @ContentChild('heading3')
  heading3: TemplateRef<any>
  @ContentChild('content3')
  content3: TemplateRef<any>
  @ContentChild('email1')
  email1: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('content2')
  content2: TemplateRef<any>
  @ContentChild('content4')
  content4: TemplateRef<any>
  @ContentChild('heading2')
  heading2: TemplateRef<any>
  constructor() {}
}
