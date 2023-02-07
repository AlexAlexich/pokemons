import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsViewComponent } from './Widgets/pokemons-view/pokemons-view.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './Widgets/Loader/Loader.component';
import { CacheInterceptor } from './Services/cache-interceptor.service';
import { ReloaderComponent } from './Widgets/reloader/reloader.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './Widgets/dialog/dialog.component';
import { TwoPokemonsComponent } from './Widgets/two-pokemons/two-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsViewComponent,
    LoaderComponent,
    ReloaderComponent,
    DialogComponent,
    TwoPokemonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
