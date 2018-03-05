/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
export class ObservableFormDirective {
    /**
     * @param {?} formGroupDirective
     */
    constructor(formGroupDirective) {
        this.formGroupDirective = formGroupDirective;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        if (val) {
            this.formGroupDirective.form.patchValue(val);
            this.formGroupDirective.form.markAsPristine();
        }
    }
}
ObservableFormDirective.decorators = [
    { type: Directive, args: [{ selector: '[observableForm]' },] },
];
/** @nocollapse */
ObservableFormDirective.ctorParameters = () => [
    { type: FormGroupDirective, },
];
ObservableFormDirective.propDecorators = {
    "data": [{ type: Input, args: ['observableForm',] },],
};
function ObservableFormDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ObservableFormDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ObservableFormDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ObservableFormDirective.propDecorators;
    /** @type {?} */
    ObservableFormDirective.prototype.formGroupDirective;
}
//# sourceMappingURL=directive.js.map