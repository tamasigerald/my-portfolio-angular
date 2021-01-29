import { AboutPageModule } from './pages/about-page/about-page.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () =>
    import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {path: 'about', loadChildren: () =>
    import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },
  {path: 'projects', loadChildren: () =>
    import('./pages/projects-page/projects-page.module').then(m => m.ProjectsPageModule)
  },
  {path: 'contact', loadChildren: () =>
    import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
