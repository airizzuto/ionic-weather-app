import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MeteoInfoComponent } from './meteo-info/meteo-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/meteo', pathMatch: 'full' },
  { path: 'meteo', component: MeteoInfoComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
