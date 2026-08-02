import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App(){
const skills = ["HTML","CSS","JavaScript","C","C++"];

return(

<div>
    <Header name="Srujal Patel" themeColor="#1abc9c"/>
    <div className="portfolio-grid">
        <About />
        <Skills title="my SKills" skills={skills} />
    </div>
    <Footer email="24cs076@charusat.edu.in"/>
</div>



);
}

export default App;