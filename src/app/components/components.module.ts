import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ContactForm3 } from './contact-form3/contact-form3.component'
import { Stats2 } from './stats2/stats2.component'
import { Contact10 } from './contact10/contact10.component'
import { Team1 } from './team1/team1.component'
import { Hero8 } from './hero8/hero8.component'
import { CTA26 } from './cta26/cta26.component'
import { Steps2 } from './steps2/steps2.component'
import { Testimonial17 } from './testimonial17/testimonial17.component'
import { Pricing14 } from './pricing14/pricing14.component'
import { Contact14 } from './contact14/contact14.component'
import { Features25 } from './features25/features25.component'
import { Features1 } from './features1/features1.component'
import { Navbar8 } from './navbar8/navbar8.component'
import { CTA1 } from './cta1/cta1.component'
import { Logos1 } from './logos1/logos1.component'
import { Contact7 } from './contact7/contact7.component'
import { Hero17 } from './hero17/hero17.component'
import { Features24 } from './features24/features24.component'
import { ContentList1 } from './content-list1/content-list1.component'
import { Footer4 } from './footer4/footer4.component'

@NgModule({
  declarations: [
    ContactForm3,
    Stats2,
    Contact10,
    Team1,
    Hero8,
    CTA26,
    Steps2,
    Testimonial17,
    Pricing14,
    Contact14,
    Features25,
    Features1,
    Navbar8,
    CTA1,
    Logos1,
    Contact7,
    Hero17,
    Features24,
    ContentList1,
    Footer4,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ContactForm3,
    Stats2,
    Contact10,
    Team1,
    Hero8,
    CTA26,
    Steps2,
    Testimonial17,
    Pricing14,
    Contact14,
    Features25,
    Features1,
    Navbar8,
    CTA1,
    Logos1,
    Contact7,
    Hero17,
    Features24,
    ContentList1,
    Footer4,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
