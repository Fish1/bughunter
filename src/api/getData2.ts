import User from "./User";

export interface GetData2Params {
  id: number;
}

const getData2 = async (params: GetData2Params) => {
  console.log(params.id);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();
  const result: User[] = data.map(
    (bit: any) =>
      <User>{
        id: bit.id,
      }
  );
  return result;
}

export default getData2;