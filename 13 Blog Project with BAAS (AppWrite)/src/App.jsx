import NavBar from "./Components/Navbar/NavBar";
function App() {
  console.log(import.meta.env.VITE_APP_APPWRITE_URL);
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
