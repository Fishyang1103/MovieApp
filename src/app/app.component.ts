import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Movie';
  // 下面設定讓 Router 換頁時，能直接回到最上面
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
   this.router.events.subscribe((event) => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
   })
  }
}
