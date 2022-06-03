import { OnInit, TemplateRef, ViewChild } from '@angular/core';

import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  title = 'a11y-p2';
  public firstName = 'Juliana';
  public modalRef: ModalRef;
  public info = false;
  public form : FormGroup;


  constructor(private modalService: ModalService, private formBuilder: FormBuilder){}


  public ngOnInit(): void {
    this.form = this.formBuilder.group ({
      firstName: ['Juliana', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info :[false]
    })
  }

  public show(): void{
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  public submit(): void {
    console.log(this.form.value);
    this.modalRef.close();
  }

}
