import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Noticia } from './list'
import { tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ListService {

private readonly API = 'https://olinda-tech.top/angular-teste/noticia/listar'

constructor(private http: HttpClient) {}

list() {
   return this.http.get<Noticia[]>(this.API) 
    .pipe(
        tap(console.log)
    );
}

}