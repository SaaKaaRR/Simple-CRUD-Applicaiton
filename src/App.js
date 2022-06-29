import Header from "./components/Header";
import Form from "./components/Form";
import Register from "./components/Register";
import Banner from "./components/imported/Banner";
import Appbar from "./components/imported/Appbar";

function App() {
  return (
    <div>
      <Appbar></Appbar>
      <Header />
      <Banner></Banner>

      <Form />
    </div>
  );
}

export default App;
