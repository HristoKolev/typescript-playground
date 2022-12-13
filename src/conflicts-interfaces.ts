
// --------------------------------------------------------

interface Kitten1 {
    name: number;
}

interface Kitten2 {
    name: string;
}

// When using `extends`: won't compile and if you force it with //ts-ignore - the first one wins.

interface Kitten3 extends Kitten1, Kitten2 {
}

// const cat3: Kitten3 = { name: 'ddd'  };


// When using `&`: will compile but the conflicting properties will have the type `never`.
type Kitten4 = Kitten1 & Kitten2;

// const cat4: Kitten4 = { name: false };

// --------------------------------------------------------

interface C {
    val1: string;
}

interface D {
    val1: string;

    val2: string;
}

interface Dog1 {
    content: C;
}

// You can change the type of a property if the new type is a superset of the old type.

interface Dog2 extends Dog1 {
    content: D;
}

const dog2: Dog2 = { content: { val1: 'X', val2: 'Y' } };
console.log(dog2)

// --------------------------------------------------------
