import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

import { PipeModule } from '../pipes/pipe.module';
import { LazyModule } from '../utils/lazyLoadImg/lazy.module';
import { CartShowComponent } from './cart-show/cart-show.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ImagesDialogComponent } from './images-dialog/images-dialog.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductContentComponent } from './product-content/product-content.component';

@NgModule({
  declarations: [
    CartShowComponent,
    SidebarComponent,
    ProductsListComponent,
    ProductContentComponent,
    CategoriesListComponent,
    PaginationComponent,
    ImagesDialogComponent,
    OrdersListComponent,
    OrderDetailComponent,
    CarouselComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    LazyModule,
    PipeModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule,
    MatListModule
  ],
  providers: [],
  exports: [
    CartShowComponent,
    SidebarComponent,
    ProductsListComponent,
    ProductContentComponent,
    CategoriesListComponent,
    PaginationComponent,
    ImagesDialogComponent,
    OrdersListComponent,
    OrderDetailComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
