import { useEffect , useState } from "react" ; 
import { BrowserRouter as Router , Route , NavLink} from 'react-router-dom' ;

const Header = () => {
	
		const [showTheLoai, setshowTheLoai] = useState(false) ;
		const [showQuocGia, setshowQuocGia] = useState(false) ;
		const [showPhimLe, setshowPhimLe] = useState(false) ; 
		const [showNgoNgu, setshowNgonNgu] =useState(false) ; 
		const [CloseOpenMenu,setCloseOpenMenu] = useState(true) ; 
		const [scrollHeader , setscrollHeader] = useState(false) ; 
 
		const CloseOpenTheLoai = (e) => { setshowTheLoai(!showTheLoai) ; e.stopPropagation() ; } ;

		const CloseOpenQuocGia = (e) => { setshowQuocGia(!showQuocGia) ; e.stopPropagation() ; } ;
		
		const CloseOpenPhimLe = (e) => { setshowPhimLe(!showPhimLe) ; e.stopPropagation() ; } ;
		
		const CloseOpenNgonNgu = (e) => { setshowNgonNgu(!showNgoNgu) ; e.stopPropagation() ; } ;

		const WITH = window.innerWidth ; 
		
		const ShowMenu = () => {
			setCloseOpenMenu(!CloseOpenMenu) ;  
		} ; 
		
		const fixedHeader = () => {
			if(window.scrollY > 600) {
				if(scrollHeader === false)
					setscrollHeader(true) ; 
			}
			else { setscrollHeader(false) ;  }
		} ; 
		
		useEffect(() => {
			window.addEventListener('scroll' , fixedHeader) ; 
		} , []) ; 
	
	return(
		<header className="header" style={scrollHeader === true ? {position : "fixed"} : {}}> 
			<div className="container-header"  > 
				<div className="top-header" style={scrollHeader === true ? {display : "none"} : {}}>
					<a id="a-img" href="/"	> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABwCAYAAABW+hjoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGkGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTA2VDIwOjM3OjMzKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTA2VDIwOjM3OjMzKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMy0wNlQyMDozNzozMyswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMDY0MmY3MC03NWY5LWY0NDAtYmVlYy0zZGE2OTBkZmE3NDAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MDQ5NDdjYy04ZDFkLTE1NGMtYTNhMy1iYmMzMzBhOGYxZDUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MzcyOTQ1NS1hZjBiLWZhNDMtOWFlZS01MzYzMjc4N2ZkOGIiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MzcyOTQ1NS1hZjBiLWZhNDMtOWFlZS01MzYzMjc4N2ZkOGIiIHN0RXZ0OndoZW49IjIwMjEtMDMtMDZUMjA6Mzc6MzMrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjA2NDJmNzAtNzVmOS1mNDQwLWJlZWMtM2RhNjkwZGZhNzQwIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTA2VDIwOjM3OjMzKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iS2FpdG8iIHBob3Rvc2hvcDpMYXllclRleHQ9IkthaXRvIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iTW92aWUiIHBob3Rvc2hvcDpMYXllclRleHQ9Ik1vdmllIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7LacFzAAAQZklEQVR4nO2d3XHjOhKFD7Y2AU0G8oQgh6B51r7YIdgh0CGIm4EVgv2kZyuEUQgjbQSj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" alt="logo" /> </a>
					<form >
						<input type="text" placeholder="Tìm: Tên phim, Thể loại, Diễn viên, Năm sản xuất... " />
						<i className="fas fa-search"></i>
					</form>
					<div className="blockLogInSugIp" >
						<div > <NavLink to="/dangnhap" id="LogIn" > Đăng Nhập </NavLink> </div>
						<div > <NavLink to="/dangky" id="SigUp" > Đăng Ký </NavLink> </div>
					</div>
				</div>
				<div className="bottom-header" >
					<nav className={WITH > 414 ? "navDesktop" : "navMobile"} style={CloseOpenMenu === true ? {} : {display : "block" }} >
						<div onClick={ShowMenu} className="controlClose" ><i className="fas fa-times"></i></div>
						<ul >
							<li  style={{color : "#df4f89"}}> TRANG CHỦ </li>
							<li  onMouseEnter={(e) =>CloseOpenTheLoai(e)} onMouseLeave={(e) =>CloseOpenTheLoai(e)} style={showTheLoai === true && WITH <= 414 ? {color : "#00fcff"} : {}} > THỂ LOẠI <i className="fas fa-caret-down" ></i>
								<div  id="block-TheLoai" style={showTheLoai === true ? {display : "flex"} :{display : "none"}}>
									<NavLink to="/filter1" > Phim Bí Ẩn </NavLink>
									<NavLink to="/filter2" > Phim Chiến Tranh </NavLink>
									<NavLink to="/filter3" > Phim Chiếu Rạp </NavLink>
									<NavLink to="/filter4" > Phim Chính Kịch - Drama </NavLink>
									<NavLink to="/filter5" > Phim Cổ Trang </NavLink>
									<NavLink to="/filter6" > Phim Phim Học Sinh </NavLink>
									<NavLink to="/filter7" > Phim Hoạt Hình </NavLink>
									<NavLink to="/filter8" > Phim Hành Động </NavLink>
									<NavLink to="/filter9" > Phim Hình Sự </NavLink>
									<NavLink to="/filter10" > Phim Kinh Dị </NavLink>
									<NavLink to="/filter11" > Phim Lẻ </NavLink>
									<NavLink to="/filter12" > Hài Hước </NavLink>
								</div> 
							</li>
							<li onMouseEnter={(e) =>CloseOpenQuocGia(e)} onMouseLeave={(e) =>CloseOpenQuocGia(e)} style={showQuocGia === true && WITH <= 414 ? {color : "#00fcff"} : {}}> QUỐC GIA <i className="fas fa-caret-down" ></i> 
								<div id="block-QuocGia" style={showQuocGia === true ? {display : "flex"} :{display : "none"}}>
									<NavLink to="/filter13" > Anh </NavLink>
									<NavLink to="/filter14" > Mỹ </NavLink>
									<NavLink to="/filter15" > Hàn </NavLink>
									<NavLink to="/filter16" > Trung Quốc </NavLink>
									<NavLink to="/filter17" > Nhật Bản </NavLink>
									<NavLink to="/filter18" > Pháp </NavLink>
									<NavLink to="/filter19" > Việt Nam </NavLink>
									<NavLink to="/filter20" > Thái Lan </NavLink>
								</div>
							</li>
							<li onMouseEnter={(e) =>CloseOpenPhimLe(e)} onMouseLeave={(e) =>CloseOpenPhimLe(e)} style={showPhimLe === true && WITH <= 414 ? {color : "#00fcff"} : {}} > PHIM LẺ <i className="fas fa-caret-down" ></i> 
								<div  id="block-PhimLe" style={showPhimLe === true ? {display : "flex"} :{display : "none"}}>
									<NavLink to="/filter21" > Phim Lẻ 2014 </NavLink>
									<NavLink to="/filter22" > Phim Lẻ 2015 </NavLink>
									<NavLink to="/filter23" > Phim Lẻ 2016 </NavLink>
									<NavLink to="/filter24" > Phim Lẻ 2017 </NavLink>
									<NavLink to="/filter25" > Phim Lẻ 2018 </NavLink>
									<NavLink to="/filter26" > Phim Lẻ 2019 </NavLink>
									<NavLink to="/filter27" > Phim Lẻ 2020 </NavLink>
									<NavLink to="/filter28" > Phim Lẻ 2021 </NavLink>
								</div>
							</li>
							<li onMouseEnter={(e) =>CloseOpenNgonNgu(e)} onMouseLeave={(e) =>CloseOpenNgonNgu(e)} style={showNgoNgu === true && WITH <= 414 ? {color : "#00fcff"} : {}} > NGÔN NGỮ <i className="fas fa-caret-down" ></i>
								<div  id="block-NgonNgu" style={showNgoNgu === true ? {display : "flex"} :{display : "none"}}  >
									<a href="#" > Vietsub </a>
									<a href="#" > Thuyết Minh </a>
									<a href="#" > Lồng Tiếng  </a>
								</div>
							</li>
						</ul>	
					</nav>
					<div className="social-header" >
						<a href="" ><i className="fab fa-facebook-f"></i></a>
						<a href="" ><i className="fas fa-external-link-alt"></i></a>
						<a href="" ><i className="fab fa-youtube"></i></a>
					</div>
					<div className="humburger" onClick={ShowMenu} >
						<div className="line" ></div>
						<div className="line" ></div>
						<div className="line" ></div>
					</div>
				</div>
			</div >
		</header>
	) ; 
} ; 

export default Header ; 