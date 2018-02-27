export interface StockModel {
    symbol: string;
    company_name: string;
    sector: string;
    price: number;
    avg_volume: number;
    pe_ratio: number;
    market_cap: number;
    week52high: number;
    week52low: number;
}

export class StocksModel {
    stocks: StockModel[];
}