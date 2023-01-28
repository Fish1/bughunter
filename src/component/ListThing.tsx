export interface ListThingProps {
  columns: React.ReactNode[]
}

function ListThing(props: ListThingProps) {
  const { columns } = props;

  return (
    <div>
      {
        columns.map((column, index) => {

          const badReactNodeString = column?.toString();

          return (
            <div key={index.toString()}>
              {column}
            </div>
          )
        })
      }
    </div>
  );
}

export default ListThing;