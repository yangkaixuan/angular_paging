import { Component ,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paging',
  template: `
  <ul class="pagination" style="margin-top: 50px;width:1000px;" *ngIf = "_pageNumCount != 0 ">
  <li *ngIf = "_pageNum != 1" class="page-item"><a class="page-link" (click) = "parfirstpage()">首页</a></li>
  <li *ngIf = "_pageNum != 1" class="page-item"><a class="page-link" (click)="parprevious()">上一页</a></li>


  <li class="page-item" *ngIf = "(pageNumshowcount-9) > 0 && (allpage-pageNumshowcount) < 1" class="licss" [style.color]="_pageNum == (pageNumshowcount-9)? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-9)? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-9)" class="page-link" >{{pageNumshowcount-9}}</a></li>
  <li class="page-item" *ngIf = "(pageNumshowcount-8) > 0 && (allpage-pageNumshowcount) < 2" class="licss" [style.color]="_pageNum == (pageNumshowcount-8)? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-8)? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-8)" class="page-link" >{{pageNumshowcount-8}}</a></li>
  <li class="page-item" *ngIf = "(pageNumshowcount-7) > 0 && (allpage-pageNumshowcount) < 3" class="licss" [style.color]="_pageNum == (pageNumshowcount-7)? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-7)? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-7)" class="page-link" >{{pageNumshowcount-7}}</a></li>
  <li class="page-item" *ngIf = "(pageNumshowcount-6) > 0 && (allpage-pageNumshowcount) < 4" class="licss" [style.color]="_pageNum == (pageNumshowcount-6)? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-6)? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-6)" class="page-link" >{{pageNumshowcount-6}}</a></li>
  <li class="page-item" *ngIf = "(pageNumshowcount-5) > 0 && (allpage-pageNumshowcount) < 5" class="licss" [style.color]="_pageNum == (pageNumshowcount-5)? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-5)? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-5)" class="page-link" >{{pageNumshowcount-5}}</a></li>
  <li class="page-item" *ngIf = "(pageNumshowcount-4) != 0" class="licss" [style.color]="_pageNum == (pageNumshowcount-4)? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-4)? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-4)" class="page-link" >{{pageNumshowcount-4}}</a></li>
  <li class="page-item" *ngIf = "((pageNumshowcount-3) < allpage || ((pageNumshowcount-3) == allpage))" class="licss" [style.color]="_pageNum == (pageNumshowcount-3) ? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-3) ? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-3)" class="page-link" >{{pageNumshowcount -3}}</a></li>
  <li class="page-item" *ngIf = "((pageNumshowcount-2) < allpage || ((pageNumshowcount-2) == allpage))" class="licss" [style.color]="_pageNum == (pageNumshowcount-2) ? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-2) ? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-2)"  class="page-link" >{{pageNumshowcount -2}}</a></li>
  <li class="page-item" *ngIf = "((pageNumshowcount-1) < allpage || ((pageNumshowcount-1) == allpage))" class="licss" [style.color]="_pageNum == (pageNumshowcount-1) ? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount-1) ? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount-1)"  class="page-link" >{{pageNumshowcount-1}}</a></li>
  <li class="page-item" *ngIf = "(pageNumshowcount < allpage || pageNumshowcount == allpage)" class="licss" [style.color]="_pageNum == pageNumshowcount ? fontcolor: ''" [style.font-weight]="_pageNum == pageNumshowcount  ? 'bold': ''"><a class="page-link" a (click) = "parjumpto(pageNumshowcount)"  >{{pageNumshowcount}}</a></li>
  <li class="page-item" *ngIf = "((pageNumshowcount+1) < allpage || ((pageNumshowcount+1) == allpage))" class="licss" [style.color]="_pageNum == (pageNumshowcount+1) ? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount+1) ? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount+1)" class="page-link" >{{pageNumshowcount+1}}</a></li>
  <li class="page-item" *ngIf = "((pageNumshowcount+2) < allpage || ((pageNumshowcount+2) == allpage))" class="licss" [style.color]="_pageNum == (pageNumshowcount+2) ? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount+2) ? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount+2)"  class="page-link" >{{pageNumshowcount+2}}</a></li>
  <li class="page-item" *ngIf = "((pageNumshowcount+3) < allpage || ((pageNumshowcount+3) == allpage))" class="licss" [style.color]="_pageNum == (pageNumshowcount+3) ? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount+3) ? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount+3)"  class="page-link" >{{pageNumshowcount+3}}</a></li>
  <li class="page-item" *ngIf = "((pageNumshowcount+4) < allpage || ((pageNumshowcount+4) == allpage))" class="licss" [style.color]="_pageNum == (pageNumshowcount+4) ? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount+4) ? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount+4)"  class="page-link" >{{pageNumshowcount+4}}</a></li>
  <li class="page-item" *ngIf = "((pageNumshowcount+5) < allpage || ((pageNumshowcount+5) == allpage))"  class="licss" [style.color]="_pageNum == (pageNumshowcount+5) ? fontcolor: ''" [style.font-weight]="_pageNum == (pageNumshowcount+5) ? 'bold': ''"><a (click) = "parjumpto(pageNumshowcount+5)"  class="page-link" >{{pageNumshowcount+5}}</a></li>
  <li class="page-item" *ngIf = "_pageNum != allpage" ><a class="page-link" (click)="parnext()" >下一页</a></li>
  <li class="page-item" *ngIf = "_pageNum != allpage" ><a class="page-link" (click) = "parendpage()">末页</a></li>
  <li style = "margin-left: 41px;"class="page-item" *ngIf = 'isshowjump'> 跳转 <input [(ngModel)]="pageid"  pageid style="width: 48px;height: 100%;border: 1px solid #e5e5e5;" type="number">页面</li>
  <li class="page-item"><a class="page-link" *ngIf = "pageid>0 && (pageid<allpage+1) " (click) = "parjumpto(pageid)" >确定</a></li> 
</ul>
<span *ngIf = "_pageNumCount != 0 && isshowtip"  style="margin-top: 50px;">共<span [style.color]="'true' ? fontcolor:''">{{_pageNumCount}}</span>
条数据，显示第<span [style.color]="'true' ? fontcolor:''">{{pageNumBegin}}</span>至  
<span *ngIf = "_pageNumCount != _pageNum" [style.color]="'true' ? fontcolor:''">{{pageNumEnd}}</span> 
<span *ngIf = "_pageNumCount == _pageNum" [style.color]="'true' ? fontcolor:''">{{remainder}}</span>项记录
</span>
<span *ngIf = "_pageNumCount == 0" style="font-size: 19px;color: darkgray;">暂无数据</span>
`,
styles: [`
.licss{
  width: 40px;
  }
`]
})
export class PagingComponent  {

