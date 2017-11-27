import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Mitra';
  private routeSub:any;
  query: string;
  
  constructor(private route:ActivatedRoute){
      this.routeSub = route.params.subscribe(params=>{
          this.query = params['q'];
          console.log('query str :: ',this.query);
      })
  }

  ngOnInit() {
      
  }
  ngOnDestroy(){
      this.routeSub.unsubscribe()
  }  
}
