The brokenString variable inside /src/component/MyList.tsx causes the TSC type checker to fail
resolving any Promise.all function calls.

Line 14 and 18 in /src/pages/HomePage.tsx are examples of this error.

```Property 'map' does not exist on type 'Promise<{ id: number; }[]>'.ts(2339)```

I don't see how it is possible that await Promise.all() returns a Promise, but I have found seemingly unrelated "solutions" that make this error go away.

There are 3 main "solutions" to this problem:
1. Comment out the brokenString variable in /src/component/MyList.tsx
2. Uncomment the FixPromiseError() function in src/pages/DummyPage.tsx
3. Remove {column} from inside the div in /src/component/MyList.tsx

In the original codebase I had this issue in, the VSCode type checker failed at detecting the "error" and didn't mark it with red lines...

But now in this minimal project, it seems to have an easier time finding it.


