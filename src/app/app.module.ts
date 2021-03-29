import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CheckLengthPipe } from './pipes/check-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PokemonItemComponent,
    HighlightDirective,
    CheckLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
