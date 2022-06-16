import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataSve:ApiService) { }

  dataResults: any[]=[];


  orginalData : any[]=[];

  data:any[] =[];


// 一開始網頁就要出現的資料
  ngOnInit(): void {
    this.dataSve.discoverMovieReleaseDate().subscribe(data => {
      console.log("API回傳的資料",data)

      // 把 API 傳回來的資料存到 dataResults
      this.dataResults = Object.values(data)[1]
      // 為了做關鍵字搜尋，先拷貝一份dataResults
      this.orginalData = Array.from(this.dataResults)
      console.log("根據日期排序的",this.dataResults)
      console.log("123",this.orginalData)
    })
  }

  searchMovie(keyword:string){
      this.dataResults = this.orginalData.filter(item => item.title.indexOf(keyword) !== -1);
  }

}
