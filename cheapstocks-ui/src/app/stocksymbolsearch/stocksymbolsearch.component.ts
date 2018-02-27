import { Component, OnInit } from '@angular/core';
import { StockSymbolSearchService } from './stocksymbolsearch.service';
import { StockModel, StocksModel } from '../models/stock.model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-stocksymbolsearch',
  templateUrl: './stocksymbolsearch.component.html',
  styleUrls: ['./stocksymbolsearch.component.css']
})
export class StocksymbolsearchComponent implements OnInit {
  input: string;
  constructor(private stockSearchService: StockSymbolSearchService) { }

  ngOnInit() {

  }
  public stocks: Array<StockModel> = [];

  public getStockInfoFromInput = () : void => {
    this.stockSearchService.getStockInfo(this.input).subscribe(stock => {
      this.stocks.push(stock);
    });

  }

}
