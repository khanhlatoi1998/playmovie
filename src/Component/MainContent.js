import {useState, useEffect} from 'react' ; 
import axios from 'axios' ; 
import { NavLink} from 'react-router-dom' ;


const MainContent = () => {
	
	
	const [DataMovie , setDatamovie] = useState([]) ; 
	
	useEffect(() => {
		axios({
			method : 'GET' , 
			url : "http://localhost:3000/api/movies" , 
			data : null  
		})  
			.then(response => {	
				setDatamovie(response.data) ;
			})
			.catch(err => { console.log(err) ; }) ; 
	} , []) ; 
	
	const updateMovie = () => { 
		window.scrollTo({
			top : 0 , 
			behavior : 'smooth' , 
		}) ; 
	} ;
	
	return (
		<section className="MainContent" >
			<div className="container-MainContent" style={window.location.hash !== "#/" ? {width : "100%"} : {} }>
				<div className="block-MainContent" >
					<h1 > PHIM ĐỀ CỬ </h1>
					<div className="content-MainContent" >
						<div className="main-MainContent" >
							<div className="ground-MainContent"  >
							{
								DataMovie.map((item, index) => {
									return (
									<div className={window.location.hash === "#/" ? "block-singer-MainContent" : "block-movie"} key={item._id}>
										<div className="singer-MainContent" >
											<div className="product" >
												<img src={item.photo} alt="" />
												<p className="top-title-singer-MainContent" > Thuyết Minh </p>
												<p className="bottom-title-singer-MainContent" > {item.name}</p>
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
												<NavLink to={"detail" + item._id} onClick={updateMovie} >Xem Phim</NavLink>
											</div>
										</div>
									</div>
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

export default MainContent ; 