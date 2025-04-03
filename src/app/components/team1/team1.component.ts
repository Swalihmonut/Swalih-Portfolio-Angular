import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-team1',
  templateUrl: 'team1.component.html',
  styleUrls: ['team1.component.css'],
})
export class Team1 {
  @ContentChild('member8')
  member8: TemplateRef<any>
  @ContentChild('member4Job')
  member4Job: TemplateRef<any>
  @Input()
  member1Alt: string = 'Image of John Doe'
  @ContentChild('member3Content')
  member3Content: TemplateRef<any>
  @Input()
  member3Alt: string = 'Image of Michael Johnson'
  @ContentChild('member6Job')
  member6Job: TemplateRef<any>
  @ContentChild('member7')
  member7: TemplateRef<any>
  @Input()
  member7Src: string =
    'https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  member5Src: string =
    'https://images.unsplash.com/photo-1455761070998-b340f7060cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member1Content')
  member1Content: TemplateRef<any>
  @ContentChild('member2Job')
  member2Job: TemplateRef<any>
  @Input()
  member4Alt: string = 'Image of Emily Brown'
  @ContentChild('member6')
  member6: TemplateRef<any>
  @Input()
  member6Alt: string = 'Member Alt'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('member8Job')
  member8Job: TemplateRef<any>
  @ContentChild('member3Job')
  member3Job: TemplateRef<any>
  @ContentChild('member5')
  member5: TemplateRef<any>
  @ContentChild('actionContent')
  actionContent: TemplateRef<any>
  @ContentChild('member2Content')
  member2Content: TemplateRef<any>
  @ContentChild('member5Content')
  member5Content: TemplateRef<any>
  @ContentChild('member1Job')
  member1Job: TemplateRef<any>
  @Input()
  member3Src: string =
    'https://images.unsplash.com/photo-1623580890503-9f7dca11d8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member4Content')
  member4Content: TemplateRef<any>
  @Input()
  member2Alt: string = 'Image of Jane Smith'
  @ContentChild('member1')
  member1: TemplateRef<any>
  @Input()
  member6Src: string =
    'https://images.unsplash.com/photo-1673259490113-f61211378f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member7Content')
  member7Content: TemplateRef<any>
  @ContentChild('member4')
  member4: TemplateRef<any>
  @ContentChild('member5Job')
  member5Job: TemplateRef<any>
  @ContentChild('member2')
  member2: TemplateRef<any>
  @Input()
  member1Src: string =
    'https://images.unsplash.com/photo-1614278555773-fcadf80a58a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  member8Src: string =
    'https://images.unsplash.com/photo-1520423465871-0866049020b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member7Job')
  member7Job: TemplateRef<any>
  @ContentChild('heading2')
  heading2: TemplateRef<any>
  @Input()
  member4Src: string =
    'https://images.unsplash.com/photo-1579783902915-f0b0de2c2eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member3')
  member3: TemplateRef<any>
  @ContentChild('member8Content')
  member8Content: TemplateRef<any>
  @ContentChild('member6Content')
  member6Content: TemplateRef<any>
  @Input()
  member8Alt: string = 'Member Alt'
  @ContentChild('content2')
  content2: TemplateRef<any>
  @ContentChild('content3')
  content3: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  member2Src: string =
    'https://images.unsplash.com/photo-1494708001911-679f5d15a946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  member5Alt: string = 'Member Alt'
  @Input()
  member7Alt: string = 'Member Alt'
  rawf95r: string = ' '
  raw3oug: string = ' '
  rawkiqq: string = ' '
  raw2p34: string = ' '
  constructor() {}
}
