export interface ListThingProps {
  columns: React.ReactNode[]
}

function ListThing(props: ListThingProps) {
  const { columns } = props;
  return (
    <div>
      {
        columns.map((column, index) => {
          return (
            <div key={`${column?.toString()} ${index.toString()}`}>
              {column}
            </div>
          )
        })
      }
    </div>
  );
}

export default ListThing;