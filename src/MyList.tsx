type myType = {} | null | undefined;

function MyList() {
  [null as myType].map(column => {
    column?.toLocaleString;
    const aa = column;
  });
}

export default MyList;