import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//importando o componente de herois para referenciar a rota
import { HeroesComponent } from '../heroes/heroes.component';


//definindo rota
const routes: Routes = [ 

  //rota para o dashboard como sendo ele default
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  //definindo a rota dos detalhes de cada heroi pelo id do mesmo
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }

];

@NgModule({
  imports: [
    CommonModule,
    //inicializando o roteador para escutar as rotas | n esquecer de importar o approuting no ngmodule
    RouterModule.forRoot(routes)    
  ],
  exports:[
   RouterModule
  ],
  declarations: []
  
  
})

export class AppRoutingModule { }
