import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <div>
          <h6 className="footer-title">You are Most Welcome</h6>
          <Link
            href="/"
            className="bg-white p-3 text-orange-600 text-3xl font-bold rounded-full"
          >
            Next_Blog
          </Link>
        </div>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about-us" className="link link-hover">
            About Us
          </Link>
          <Link href="/contact-us" className="link link-hover">
            Contact Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="/terms-of-use" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-warning join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
