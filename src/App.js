import './App.css';
import Row from './Row';
import requests from "./request";
import instance from './baseUrl';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav></Nav>
      </header>

    <Banner fetchUrl={requests.fetchTrending}></Banner>

      <Row isLargeRow={true} title='NetFlix Orginals' fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title='NetFlix Trending' fetchUrl={requests.fetchTrending}></Row>
      <Row title='NetFlix Top Rated' fetchUrl={requests.fetchTopRated}></Row>
      <Row title='NetFlix Action Movies' fetchUrl={requests.fetchActionMovies}></Row>
      <Row title='NetFlix Comedy Movies' fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title='NetFlix Horror Movies' fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title='NetFlix Romance Movies' fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title='NetFlix Documentaries' fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
