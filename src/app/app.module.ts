import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ROUTE } from './router.route';
import { MateriasComponent } from './pages/materias/materias.component';
import { MaestroComponent } from './pages/maestro/maestro.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    MateriasComponent,
    MaestroComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    RouterModule,
    ROUTE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
