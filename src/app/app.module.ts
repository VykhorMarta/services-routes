import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployerComponent } from './employer/employer.component';
import { ManageService } from './services/manage.service';
import { ManagemeComponent } from './manageme/manageme.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
{path: 'manage', component: ManagemeComponent},
{path: 'employers', component: EmployerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent,
    ManagemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
