import { BodyInjectorService } from './../../../services/body-injector';
import { ModalComponent } from './../modal.component';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from "@angular/core";
import { ModalConfig } from "../interfaces/modal.config";
import { ModalRef } from '../models/modal-ref';

@Injectable()

export class ModalService{

  private componentFactory: ComponentFactory<ModalComponent>

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
    ){

    this.componentFactory =  componentFactoryResolver.resolveComponentFactory(ModalComponent)
  }

  public open(config: ModalConfig): ModalRef{
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    console.log('open called!')
    this.bodyInjector.stackBeforeAppRoot(componentRef)
    const modalref =  new ModalRef(componentRef);
    componentRef.instance.modalRef = modalref;
    return modalref;
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector)
  }

}




