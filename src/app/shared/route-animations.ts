import { trigger, style, transition, animate } from '@angular/animations';

export const routeFadeStateTrigger = trigger( 'routeFadeState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(500)
    ]),
    /* transition(':leave', animate(300, style({
        opacity: 0
    }))) */
]);
