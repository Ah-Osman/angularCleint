import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItem } from '../model/product-item';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: ProductItem;
  amount: number;
  stockId: number;

  constructor(private route: ActivatedRoute, private router: Router,private stockService: StockService) {
          this.product= new ProductItem();
  }

  onsubmit() {
    this.stockService.refillStock(this.product, this.stockId, this.amount).subscribe(_result => this.gotoStockList());
  }

  gotoStockList() {
    this.router.navigate(['/stocks']);
  }



  ngOnInit() {
  }

}
