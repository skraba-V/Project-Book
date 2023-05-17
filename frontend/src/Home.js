import "./App.scss";
import Hero from "./components/hero";
import Grid from "./components/grid";
import Info from "./components/info"; 
import Logos from "./components/logos";
import Map from "./components/map";
import Footer from "./components/footer";
import Top from "./components/top"; 

function Home() {
	return (
		<div className='hero'>
			<Hero />
			<Grid />
			<Info title="Unser Stempelshop" source="/assets/bookshelf.jpg" position="right" margin="10px" button="zum Shop" />
			<Info title="Uber Uns" source="/assets/gamla.jpg" position="left" margin="100px" button="mehr erfahren" />
			<Logos />
			<Map /> 
			<Top />
      		<Footer />
		</div>
	);
}

export default Home;
