import { NavLink} from 'react-router-dom' ;

const SigUp = () => {
	
	
	
	return (
		<section className="LogIn" >
			<div className="container-Login" >
				<form className="block-Login" >
					<h1 > Đăng Ký </h1>
					<p > Tài Khoản </p>
					<div className="block-input" >
						<div><i className="far fa-envelope" aria-hidden="true"></i></div>
						<input type="text" />
					</div>
					<p id="matkhau"> Mật Khẩu </p>
					<div className="block-input" >
						<div><i className="fas fa-lock" aria-hidden="true"></i></div>
						<input type="text" />
					</div>
					<p id="matkhau"> Nhập lại Mật Khẩu </p>
					<div className="block-input" >
						<div><i className="fas fa-lock" aria-hidden="true"></i></div>
						<input type="text" />
					</div>
					<button className="btn_dangnhap-dangky" > Đăng Ký </button>
					<br />
					<NavLink to="/dangnhap" > Đăng Nhập </NavLink>
				</form>
			</div>	
		</section>
	) ; 
} ; 

export default SigUp ;