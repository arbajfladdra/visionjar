import React from 'react'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
//Styles
import './App.css';
import './responsive.css';
//Components
import ThemeChanger from './components/HeroPage/ThemeChanger';
import Header from './components/Header/Header';
import HeroPage from './components/HeroPage';
import Services from './components/Services';
import Footer from './components/Footer/Footer';
import About from './components/About';
import Articles from './components/Articles';
// import Error from './components/Error';
import ArticlePage from './components/ArticlePage';
import ArticleDetails from './components/ArticleDetails';
import CreateArticle from './components/CreateArticle';

import { Route, Switch, Redirect } from 'react-router-dom';

import Register from './components/Register';

import CreateAccount from './components/Register/CreateAccount';

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(
    () => {
      setTimeout(() => {window.scrollTo({
        top: 0,
  behavior: 'smooth',
      });},100)
      
    },[pathname]
  );
  return null;
}

function App() {
  const location = useLocation()
//   var scroll = new SmoothScroll('body', {
//     speed: 100,
//     speedAsDuration: true
// });

window.addEventListener(
  'scroll' ,
  ()=>{
    // console.log(window);
  }
)
  return (
    <div className="react-app">
            <ThemeChanger />
      
      <ScrollToTop />
      <Header />
      <AnimatePresence>
        <Switch location = {location} key = {location.key}>
          <Route exact path="/" component = {HeroPage} />
          <Route path="/services" component = {Services} />
          <Route path="/about" component = {About} />
         
          <Route exact path="/articles" component = {Articles} />
            <Route path="/articles/articlepage" component = {ArticlePage} />
            <Route path="/articles/create" component = {CreateArticle} />
            <Route path="/articles/:id" component = {ArticleDetails} />

          <Route exact path="/register" component = {Register} />
          <Route path="/register/create_account" component = {CreateAccount} />
          {/* <Route  component = {Error} /> */}
          <Redirect  to = "/"  />
        </Switch>
        </AnimatePresence>
        <Footer /> 
    


    </div>
  );
}

export default App;
