import ListThing from "../component/ListThing";

function HomePage() {

  const myFunc = async () => {
      const getDataFetch1 = Promise.resolve(["hello", "world"])
      const getDataFetch2 = Promise.resolve([{ id: 1 }, { id: 2 }])

      const [data1, data2] = await Promise.all([
        getDataFetch1, getDataFetch2 
      ]);

      const x: string[] = data2.map((data) => {
        return data.id.toString();
      });

      const y: string[] = data1.map((data) => {
        return data.toString();
      });

      return { x, y };
  }

  const mylist: React.ReactNode[] = [
    <div>hello</div>,
    <div>world</div>,
    "hello",
    "sup",
  ]

  return (
    <div>
      <h1>Home Page</h1>
      <ListThing columns={mylist} />
    </div>
  );
}

export default HomePage;