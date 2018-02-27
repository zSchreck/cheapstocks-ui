import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { StocksymbolsearchComponent } from './stocksymbolsearch/stocksymbolsearch.component';
import { StockSymbolSearchService } from './stocksymbolsearch/stocksymbolsearch.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StocksymbolsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [StockSymbolSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
