import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstService } from './Services/const.service';
import { LeaveGuardService } from './Services/leave-guard.service';
import { CanleaveComponent } from './Widgets/canleave/canleave.component';
import { PokemonsViewComponent } from './Widgets/pokemons-view/pokemons-view.component';
import { ReloaderComponent } from './Widgets/reloader/reloader.component';
import { TwoPokemonsComponent } from './Widgets/two-pokemons/two-pokemons.component';

const routes: Routes = [
  { path: ConstService.pokemonpicker, component: PokemonsViewComponent },
  { path: ConstService.pokemonReloader, component: ReloaderComponent },
  {
    path: ConstService.canLeave,
    component: CanleaveComponent,
    canDeactivate: [LeaveGuardService],
  },
  { path: ConstService.twoPokemons, component: TwoPokemonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
