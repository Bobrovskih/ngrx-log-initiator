import { OnRunEffects } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Options } from './interfaces';

export let INITIATOR = Symbol('initiator');

export let ngrxOnRunEffects: OnRunEffects['ngrxOnRunEffects'] = function (notification$) {
    return notification$.pipe(
        tap((event) => {
            const { value } = event.notification;
            if (value) {
                value[INITIATOR] = `${event.sourceName}.${event.propertyName}`;
            }
        }),
    );
};

export let ngrxLogInitiator = (options: Options) => {
    options.effects.forEach((effect) => effect.prototype.ngrxOnRunEffects = ngrxOnRunEffects);
};
