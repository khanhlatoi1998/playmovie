import MainContent from './MainContent.js';
import { useState, useEffect, useRef } from 'react';

const ChildrenContent = (props) => {

	const [styleStar, setstyleStar] = useState(0);
	const [playMovie, setPlayMovie] = useState(false);


	const updateStar = (e) => {
		setstyleStar(e);
	}

	var domChildrenContent = document.querySelector(".container-ChildrenContent");
	var domHeader = document.querySelector(".header");
	var domBody = document.getElementById("root");
	var player = document.querySelector(".player");
	useEffect(() => {
		if (playMovie === true) {
			domChildrenContent.style.opacity = '10%';
			domHeader.style.opacity = '10%';
			domBody.style.position = "fixed";
		}
		return function () {
			if (playMovie === true) {
				domBody.style.position = "static";
				domChildrenContent.style.opacity = '100%';
				domHeader.style.opacity = '100%';
				player.style.display = "none";
			}
		};
	});

	const closeMovie = () => {
		setPlayMovie(false);
		domBody.style.position = "static";
		domChildrenContent.style.opacity = '100%';
		domHeader.style.opacity = '100%';
	};

	const updateMovie = () => {
		setPlayMovie(true);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	console.log(props);

	return (
		<section className="ChildrenContent" >
			<div className="container-ChildrenContent" >
				<div className="block-ChildrenContent" >
					<div className="link-film" >
						<p ><span> Trang Chủ  </span> / <span> Phim Tâm Lý </span> / <span> Phim Mỹ </span> / <span style={{ color: "#99a5a5" }}> Forrest Gump </span> </p>
					</div>
					<div className="main-ChildrenContent" >
						<div className="block-singer-ChildrenContent" >
							<div className="singer-ChildrenContent" >
								<div className="product-ChildrenContent" >
									<img src={props !== null ? props.image : ""} alt="" />
									<button type="button" onClick={updateMovie}> Xem Phim </button>
								</div>
								<div className="rotate-product">
									<h1 > Người Băng </h1>
									<p > Đạo Diễn: <span> La Vĩnh Xương</span></p>
									<p > Diễn Viên: <span> La Vĩnh Xương</span></p>
									<p > Quốc Gia: <span> Trung Quốc</span></p>
									<p > Điểm IMDB: <span> 8</span></p>
									<p > Ngày Phát Hành:<span> 24 Tháng</span></p>
									<p > Thể Loại: <span> Phim Hành Động</span></p>
									<p > Thời Lượng: <span> 104 Phút</span></p>
								</div>
							</div>
							<div className="content-film" >
								<h1 > NỘI DUNG PHIM </h1>
								<p> “Tớ sẽ tìm ra hòn đảo kho báu!”… Quyết tâm thực hiện bằng được kế hoạch sau khi hùng hồn tuyên bố với nhóm bạn Jaian, Suneo và Shizuka, nhờ bảo bối “Bản đồ truy tìm kho báu” của Doraemon, Nobita đã tìm thấy một hòn đảo mới đột nhiên xuất hiện giữa Thái Bình Dương…Nobita cùng các bạn bắt đầu chuyến phiêu lưu hướng tới đảo kho báu trên con tàu mang tên “Vầng hào quang Nobita”. Thế nhưng, chưa kịp cập bến, cả nhóm đã bị hải tặc tấn công! Trong lúc chống trả lại kẻ địch, Shizuka đã bị hải tặc bắt cóc lên tàu của chúng! Sau khi chạy thoát khỏi đám hải tặc, nhóm bạn Nobita tình cờ gặp cậu bé Flock trôi dạt trên biển cùng con vẹt robot tên Quiz. Flock vốn là một thợ cơ khí vừa trốn thoát khỏi tàu của lũ hải tặc, cậu biết được bí mật quan trọng của hòn đảo kho báu! Liệu Nobita cùng những người bạn có thể giải cứu Shizuka khỏi tay bè lũ hải tặc xấu xa và khám phá ra bí mật ẩn giấu trên hòn đảo kho báu đang ngủ yên hay không!?</p>
							</div>
							<div className="comment">
								<h1 > BÌNH LUẬN VỀ PHIM </h1>
								<div className="img-avatar">
									<img src="data:image/png;base64,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" alt="" />
								</div>
								<div className="range" >
									<i onClick={() => updateStar(1)} style={styleStar > 0 ? { color: "yellow" } : {}} className="fas fa-star" ></i>
									<i onClick={() => updateStar(2)} style={styleStar > 1 ? { color: "yellow" } : {}} className="fas fa-star" ></i>
									<i onClick={() => updateStar(3)} style={styleStar > 2 ? { color: "yellow" } : {}} className="fas fa-star" ></i>
									<i onClick={() => updateStar(4)} style={styleStar > 3 ? { color: "yellow" } : {}} className="fas fa-star" ></i>
									<i onClick={() => updateStar(5)} style={styleStar > 4 ? { color: "yellow" } : {}} className="fas fa-star" ></i>
								</div>
								<form>
									<textarea type="text" placeholder="Thêm Bình Luận Của Bạn..."></textarea>
									<br />
									<button type="button"> Gửi </button>
								</form>
							</div>
							<MainContent />
						</div>
						<div className="right-ChildrenContent">
							<h1 > PHIM GỢI Ý </h1>
							<div className="img-right-ChildrenContent" >
								<div className="product" >
									<img src="https://upload.wikimedia.org/wikipedia/vi/1/1d/Forrest_gump.jpg" alt="" />
									<p className="top-title-singer-MainContent" > Thuyết Minh </p>
									<p className="bottom-title-singer-MainContent" > Forrest Gump </p>
								</div>
								<div className="product" >
									<img src="https://lh3.googleusercontent.com/-3uT6EUMI2F4/Xgvd6oupFAI/AAAAAAAAGXc/FVipN9hzhPQmIUZ9bAuEF6QiWLdrqldOgCLcBGAsYHQ/s0/Phimplay_nha-tu-shawshank.jpg" alt="" />
									<p className="top-title-singer-MainContent" > Thuyết Minh </p>
									<p className="bottom-title-singer-MainContent" > The ShawShank </p>
								</div>
								<div className="product" >
									<img src="http://3.bp.blogspot.com/-FgLDqEfg4XU/TY7qus_9liI/AAAAAAAAAR0/_U-uIhDk_BQ/s1600/3_idiots_poster.jpg" alt="" />
									<p className="top-title-singer-MainContent" > Thuyết Minh </p>
									<p className="bottom-title-singer-MainContent" > 3 Idiots </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="play-movie" style={playMovie === true ? { position: "fixed" } : { display: "none" }} >
				<div >
					<i className="fas fa-times" onClick={closeMovie} ></i>
				</div>
				<iframe className="player" width="100%" src="https://www.youtube.com/embed/bLvqoHBptjg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		</section>
	);
};

export default ChildrenContent; 