  private _pageNum :number;
  private _pageSize :number;
  private pageNumshowcount :number;
  private allpage : number;
  private pageid : number;
  private _pageNumCount :number;
  private pageNumBegin :number;
  private pageNumEnd :number;
  private remainder :number;
  @Output() firstpage = new EventEmitter<Number>();
  @Output() jumpto = new EventEmitter<Number>();
  @Output() previous = new EventEmitter<Number>();
  @Output() next = new EventEmitter<Number>();
  @Output() endpage = new EventEmitter<Number>();
  @Input()  isshowtip = true;
  @Input()  isshowjump = true;
  @Input()  fontcolor = "#f60";
  @Input() 
  set pageSize(pageSize:number){
    this._pageSize = pageSize;
  }
  get getpageSize(): number {return  this._pageSize; }

  @Input() 
  set pageNumCount(pageNumCount:number){
    this._pageNumCount = pageNumCount; 
    this.remainder = (pageNumCount%this._pageSize);
    this.allpage = Math.ceil(pageNumCount/this._pageSize);
  }
  get getpageNumCount(): number {return  this._pageNumCount; }
  @Input() 
  set pageNum(pageNum: number) {
    this.pageNumBegin=(pageNum-1)*this._pageSize+1;
    if(pageNum == this.allpage){
      this.pageNumEnd = this._pageNumCount;
    }else{
      this.pageNumEnd = pageNum*this._pageSize;
    }    
    this._pageNum = pageNum;
    if(pageNum < 5){  
      this.pageNumshowcount = 5;      
    }else if(pageNum == 5){
      this.pageNumshowcount = 5;  
    }else{
      this.pageNumshowcount = pageNum ;
    }
  }

  get getpageNum(): number { return this._pageNum; }

  constructor() { 
  }

  parfirstpage(){
    this.firstpage.emit();
  }
  parprevious(){
    this.previous.emit();
  }
  parnext(){
    this.next.emit();
  }
  parendpage(){
    this.endpage.emit(this.allpage);
  }
  parjumpto(item :any){
    this.jumpto.emit(item);
  }
  

}
