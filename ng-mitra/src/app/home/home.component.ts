import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import  { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private req: any;
	homeImageList = [
		{image: 'assets/images/1.jpg', name : 'image1', slug:'video-1'},
		{image: 'assets/images/2.jpg', name : 'image2', slug:'video-2'},
		{image: 'assets/images/3.jpg', name : 'image3', slug:'video-3'},
		{image: 'assets/images/4.jpg', name : 'image4', slug:'video-4'},
		{image: 'assets/images/5.jpg', name : 'image5', slug:'video-5'},
		{image: 'assets/images/6.jpg', name : 'image6', slug:'video-6'}
	]

  // constructor(private http:Http, private sanitizer: DomSanitizer) { }
  constructor(private http:Http) { }

  ngOnInit() {
  	return this.homeImageList;
	// this.req = this.http,get(this.homeImageList).subscribe(dada=>{
	// 	console.log(data); 
	// })
  }

  // load video url
  // getEmbedUrl() {
  // 	return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/');
  // }
}
