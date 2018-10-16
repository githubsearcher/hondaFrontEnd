import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

@Injectable()
export class UserService {
    private baseUrl = environment.apiUrl;
    private appUrl = environment.appUrl;

    constructor(private _http: Http) { }

    // // create user
    // createUser(data) {
    //    const headers1 = new Headers({ 'Content-Type': 'application/json' });
    //    const options = new RequestOptions({ headers: headers1 });                  
    //    return this._http.post(this.baseUrl + '/users', data, options).map((res: any) => {
    //         return res.json();
    //     });

    // }

    // // update user
    // updateUser(data, userId) {
    //     const headers1 = new Headers({ 'Content-Type': 'application/json' });
    //     const options = new RequestOptions({ headers: headers1 });                  
    //     return this._http.patch(this.baseUrl + '/users/' + userId, data, options).map((res: any) => {
    //          return res.json();
    //      });
    // }

    // get users
    getUsers() {
        return this._http.get(this.baseUrl + '/user').map((res: any) => {
            console.log('service>.............', res.json());
            return res.json();
        }); 
    }

    getUserCSVfile() {
        return this._http.get(this.baseUrl + '/user/csvFile').map((res: any) => {
           //  console.log('service>.............', res.json());
            return res;
        }); 
    }

}