import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateService } from '../publish/publish.service'

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})

export class PublishComponent implements OnInit {

  // Id Validator
  idFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(2)
 ])

 statusFormControl = new FormControl('', [
  Validators.required,
  Validators.maxLength(3)
])

autorFormControl = new FormControl('', [
  Validators.required,
 
])

tituloFormControl = new FormControl('', [
  Validators.required,

])
descricaoFormControl = new FormControl('', [
  Validators.required,

])


  form: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder, private service: CreateService) { }

  ngOnInit() {

    this.form = this.fb.group({
       id: [null, Validators.required],
       titulo: [null],
       descricao: [null,  Validators.required],
       autor: [null,  Validators.required],
       status: [null,  Validators.required]
    });
  }
   
  onSubmit(){
    this.submitted = true
    console.log(this.form.value, 'onSubmit')
      this.service.create(this.form.value).subscribe(
        success => console.log('error'),
        error => console.log(error),
        () => console.log('request ok')

      )
  }
  onCancel(){
    this.submitted = false
    this.form.reset()
  }
}
