import { Component , OnInit} from '@angular/core';
import { UserService } from './services/user.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  userList : any;
  constructor(private _userService: UserService) {
   }


  ngOnInit() {
    this.getUsers();
  }

   getUsers() {
     this._userService.getUsers().subscribe((res: any)=> {
      // console.log('get user list.............', res);
       if(res && res.length > 0) {
         this.userList = res;
       }}, (err) => {
        console.log("error >...............", err);
        });
   }

   DownloadCsv() {
     console.log('need to implemenmt it ');

     this._userService.getUserCSVfile().subscribe((res: any)=> {
      console.log('get user list.............', res);
      if(res) {
        var blob = new Blob([res._body], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
         // window.open(url);
          let dwldLink = document.createElement("a");
          dwldLink.setAttribute("href", url);
          dwldLink.setAttribute("download", "users.csv");
          dwldLink.style.visibility = "hidden";
          document.body.appendChild(dwldLink);
          dwldLink.click();
          document.body.removeChild(dwldLink);
      }}, (err) => {
       console.log("error >...............", err);
       });
   }
 
}
