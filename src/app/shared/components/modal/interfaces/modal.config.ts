//interface implementa métodos e obriga a usar a shape(forma) que vai ser usada

import { TemplateRef } from "@angular/core";

//any: não sei q conteúdo do modal será exibido
export interface ModalConfig {
  templateRef: TemplateRef<any>; //o que eu vou exibir
  title: string; // titúlo
}
