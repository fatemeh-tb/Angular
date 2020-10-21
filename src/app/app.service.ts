import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    
}
}