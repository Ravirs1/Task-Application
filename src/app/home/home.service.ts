
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlService } from '../shared-services/interceptor/url-services/url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly url: UrlService, private readonly http: HttpClient) { }


  getPosts(data): Observable<any> {
    let params = new HttpParams();
    params = params.append('page',data);
    return this.http.get<any>(this.url.GET_POST, { params });
  }
}