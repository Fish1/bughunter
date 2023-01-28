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

          /**
           * This variable will cause Promise.all() to not resolve its promises.
           * There are 3 main "solutions" that I have found:
           * 1. Comment out the brokenString variable
           * 2. Uncomment the FixPromiseError() function in src/pages/DummyPage.tsx
           * 3. Remove {column} from inside the div
           */
          const brokenString = column?.toString();

          return (
            <div key={index}>
              {/* remove {column} here to fix the Promise.all() error */}
              {column}
            </div>
          )
        })
      }
    </div>
  );
}

export default MyList;