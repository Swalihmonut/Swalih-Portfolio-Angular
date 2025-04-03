import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-logos1',
  templateUrl: 'logos1.component.html',
  styleUrls: ['logos1.component.css'],
})
export class Logos1 {
  @Input()
  logo1Alt: string =
    'Business Analyst specializing in Life Sciences Manufacturing'
  @Input()
  logo1Src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original'
  @Input()
  logo5Alt: string = 'AI/ML Knowledge'
  @Input()
  logo3Src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original'
  @Input()
  logo4Alt: string = 'Compliance Specialist'
  @Input()
  logo5Src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original'
  @Input()
  logo6Alt: string = 'Impactful Insights and Strategies'
  @Input()
  logo4Src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original'
  @Input()
  logo3Alt: string = 'Python Proficiency'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @Input()
  logo6Src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original'
  @Input()
  logo2Src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original'
  @Input()
  logo2Alt: string = 'BI Tools Expertise'
  constructor() {}
}
