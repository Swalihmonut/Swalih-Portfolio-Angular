import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-hero17',
  templateUrl: 'hero17.component.html',
  styleUrls: ['hero17.component.css'],
})
export class Hero17 {
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1611689698949-1e776464ff23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  image11Src: string =
    'https://images.unsplash.com/photo-1526374870839-e155464bb9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image11Alt: string = 'Hero Image'
  @Input()
  image10Src: string =
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3Mzg0MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3Mzg0MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image6Alt: string = 'Hero Image'
  @Input()
  image5Src: string =
    'https://images.unsplash.com/photo-1631416370617-ac45cb9c1945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3Mzg0MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image3Alt: string = 'Hero Image'
  @Input()
  image1Alt: string = 'Hero Image'
  @Input()
  image12Alt: string = 'Hero Image'
  @Input()
  image7Src: string =
    'https://images.unsplash.com/photo-1610832950071-0059d7e2d13d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image8Src: string =
    'https://images.unsplash.com/photo-1736284162276-d27cf9e9ec54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDQ2NXw&ixlib=rb-4.0.3&q=80&w=1500'
  @Input()
  image8Alt: string = 'Hero Image'
  @Input()
  image10Alt: string = 'Hero Image'
  @Input()
  image12Src: string =
    'https://images.unsplash.com/photo-1550071593-fd1bdaf1f93c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('action2')
  action2: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @Input()
  image6Src: string =
    'https://images.unsplash.com/photo-1423742774270-6884aac775fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1580639136208-af022077d6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3Mzg0MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Alt: string = 'Hero Image'
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1490897457030-b3a8bb388547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image9Src: string =
    'https://images.unsplash.com/photo-1600333527715-cc7f665bc332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY3MzgzOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('action1')
  action1: TemplateRef<any>
  @Input()
  image2Alt: string = 'Hero Image'
  @Input()
  image4Alt: string = 'Hero Image'
  @Input()
  image9Alt: string = 'Hero Image'
  @Input()
  image7Alt: string = 'Hero Image'
  constructor() {}
}
