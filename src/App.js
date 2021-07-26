import './App.scss';
import Header from './Component/Header.js' ; 
import Slider from './Component/Slider.js' ;
import ContentUpdate from './Component/ContentUpdate.js' ;
import MainContent from './Component/MainContent.js' ;  
import Footer from './Component/Footer.js' ;
import LogIn from './Component/LogIn.js' ;  
import SigUp from './Component/SigUp.js' ; 
import { HashRouter as Router , Route} from 'react-router-dom' ;
import ChildrenContent from './Component/ChildrenContent.js' ; 
import Filter from './Component/Filter.js' ; 
import axios from 'axios' ; 
import {useEffect, useState} from 'react' ; 

function App() {
	
	const [getDataLink, setgetDateLink] = useState([]) ; 
	
	useEffect(() => {
		axios({
			method : 'GET' , 
			url : "https://60d8372d6f13520017a681c8.mockapi.io/api/DataMovies" , 
			data : null  
		})  
			.then(response => {	
				setgetDateLink(response.data) ; 
			})
			.catch(err => { console.log(err) ; }) ; 
	} , []) ; 
	
  return (
	<Router>
		<div className="App">
			<Route path="/" component={Header} />
			<Route path="/" exact component={Slider} />
			
			{
				getDataLink.map((item, index) => {
					return(
						<Route path={"/detail" + item.id} component={() => ChildrenContent(item)} key={index}/>
					)
				})
			}
			{
				getDataLink.map((item, index) => {
					return(
						<Route path={"/filter" + item.id} component={Filter} key={index}/>
					)
				})
			}
			<Route path="/dangnhap" component={LogIn} />
			<Route path="/dangky" component={SigUp} />
			<Route path="/" exact component={ContentUpdate} />
			<Route path="/" exact component={MainContent} />
			<Route path="/" component={Footer} />
			
		</div>
	</Router>
  );
}

export default App;
