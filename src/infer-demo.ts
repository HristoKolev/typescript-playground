
type ToElement<T> = T extends Array<infer TElement> ? TElement : T;

type X = ToElement<number>;

type Y = ToElement<number[]>;
