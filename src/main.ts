async function myUnusedFunction() {
  const fetch1 = Promise.resolve(['hello', 'world']);
  const [data1] = await Promise.all([fetch1]);
  data1.length;
}