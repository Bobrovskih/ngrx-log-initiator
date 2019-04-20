# ngrx-log-initiator

Adding initiator class and method name to ngrx action.

![ngrx-log-initiator](https://user-images.githubusercontent.com/34475297/56460175-39af7880-63a7-11e9-9694-ba7a555a54cc.png)


## Install

`npm install ngrx-log-initiator`


## Usage

[Live example on stackblitz](https://stackblitz.com/edit/ngrx-log-initiator-demo)


```typescript
import { ngrxLogInitiator } from 'ngrx-log-initiator';

const effects = [
  AuthEffects,
  BookEffects,
  CollectionEffects,
];

if (!environment.production) {
  ngrxLogInitiator({ effects });
}
```
