import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //当前的页面的位置
  private pageNum = 2;
  //每页有多少条数据
  private pageSize = 10
  //数据总数
  private pageNumCount = 92
  //是否显示跳转
  isshowjump = true;
  isshowtip  = true
  constructor() {
  }

  firstpage() {
    this.pageNum = 1;
  }

  endpage(event) {
    this.pageNum = event;
  }
  next() {
    this.pageNum++;
  }
  jumpto(event) {
    this.pageNum = event;
  }
  previous() {
    this.pageNum--;
  }
}
