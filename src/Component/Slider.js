import { useState ,  } from 'react' ; 

const Slider = () => {
	
	const [moveslider , setmoveslider] = useState(0) ;
	
	const nextSlider = () => {
		if(moveslider < 80) {
			setmoveslider(moveslider => moveslider + 20) ; 
		}
		else { setmoveslider(0) ; }
	} ; 
	
	const prevSlider = () => {
		if(moveslider > 0) {
			setmoveslider(moveslider => moveslider - 20) ; 
		}
		else { setmoveslider(80) ; }
	} ;
	
	return (
		<section className="Slider">
			<div className="contains-slider" >
				<div className="block-slider" >
					<div className="main-Slider" >
						<div className="block-img-silder" style={{transition : "2s" , transform : `translate(-${moveslider}% , 0 )`}}>
							<img src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />
							<img src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />
							<img src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />
							<img src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />
							<img src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />			
						</div>
						<div className="content-slider" >
							<h1 > NGÔI ĐIỀN KỲ QUÁI </h1>
							<h2 > Ngay Ra Rap: Ngay 09 Thang 08 Nam 2021 </h2> 
						</div>
					</div>
					<span onClick={prevSlider} className="fas fa-chevron-left" id="chevron-left" > </span>
					<span onClick={nextSlider} className="fas fa-chevron-right" id="chevron-right"> </span>
				</div>	
				<div className="bxsilder" >
					<ul>
						<li ><span onClick={() => setmoveslider(0)} className="fas fa-circle" id={moveslider === 0 ? "active-bxsilder" : ""} ></span></li>
						<li ><span onClick={() => setmoveslider(20)} className="fas fa-circle" id={moveslider === 20 ? "active-bxsilder" : ""} ></span></li>
						<li ><span onClick={() => setmoveslider(40)} className="fas fa-circle" id={moveslider === 40 ? "active-bxsilder" : ""} ></span></li>
						<li ><span onClick={() => setmoveslider(60)} className="fas fa-circle" id={moveslider === 60 ? "active-bxsilder" : ""} ></span></li>
						<li ><span onClick={() => setmoveslider(80)} className="fas fa-circle" id={moveslider === 80 ? "active-bxsilder" : ""} ></span></li>
					</ul>
				</div>
			</div>
		</section>
	) ; 
	
} ; 

export default Slider ; 