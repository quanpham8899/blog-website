import './App.css';
import Header from './Components/Header';
import { PostContainer, PostContainerSmall } from './Components/PostContainer';
import { CategoriesNavBar } from './Components/NavBar';
import { useState } from 'react';
import { Post } from "./Components/Post";
import { Footer } from './Components/Footer';

function App() {

  const relax = "https://www.ekhartyoga.com/media/image/articles/Laia_Bove_Mermaid-pose.jpg";

  const [featuresPost, setFeaturedPost] = useState([
    {category: "Relaxation",title: 'Beautiful', descriptions: "The sky is looking so beautiful to day", author: "Denis Dang", releaseDate: "08/09/2022", background: relax},
    {category: "Adventure", title: 'Sky diving', descriptions: "Let's rock the world", author: "Kent Tan", releaseDate: "01/09/2021", background: ""},
  ]);
  const [mostRecentPost, setMostRecentPost] = useState([...featuresPost, 
    {category: "Photography",title: 'Great image of mountain', descriptions: "The sky is looking so beautiful to day", author: "Raymond Montana", releaseDate: "11/19/2022", background: ""},
    {category: "Photography",title: 'Lion close up', descriptions: "A wild male lion", author: "Richard Romano", releaseDate: "01/25/2020", background: ""},
    {category: "Photography",title: 'Great image of mountain', descriptions: "The sky is looking so beautiful to day", author: "Raymond Montana", releaseDate: "03/23/2020", background: ""},
  ]);

  return (
    <>
      <Header />
      <CategoriesNavBar />
      <PostContainer
        PostTitle = { "Feature posts" }
        AltPost = { false }
        FeaturePosts = { featuresPost }
        id = "feature-post"
      />
      <PostContainer
        PostTitle = { "Most recent" }
        AltPost = { true }
        FeaturePosts = { mostRecentPost }
        id = "recent-post"
      />
      <Footer />
    </>
  );
}

export default App;