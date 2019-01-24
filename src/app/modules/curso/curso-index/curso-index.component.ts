import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CursoService } from '../curso.service';
import { Curso } from 'src/app/shared/models/curso.model';
import { Observable, from, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-curso-index',
  templateUrl: './curso-index.component.html',
  styleUrls: ['./curso-index.component.css'],
  providers: [ CursoService ]
})
export class CursoIndexComponent implements OnInit, OnDestroy {  

  constructor(private cursoService: CursoService,
              private formBuilder: FormBuilder) { }

  cursos$: Observable<Curso[]>;
  buscaForm: FormGroup;              

  submit(): void {
    const palavraChave: string = this.buscaForm.value.palavraChave;    
    this.cursos$ = this.cursoService.filtrar({
      palavraChave: palavraChave,
      status: ['Ativo']
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return from([]);
      })
    );
    console.log(this.cursos$);
  }

  ngOnInit() {
       
       this.buscaForm = this.formBuilder.group({
         palavraChave: [null]
       });

       this.buscaForm.controls.palavraChave.valueChanges.pipe(
         debounceTime(600),
         distinctUntilChanged(),
         switchMap((term: string) => { this.submit(); return of(); })
       ).subscribe();

       this.submit();
  }

  ngOnDestroy(): void {
    
  }

}
