import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
    state('valid', style({
        backgroundColor: 'lightgreen',
        borderColor: 'green'
    })),
    state('invalid', style({
        backgroundColor: 'grey',
        borderColor: 'darkgrey',
    })),
    transition('invalid => valid', [
        group([
            animate(100, style({
                transform: 'scale(1.1)'
            })),
            animate(200, style({
                backgroundColor: 'lightgreen'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ]),
    transition('valid => invalid', [
        group([
            animate(100, style({
                transform: 'scale(0.9)'
            })),
            animate(200, style({
                backgroundColor: 'grey'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ])
]);
