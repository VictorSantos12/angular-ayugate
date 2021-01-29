import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class CreateService {

private readonly API = 'https://olinda-tech.top/angular-teste/noticia/cadastro'

constructor(private http: HttpClient) {}

create(noticia) {
    return this.http.post(this.API, noticia ).pipe(take(1));
}

}