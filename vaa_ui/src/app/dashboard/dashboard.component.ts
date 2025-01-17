import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  products: any;

  constructor(
    private api: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.api.getProductApiCall().subscribe((data)=>{this.products = data});
  }

  redirectToShop(id: any) {
    this.router.navigate(['shop'], { queryParams: {product_id: id}});
  }

}
