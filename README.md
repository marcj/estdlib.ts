# estdlib.ts

Engineer's strict stdlib for TypeScript.

Almost all handy functions are in one package, so you need a compiler supporting three shaking.

```
npm install @marcj/estdlib
```

## Library @marcj/estdlib


```typescript
/**
 * Returns true if the given obj is a plain object, and no class instance.
 *
 * isPlainObject({}) === true
 * isPlainObject(new ClassXY) === false
 */
export declare function isPlainObject(obj: any): obj is object;
/**
 * Returns true if given obj is a function.
 */
export declare function isFunction(obj: any): obj is Function;
export declare function isObject(obj: any): obj is object;
export declare function isArray(obj: any): obj is any[];
export declare function isNull(obj: any): obj is null;
export declare function isUndefined(obj: any): obj is undefined;
/**
 * Checks if obj is not null and not undefined.
 */
export declare function isSet(obj: any): boolean;
export declare function isNumber(obj: any): obj is number;
export declare function isString(obj: any): obj is string;
export declare function arrayHasItem<T>(array: T[], item: T): boolean;
export declare function indexOf<T>(array: T[], item: T): number;
export declare function sleep(seconds: number): Promise<void>;
/**
 * Creates a shallow copy of given array.
 */
export declare function copy<T>(v: T[]): T[];
/**
 * Checks whether given array or object is empty (no keys)
 */
export declare function empty<T>(array: T[] | {
    [key: string]: T;
}): boolean;
/**
 * Returns the size of given array or object.
 */
export declare function size<T>(array: T[] | {
    [key: string]: T;
}): number;
/**
 * Returns the first key of a given object.
 */
export declare function firstKey(v: {
    [key: string]: any;
} | object): string | undefined;
/**
 * Returns the last key of a given object.
 */
export declare function lastKey(v: {
    [key: string]: any;
} | object): string | undefined;
/**
 * Returns the first value of given array or object.
 */
export declare function first<T>(v: {
    [key: string]: T;
} | T[]): T | undefined;
/**
 * Returns the last value of given array or object.
 */
export declare function last<T>(v: {
    [key: string]: T;
} | T[]): T | undefined;
/**
 * Clears the array so its empty. Returns the amount of removed items.
 */
export declare function arrayClear<T>(array: T[]): number;
/**
 * Removes on particular item by reference of an array.
 */
export declare function arrayRemoveItem<T>(array: T[], item: T): boolean;
/**
 * Returns the average of a number array.
 */
export declare function average(array: number[]): number;
export declare function prependObjectKeys(o: {
    [k: string]: any;
}, prependText: string): {
    [k: string]: any;
};
export declare function appendObject(origin: {
    [k: string]: any;
}, extend: {
    [k: string]: any;
}, prependKeyName?: string): void;
export declare function mergePromiseStack<T>(promise: Promise<T>, stack?: string): Promise<T>;
export declare function createStack(removeCallee?: boolean): string;
export declare function mergeStack(error: Error, stack: string): void;
/**
 * Returns the current time as seconds.
 */
export declare function time(): number;


/**
 * Iterator for each key of an array or object.
 *
 * for (const i of eachKey(['a', 'b']) {
 *    console.log(i); //0, 1
 * }
 */
export declare function eachKey<T>(object: ArrayLike<T>): IterableIterator<number>;
export declare function eachKey<T extends {
    [key: string]: any;
}, K extends keyof T>(object: T): IterableIterator<string>;
/**
 * Iterator for each value of an array or object.
 *
 * for (const v of each(['a', 'b']) {
 *    console.log(v); //a, b
 * }
 */
export declare function each<T>(object: {
    [s: string]: T;
} | ArrayLike<T>): IterableIterator<T>;
/**
 * Iterator for key value pair of an array or object.
 *
 * for (const [i, v] of eachPair(['a', 'b']) {
 *    console.log(i, v); //0 a, 1 b
 * }
 *
 * for (const [i, v] of eachPair({'foo': 'bar}) {
 *    console.log(i, v); //foo bar
 * }
 */
export declare function eachPair<T>(object: ArrayLike<T>): IterableIterator<[number, T]>;
export declare function eachPair<T>(object: {
    [s: string]: T;
}): IterableIterator<[string, T]>;

```


## Library @marcj/estdlib

```typescript
import { Observable, Subscription } from "rxjs";
export declare class AsyncSubscription {
    private cb;
    constructor(cb: () => Promise<void>);
    unsubscribe(): Promise<void>;
}
/**
 * RXJS subscription collection, to easily collection multiple subscriptions and unsubscribe all at once.
 */
export declare class Subscriptions {
    protected subscription: Subscription[];
    subscribe<T>(observable: Observable<T>, callback: (next: T) => any): void;
    add: Subscription;
    unsubscribe(): void;
}
export declare function subscriptionToPromise<T>(subscription: Subscription): Promise<void>;
export declare function awaitFirst<T>(o: Observable<T>): Promise<T>;
export declare function observableToPromise<T>(o: Observable<T>, next?: (data: T) => void): Promise<T>;
export declare function promiseToObservable<T>(o: () => Promise<T>): Observable<T>;

```
