
export = _;
export as namespace _;

declare const _: _.LoDashStatic;
declare namespace _ {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- (This will be augmented)
    interface LoDashStatic {
        isEmptyByOld(value?: any): boolean;
    }
}
