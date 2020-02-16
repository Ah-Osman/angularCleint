import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { ProductItem } from '../model/product-item';
import { ProductStock } from '../model/product-stock';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: Stock[];
  productItems: ProductItem[];
  productStocks: ProductStock[];

  constructor(private stockService: StockService) { }

  public buyProduct(productName: string) {
    this.stockService.buyProduct(productName);
  }


  ngOnInit() {
    this.stockService.findAllStock().subscribe(data => {
      this.stocks = data;
    });
    this.stockService.findProductStock().subscribe(data => {
      this.productStocks = data;
    });
  }

}
