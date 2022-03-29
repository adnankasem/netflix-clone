import './App.css';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';
import './normalize.css'
import { useState, useEffect } from 'react';

function App() {
  const [comedy, setComedy] = useState([])
  const [action, setAction] = useState([])
  const [documentaries, setDocumentaries] = useState([])
  const [family, setFamily] = useState([])
  const [scifi, setScifi] = useState([])

  useEffect(() => {

    const fetchAction = async () => {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7cc7532e5362e96b72a1169cbf870b93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate')
      const data = await result.json();
      console.log('data.results in fetch action', data.results)
      setAction(data.results)
      
    }
    fetchAction();

    const fetchComedy = async () => {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7cc7532e5362e96b72a1169cbf870b93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate')
      const data = await result.json();
      setComedy(data.results)
      
    }
    fetchComedy();

    const fetchDocumentaries = async () => {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7cc7532e5362e96b72a1169cbf870b93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_genres=99&with_watch_monetization_types=flatrate')
      const data = await result.json();
      console.log('data.results in fetch documentaries', data.results)
      setDocumentaries(data.results)
      
    }
    fetchDocumentaries();

    const fetchFamily = async () => {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7cc7532e5362e96b72a1169cbf870b93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=10751&with_watch_monetization_types=flatrate')
      const data = await result.json();
      console.log('data.results in fetch family', data.results)
      setFamily(data.results)
      
    }
    fetchFamily();

    const fetchScifi = async () => {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7cc7532e5362e96b72a1169cbf870b93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate')
      const data = await result.json();
      console.log('data.results in fetch scifi', data.results)
      setScifi(data.results)
      
    }
    fetchScifi();

   

    const fetchGenres = async () => {
      const result = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7cc7532e5362e96b72a1169cbf870b93&language=en-US')
      const data = await result.json();
      console.log('genres ', data)
      
    }
    fetchGenres();
    
    
    
  }, [])

  

  return (
    <div className="App">
      <Billboard />
      <Navigation />
      <Titles scifi={scifi} family={family} action={action} comedy={comedy} documentaries={documentaries} />
      <Footer />
    </div>
  );
}

export default App;
