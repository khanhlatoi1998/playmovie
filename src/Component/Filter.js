import axios from 'axios' ; 
import {useState, useEffect} from 'react' ; 
import { NavLink} from 'react-router-dom' ;
import ChildrenContent from './ChildrenContent.js' ; 

const Filter = () => {
	
	const [FilterContent , setFilterContent] = useState([]) ; 
	
	useEffect(() => {
		axios({
			method : 'GET' , 
			url : "https://60d8372d6f13520017a681c8.mockapi.io/api/DataMovies" , 
			data : null  
		})  
			.then(response => {	
				setFilterContent(response.data) ; 
			})
			.catch(err => { console.log(err) ; }) ; 
	} , []) ;
	 	
	const scrollUp = () => {
		window.scrollTo({
			top : 150 , 
			behavior : 'smooth' , 
		}) ; 
	} ;
	
	return(
		<section className="MainContent" >
			<div className="container-MainContent" >
				<div className="block-MainContent" >
					<h1 > PHIM ĐỀ CỬ </h1>
					<div className="content-MainContent" >
						<div className="main-MainContent" >
							<div className="ground-MainContent"  >
							{
								FilterContent.map((item, index) => {
									return (
										item.Movies.link === window.location.hash
										?	<div className="block-singer-MainContent" key={index}>
												<div className="singer-MainContent" >
													<div className="product" >
														<img src={item.Movies.img} alt="" />
														<p className="top-title-singer-MainContent" > Thuyết Minh </p>
														<p className="bottom-title-singer-MainContent" > {item.Movies.tenphim}</p>
													</div>
													<div className="rotate-product">
														<p > Người Băng </p>
														<p > Đạo Diễn:<span>La Vĩnh Xương</span></p>
														<p > Diễn Viên:<span>La Vĩnh Xương</span></p>
														<p > Quốc Gia:<span>Trung Quốc</span></p>
														<p > Điểm IMDB:<span>8</span></p>
														<p > Ngày Phát Hành:<span>24 Tháng</span></p>
														<p > Thể Loại:<span>Phim Hành Động</span></p>
														<p > Thời Lượng:<span>104 Phút</span></p>
														<NavLink onClick={scrollUp} to={"detail" + item.id} >Xem Phim</NavLink>
													</div>
												</div>
											</div>
										: <div style={{display : "none"}} key={index}></div>
									)
								})
							}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	) ;
} ; 

export default Filter ;