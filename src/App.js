import "./App.css";
import Row from "./Row";
import Requests from "./Requests";
import Banner from "./Banner/Banner";
import "./index.css";
import Nav from "./Navbar/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
