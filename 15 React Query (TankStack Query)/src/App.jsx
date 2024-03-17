const apiKey = "randomapikey";

import { useQuery } from "@tanstack/react-query";

const { data } = useQuery({
  queryKey: ["apikey"],
  queryFn: () => {
    // fetch api here
    fetch(apiKey).then((res) => res.json());
  },
});

function App() {
  return (
    <>
      <h1 className="bg-red-700 ">hello world</h1>
    </>
  );
}

export default App;
