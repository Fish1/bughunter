import { ReactNode } from "react";
import MyList from "../component/MyList";

function HomePage() {

  async function myUnusedFunction() {
      const getDataFetch1 = Promise.resolve(["hello", "world"])
      const getDataFetch2 = Promise.resolve([{ id: 1 }, { id: 2 }])

      const [data1, data2] = await Promise.all([
        getDataFetch1, getDataFetch2 
      ]);

      const x = data2.map((data) => {
        return data.id.toString();
      });

      const y = data1.map((data) => {
        return data.toString();
      });

      return { x, y };
  }

  const myNodeArray: ReactNode[] = [
    <div>hello</div>,
    <div>world</div>,
    "hello",
    "sup",
  ]

  return (
    <div>
      <h1>Home Page</h1>
      <MyList columnsCurrent={myNodeArray}/>
    </div>
  );
}

export default HomePage;