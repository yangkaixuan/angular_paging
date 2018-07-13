import { NgModule } from '@angular/core';
//表单模块
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { PagingComponent } from './paging/paging.component';


 
@NgModule({
  declarations: [  
    PagingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PagingComponent
  ]
})
export class PagingModule {}


