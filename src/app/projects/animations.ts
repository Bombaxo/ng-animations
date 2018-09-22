import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const markedTrigger = trigger( 'markedState', [
    state('default', style({
        border: '1px solid black',
        backgroundColor: 'transparent'
    })),
    state('marked', style({
        border: '2px solid blue',
        backgroundColor: '#caeff9',
        padding: '19px'
    })),
    transition('default => marked', [
        style({
            border: '2px solid black',
            padding: '19px'
        }),
        animate('300ms ease-out', style({
            transform: 'scale(1.05)'
        })),
        animate(200)
    ]),
    transition('marked <=> default', [
        style({
            border: '1px solid black',
            padding: '20px'
        }),
        animate('300ms ease-out')
    ])
]);

export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        animate('500ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateX(-60%)',
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.3
            }),
            style({
                opacity: 1,
                transform: 'translateX(0%)',
                offset: 1
            }),
        ]))
    ]),
    transition(':leave', [
        animate('500ms ease-in', keyframes([
            style({
                opacity: 1,
                transform: 'translateX(0%)'
            }),
            style({
                opacity: 1,
                transform: 'translateX(-5%)'
            }),
            style({
                opacity: 1,
                transform: 'translateX(100%)'
            }),
        ]))
    ]),
    transition('slideUp => slideDown', [
        style({
            transform: 'translateY(-100%)',
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(0%)'
        }))
    ]),
    transition('slideDown => slideUp', [
        style({
            transform: 'translateY(0%)',
        }),
        animate('300ms ease-in', style({
            transform: 'translateY(-100%)'
        }))
    ])
]);


export const slideStateTrigger = trigger('slideState', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)'
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        style({
            transform: 'translateY(0%)'
        }),
        animate('300ms ease-in', style({
            transform: 'translateY(-100%)'
        }))
    ])
]);
