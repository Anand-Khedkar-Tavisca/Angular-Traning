import {AbstractControl} from '@angular/forms';

export class EvenValidator{
  static checkEven(ctrl: AbstractControl): any{
    const val: number  = parseInt(ctrl.value);
    if (val % 2 === 0) {
       return null;
    } else {
      return {noteven: true};
    }
 }
}
