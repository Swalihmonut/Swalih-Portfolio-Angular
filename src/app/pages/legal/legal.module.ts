import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Legal } from './legal.component'

const routes = [
  {
    path: '',
    component: Legal,
  },
]

@NgModule({
  declarations: [Legal],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Legal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LegalModule {}
