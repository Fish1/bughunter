import User from "./User";

export interface GetData1Params {
  id: number;
}

const getData1 = async (params: GetData1Params) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await response.json();
  const result: User = data;
  return result;
}

export default getData1;