# Topics

* how does `infer` work?
  * Get the type parameter(s) of a generic type.
* how are conflicts handled?
  * What's the difference between conflict handling between interfaces and types?   
  * What happens when //@ts-ignore is used
* how is `Array<T>` special?
  * It's an alias for `T[]` but can be used in places where generic declaration is required.
* how is `unknown` special?
  * `unknown` is the type-safe counterpart of `any`.
  * Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing.
  * No operations are permitted on an unknown without first asserting or narrowing to a more specific type.
* how is `any` special?
  * disables type checking entirely.
* how is `never` special?
  * `never` is an empty union. 
  * the `never` type is used for union members that conflict between variants.
  * a binding that has the `never` type cannot be assigned a value.
  * a function that returns `never` would never return. It can throw an exception tho.
  * can be used to differentiate between types: 
  ```ts
    type VariantA = {
      a: string
      b?: never
    }
    
    type VariantB = {
    b: number
    a?: never
    }
    
    declare function fn(arg: VariantA | VariantB): void
    
    
    const input = {a: 'foo', b: 123 }
    fn(input) // ❌ Types of property 'a' are incompatible 
  ```
