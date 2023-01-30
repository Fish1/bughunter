import React from 'react'
import ReactDOM from 'react-dom';

async function myUnusedFunction() {
  const fetch1 = Promise.resolve(['hello', 'world']);
  const [data1] = await Promise.all([fetch1]);
  const y = data1.map((data) => {
    return data.toString();
  });
  return { y };
}

ReactDOM.render(
  <React.StrictMode>
    <div>
      hello world
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
