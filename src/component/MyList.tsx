import { ReactNode } from "react";

export interface ListThingProps {
  columnsCurrent: ReactNode[],
}

function MyList(props: ListThingProps) {
  const { columnsCurrent } = props;

  return (
    <div>
      {
        columnsCurrent.map((column, index) => {

          const brokenString = column?.toString();

          return (
            <div key={index}>
              {column}
            </div>
          )
        })
      }
    </div>
  );
}

export default MyList;