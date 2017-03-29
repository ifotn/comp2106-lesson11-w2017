/**
 * Created by RFreeman on 3/29/2017.
 */
// dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GameComponent } from './components/game.component';

@NgModule ({
    declarations: [ GameComponent ],
    imports: [ BrowserModule, HttpModule ],
    providers: [],
    bootstrap: [ GameComponent ]
})

export class AppModule {}



