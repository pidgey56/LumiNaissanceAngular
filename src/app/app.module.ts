import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DescriptionGrassetteComponent } from './description-grassette/description-grassette.component';
import { InformationPratiqueComponent } from './information-pratique/information-pratique.component';
import { ExpoComponent } from './expo/expo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'La-Grassette', component: DescriptionGrassetteComponent },
  { path: 'Information-Pratique', component: InformationPratiqueComponent },
  { path: 'Expo', component: ExpoComponent},
  { path: '', component: AccueilComponent},
  { path: '**', component: AccueilComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DescriptionGrassetteComponent,
    InformationPratiqueComponent,
    ExpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
