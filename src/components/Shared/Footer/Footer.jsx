

const Footer = () => {
    return (
        <footer className="footer p-10 text-white">
            <aside className="mt-7">
                <figure><img className="w-[30px] h-[30px]" src="https://i.ibb.co/r3P0x4d/blog-logo.png" alt="Logo" /></figure>
                <p>BlogHub<br />Copyright &copy; {new Date().getUTCFullYear()} BlogHub | All rights reserved.</p>
            </aside>
            <nav>
                <header className="footer-title">Blogs</header>
                <a className="link link-hover">Technology</a>
                <a className="link link-hover">Food</a>
                <a className="link link-hover">Travel</a>
            </nav>
            <nav>
                <header className="footer-title">Quick Links</header>
                <a className="link link-hover" href="/">Home</a>
                <a className="link link-hover" href="/all-blogs">All blogs</a>
                <a className="link link-hover" href="/featured-blogs">Featured blogs</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;