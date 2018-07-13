# Angular4Paging
分页组件，由angular4+bootstrap4编写
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## 安装
```
npm i angular4-paging  --save
```
这个组件主要angular4 和bootstrap4
如果没有bootstrap环境，请在安装组件之后在项目根目录下的.angular-cli.json 文件中添加
```
"styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 ]

```

## 使用说明
###Import In AppModule
```
import { PagingModule } from '../components/paging.module';

@NgModule({
  declarations: [
  ],
  imports: [
    PagingModule
  ]
})
```

### Use In Templete

```
<app-paging
[pageNum]="pageNum" 
[pageSize]="pageSize"
[pageNumCount]="pageNumCount"
(firstpage)="firstpage()" 
(previous)="previous()"  
(next)="next()" 
(endpage)="endpage($event)" 
(jumpto)="jumpto($event)">
</app-paging>
```

###And In Component.ts
```
  //当前的页面的位置
  private pageNum = 2;
  //每页显示数据量
  private pageSize = 10
  //数据总数
  private pageNumCount = 92
  constructor() {
  }
  //跳转首页
  firstpage() {
    this.pageNum = 1;
  }
  //跳转末页
  endpage(event) {
    this.pageNum = event;
  }
  //下一页
  next() {
    this.pageNum++;
  }
  //跳转指定页面
  jumpto(event) {
    this.pageNum = event;
  }
  //上一页
  previous() {
    this.pageNum--;
  }
```

## 效果

![avatar](https://i.imgur.com/9BZxwaw.png)

## Input Properties


| 名称 | 类型 | 默认值 | 描述 
| - | :-: | -: | 
| pageNum | number | 1 | 当前页面脚标
| pageSize| number | 0 |每页最多容纳数据量 
| pageNumCount | number | 0 |数据总量
| isshowjump | boolean | true |是否显示快捷跳转
| isshowtip | boolean | true |是否显示数据详细说明
| fontcolor | string | #f60 |选中时的颜色，默认为桔色

##Output Events

| 事件名称 | 描述 
| - | :-: | -: | 
| firstpage() |跳转第一页
| endpage(event) |跳转到最后一页
| next() |下一页
| jumpto(event) |跳转某一页
| previous() |上一页
