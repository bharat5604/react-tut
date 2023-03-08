import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  // console.log("data", data);

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4 ">
        {data.map((item) => (
          <div className="p-4 rounded-md shadow-lg border" key={item?.id}>
            <h1 className="text-blue-600">{item?.title}</h1>
            <p>{item?.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
