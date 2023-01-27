import { useQuery } from "react-query";
import getData1 from "../api/getData1";
import getData2 from "../api/getData2";
import ListThing from "../component/ListThing";


function HomePage() {

  const dummyQuery = useQuery(
    "dummy",
    async () => {
      console.log("QUERY")
      const getData1Fetch = getData1({
        id: 5,
      });
      const getData2Fetch = getData2({
        id: 6,
      });
      console.log("SENT");

      const [data1, data2] = await Promise.all([
        getData1Fetch, getData2Fetch
      ]);

      console.log("RESOLVED")
      const x: string[] = data2.map((data) => {
        return data.id.toString();
      })
      console.log(data1, x);
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  )

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