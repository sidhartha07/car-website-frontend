import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Choose My Vehicle';

  // constructor(private getApi:HttpService) { }
  // ngOninit() {
  //   this.getApi.getPost().subscribe((res)=>{
  //     console.log(res)
  //   })


  // }
}
