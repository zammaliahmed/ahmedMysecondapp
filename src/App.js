
import './App.css';
import ahmed2 from './images/cant.png' ;
import ahmed from './videos/movie.mp4' ;

function App() {
  return (
    <div className="App">
      <div className = "classone" >

<h1 className="classtwo"><b>Confidence</b></h1>

<br/>
<br/>

<img src="/images/cant.png" alt="erreur" style={{height :"400px", width :"600px" }} />

 <br/>
 <br/>
<img src={ahmed2} alt="erreur" style={{height :"400px", width :"600px" }}  />
<br/>

 <video className= "classthree" src={ahmed}   type="video/mp4" controls = "controls">

</video>

       </div> 
       </div>
  );
}

export default App;
