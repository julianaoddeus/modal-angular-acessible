import { animate, style, transition, trigger } from "@angular/animations";

export const  fade = trigger(// recebe o nome da trasição e as trasições que quer fazer
  'fade', //nome do gatilho
  [
    transition(
      ':enter',
      [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]
    ),// a transição que será aplicada qdo a animação está entrando no DOM
    transition(
      ':leave',
      [
        animate(100, style({opacity: 0}))

      ]
    )
  ]
);
