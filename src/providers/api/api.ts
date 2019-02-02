import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()

export class ApiProvider {
    url: string = 'http://tamleek-eg.com/tamlek/api/';
    constructor(public http: HttpClient) {
    }

    get(endpoint: string, params?: any,withoutUrl = false) {
        let httpParams: HttpParams = new HttpParams({});
        if (params) {
            for (let param in params) {
                httpParams = httpParams.set(param, params[param])
            }
        }
        return this.http.get<any>(this.url + endpoint, {params: httpParams})
    }

    post(endpoint: string, body?: any, params?: any, headers?: any ) {
        let httpParams: HttpParams = new HttpParams({});
        let httpHeaders: HttpHeaders = new HttpHeaders({});
        if (params) {
            for (let param in params) {
                httpParams = httpParams.set(param, params[param])
            }
        }
        if (httpHeaders) {
            for (let header in headers) {
                httpHeaders = httpHeaders.set(header, headers[header])
            }
        }
        return this.http.post<any>(this.url + endpoint, body, {params: httpParams, headers: httpHeaders})
    }

}
