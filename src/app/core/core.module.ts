import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BackgroundComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([], {
    initialNavigation: 'enabled'
})
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BackgroundComponent
  ]
})
export class CoreModule { }
