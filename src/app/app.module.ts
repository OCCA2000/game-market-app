// Módulos

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './modules/primeng/primeng.module';
import { ToolbarModule } from './modules/toolbar/toolbar.module';

// Componentes
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimengModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
