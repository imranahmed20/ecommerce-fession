import logo from '../../assets/im2_files/logo.webp'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral-950 text-white">
                <aside>
                    <img src={logo} alt="" />
                    <a className="link link-hover mt-3">Track Order</a>
                    <a className="link link-hover mt-2">Delivery & Returns</a>
                    <a className="link link-hover mt-2">Warranty</a>

                </aside>
                <nav>
                    <header className="footer-title">About Us</header>
                    <a className="link link-hover">Rave’s Story</a>
                    <a className="link link-hover">Work With Us</a>
                    <a className="link link-hover">Coporate News</a>
                    <a className="link link-hover">Investors</a>
                </nav>
                <nav>
                    <header className="footer-title">Useful Links</header>
                    <a className="link link-hover">Secure Payment</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Archived Products</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact Info</header>
                    <p className="font-bold text-xl">Address:</p>
                    <p>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
                    <p className="font-bold text-xl">Phone::</p>
                    <p>+880171889547 </p>

                </nav>
            </footer>

        </div>
    );
};

export default Footer;