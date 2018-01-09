import { Component } from '@angular/core';
import { MasterService } from './master-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myFirstReactiveForm: FormGroup;
  // myFirstReactiveForm: FormGroup;

  constructor(private fb: FormBuilder,private masters: MasterService){  }
  ngOnInit(){
     this.initForm();
  }
  initForm(){
    this.myFirstReactiveForm = this.fb.group({

     email: ['', [
       Validators.required, Validators.email
      ]
    ],
    pass: ['', [
      Validators.required, Validators.pattern(/[A-z0-9]{3,}/)
    ]]
  })
}
  onSubmit() {
     const controls = this.myFirstReactiveForm.controls;
     /** Проверяем форму на валидность */
     if (this.myFirstReactiveForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
        Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
       /** Прерываем выполнение метода*/
       return;
     }


   let mast = this.masters.getMaster(this.myFirstReactiveForm.value.email,this.myFirstReactiveForm.value.pass);
   if(!mast) {
     alert("Incorrect Email or Password");
   }
   else {
     console.log(mast)
   }
 }
}
