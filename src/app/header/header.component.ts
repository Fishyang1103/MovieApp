import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // 關鍵字搜尋按鈕產生的一個事件
  @Output() search = new EventEmitter<string>();
  keyword : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  doSearch(event: MouseEvent) {
    // this.上面Output的search發射keyword出去
    this.search.emit(this.keyword)
    console.log(event)
  }
}
