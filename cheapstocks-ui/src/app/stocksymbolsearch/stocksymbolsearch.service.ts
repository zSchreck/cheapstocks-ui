import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http/";
import { Observable } from "rxjs/Observable";
import { StockModel, StocksModel } from "../models/stock.model";


@Injectable()
export class StockSymbolSearchService {
    constructor(private http: HttpClient) {}

    public getStockInfo(input: string): Observable<StockModel> {
        return this.http.get<StockModel>("https://devapi.cheapstockpicker.info/dev/v0/stocksymbol/" + input);
    }
}