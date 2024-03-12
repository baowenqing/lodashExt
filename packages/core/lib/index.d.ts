import * as _ from 'lodash';
export = _;

declare module _{
    function isEmptyByOld(): boolean;
}

// export as namespace _;
// declare const _: _.LoDashStatic;
//
// declare namespace _ {
//
//     interface LoDashStatic {
//         isEmptyByOld(value?: any): boolean;
//     }
// }
