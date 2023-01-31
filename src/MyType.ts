type MyType = {} | null | undefined;

const myVar: MyType = null as MyType;

// you need the following two lines together, to make it work
myVar?.toLocaleString;
const x = myVar;