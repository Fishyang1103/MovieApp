import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  casts: any = [];
  overviews: string = '';
  popularities: number = 0;
  original_title: string = '';
  movieImg:any;

  constructor(private apiService: ApiService
    ,private router:ActivatedRoute) { {
  }}

  ngOnInit(): void {
    let id =this.router.snapshot.paramMap.get('id')
    // 這邊把id轉型，因為要傳數字出去
      this.getCast(Number(id));
      this.getOverview(Number(id));
  }

  getCast(id:number) {
    this.apiService.MovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
      console.log("演員角色",this.casts)
    });
  }

  getOverview(id:number) {
    this.apiService.MovieOverview(id).subscribe((res:any) => {
      this.overviews = res.overview;
      this.popularities = res.popularity;
      this.original_title = res.original_title;
      this.movieImg = res.poster_path
      console.log("電影介紹",this.overviews)
      console.log("電影熱門",this.popularities)
      console.log("電影名稱",this.original_title)
      console.log("電影圖片",this.movieImg)
    })
  }
}