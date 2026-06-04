export default function Footer() {
  return (
    // <footer className="bg-gray-100 p-4 mt-8 text-center">
    //   <p>© 2025 Auromax. All rights reserved.</p>
    // </footer>
    <footer>
      <div className="ft">
        <div>
          <a href="/" className="ft-logo">
            <svg viewBox="0 0 72 80" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13,66 L13,37 A23,23 0 0 1 59,37 L59,66 L47,66 L47,37 A11,11 0 0 0 25,37 L25,66 Z"
                fill="#C9A84C"
              />
              <circle cx="36" cy="48" r="5" fill="#C95E3A" />
            </svg>
            <div className="ft-logo-n">AUROMAX</div>
          </a>
          <div className="ft-tag">
            Your gateway to Indonesia's resources, land and markets. Operating
            exclusively in Indonesia since 2024.
          </div>
          <div className="ft-slogan">Trust First. Desire Always.</div>
        </div>
        <div className="fc">
          <div className="fct">Company</div>
          <ul>
            <li>
              <a href="/about">About AuroMax</a>
            </li>
            <li>
              <a href="/about#mission">Mission &amp; Vision</a>
            </li>
            <li>
              <a href="/about#values">Our Values</a>
            </li>
            <li>
              <a href="/about#indonesia">Why Indonesia</a>
            </li>
          </ul>
        </div>
        <div className="fc">
          <div className="fct">Services</div>
          <ul>
            <li>
              <a href="/services#trading">Trading &amp; Commodities</a>
            </li>
            <li>
              <a href="/services#property">Property Development</a>
            </li>
            <li>
              <a href="/services#mes">Market Entry (MES)</a>
            </li>
            <li>
              <a href="/services#csr">CSR &amp; Community</a>
            </li>
          </ul>
        </div>
        <div className="fc">
          <div className="fct">Connect</div>
          <ul>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fb">
        <div className="fb-l">
          © 2026 AuroMax Group · Indonesia · All rights reserved
        </div>
        <div className="fb-v">
          Unlock · Bridge · Rooted · Integrity · Legacy
        </div>
      </div>
    </footer>
  );
}
