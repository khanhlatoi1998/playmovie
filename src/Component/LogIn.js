import { NavLink} from 'react-router-dom' ;
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

	const config = {
		  apiKey: 'AIzaSyCVHgTS9BDoUSog7jnkLepJLWMwIFdPVYg',
		  authDomain: 'login-1b152.firebaseapp.com',
		  // ...
		};
	firebase.initializeApp(config);	
		
	const uiConfig = {
	  signInFlow: 'redirect',
	   signInSuccessUrl: '/',
	  signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	  ],
	};	
	
	const openWindow = () => {
        window.open(
            "",
            null,
            "location=no,menubar=no,toolbar=no,dependent=yes," +
            "minimizable=no,modal=yes,alwaysRaised=yes," +
            "resizable=yes,scrollbars=yes,width=2201,height=806,top=173,left=275",
            true  // < ------ 4th parameter
        );
    }

const LogIn = () => {
	
	const [isSignedIn, setIsSignedIn] = useState(false); 
	
	useEffect(() => {
		const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
		  setIsSignedIn(!!user);
		});
		return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
	  }, []);
	
	return (
		<section className="LogIn" >
			<div className="container-Login" >
				<form className="block-Login" >
					<h1 > Đăng Nhập </h1>
					<p > Tài Khoản </p>
					<div className="block-input" >
						<div ><i className="far fa-envelope" aria-hidden="true"></i></div>
						<input type="text" />
					</div>
					<p id="matkhau"> Mật Khẩu </p>
					<div className="block-input" >
						<div><i className="fas fa-lock" aria-hidden="true"></i></div>
						<input type="text" />
					</div>
					<button className="btn_dangnhap-dangky" > Đăng Nhập </button>
					<br />
					<NavLink to="/dangky" >Đăng Ký </NavLink>
					<div className="icoin-LogSig" >
						<a href="#" id="fb" > <i className="fab fa-facebook-f" aria-hidden="true"></i> </a>
						<a href="#" id="gg" > <i className="fab fa-google" aria-hidden="true"></i> </a>
						<a href="#" id="tw" > <i className="fab fa-twitter" aria-hidden="true"></i> </a>
					</div>
					<a href="#" onClick={openWindow} > <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> </a>
				</form>
			</div>	
		</section>
	) ; 
} ; 

export default LogIn ; 