import logo from "./logo.svg";
import "./App.css";
import Row from "./Components/Row";
import requests from "./request";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">

      <Navbar/>
      <Banner/>
      <Row
        title="NETFLIX "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="I più popolari su Netflix" fetchUrl={requests.fetchTrending} />


      <Row title="Film d'azione" fetchUrl={requests.fetchActionMovies} />

      <Row title="Film horror" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Documentari" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
