import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WhoWeComponent } from './childcomponent/who_we/who-we.component';
import { TermsComponent } from './childcomponent/terms/terms.component';
import { FaqsComponent } from './childcomponent/faqs/faqs.component';
import { AboutComponent } from './childcomponent/about/about.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddfFaqsComponent } from './childcomponent/faqs/addf_faqs/addf-faqs.component';
@NgModule({
  declarations: [
    ContentComponent,
    WhoWeComponent,
    TermsComponent,
    FaqsComponent,
    AboutComponent,
    AddfFaqsComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ContentModule { }
