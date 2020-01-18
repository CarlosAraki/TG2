import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG_TOKEN, APP_CONFIG, ApplicationConfig } from '../../app/app-config';
import { Platform } from 'ionic-angular';

/*
  Generated class for the LoginsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginsProvider {

  private basePath = '/apiTg2';

  constructor(
    public http: HttpClient,
    private _plataform: Platform,
    @Inject(APP_CONFIG_TOKEN) private config: ApplicationConfig
    ) 
    {
      if(this._plataform.is("cordova")){
        this.basePath =  config.apiEndpoint;
      }
  }

  public getAllNotExcludeLogins(){
    return this.http.get(this.basePath+'/rest/logins/all');
  }

  public addLogin(body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };  
    return this.http.post(this.basePath+'/rest/logins/load',body, httpOptions);
  }

  public excludeLogin(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };  
    return this.http.post(this.basePath+'/rest/logins/exclude',id,httpOptions);
  }

}
