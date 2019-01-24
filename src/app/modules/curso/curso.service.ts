import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Curso }   from "src/app/shared/models/curso.model";
import { URL_API } from "src/app/core/api/api";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    headersInAtu: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
}

@Injectable({ providedIn: 'root' })
export class CursoService {

     constructor(private http: HttpClient) { }

     filtrar(params: FiltrarParams = {}): Observable<Curso[]> {
       
        let    _params = new HttpParams();
        Object.keys(params).forEach(function(key) {
            if(params[key] !== undefined && params[key] != null) {
                _params = _params.append(key, params[key]);
            }
        });
        
        return this.http.get<Curso[]>(`${URL_API}/cursos`, {
            params: _params,
            headers: httpOptions.headers
        });
     }

     obter(id: string): Observable<Curso> {
         return this.http.get<Curso>(`${URL_API}/cursos/${id}`, {
             headers: httpOptions.headers
         });
     }

     deletar(id: string): Observable<Curso> {
         return this.http.delete<Curso>(`${URL_API}/cursos/${id}`, {
             headers: httpOptions.headers
         });
     }

     inserir(params: InserirParams): Observable<Curso> {
         let _params = new HttpParams();
         Object.keys(params).forEach(function(key) {
             if(params[key] !== undefined && params[key] !== null) {
                 _params = _params.append(key, params[key]);
             }
         });

         return this.http.post<Curso>(`${URL_API}/cursos`, _params, {
            headers: httpOptions.headersInAtu 
         });
     }

     atualizar(params: AtualizarParams): Observable<Curso> {
         let _params = new HttpParams();
         Object.keys(params).forEach(function(key) {
             if(params[key] !==undefined && params[key] !== null) {
                 _params = _params.append(key, params[key]);
             }
         });

         return this.http.put<Curso>(`${URL_API}/cursos/${params.id}`, _params, {
             headers: httpOptions.headersInAtu
         });
     }

     atualizarPatch(params: AtualizarParams): Observable<Curso> {
         let _params = new HttpParams();
         Object.keys(params).forEach(function(key) {
             if(params[key] !== undefined && params[key] !== null) {
                 _params = _params.append(key, params[key]);
             }
         });

         return this.http.patch<Curso>(`${URL_API}/cursos/${params.id}`, _params, {
             headers: httpOptions.headersInAtu
         });
     }   
}

interface FiltrarParams {
    cursos?: string[] | string;
    status?: string[] | string;
    palavraChave?: string;
    pagina?: string;
    maximo?: string;
}

interface InserirParams {
    titulo: string;
    descricao?: string;
    url: string;
  }
  
 interface AtualizarParams {
    id: string;
    titulo?: string;
    descricao?: string;
    url?: string;
  }

