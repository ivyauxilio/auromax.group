export default function Footer() {
  return (
    // <footer className="bg-gray-100 p-4 mt-8 text-center">
    //   <p>© 2025 Auromax. All rights reserved.</p>
    // </footer>
    <footer>
      <div className="ft">
        <div>
          <a href="index.html" className="ft-logo">
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
              <a href="about.html">About AuroMax</a>
            </li>
            <li>
              <a href="about.html#mission">Mission &amp; Vision</a>
            </li>
            <li>
              <a href="about.html#values">Our Values</a>
            </li>
            <li>
              <a href="about.html#indonesia">Why Indonesia</a>
            </li>
          </ul>
        </div>
        <div className="fc">
          <div className="fct">Services</div>
          <ul>
            <li>
              <a href="services.html#trading">Trading &amp; Commodities</a>
            </li>
            <li>
              <a href="services.html#property">Property Development</a>
            </li>
            <li>
              <a href="services.html#mes">Market Entry (MES)</a>
            </li>
            <li>
              <a href="services.html#csr">CSR &amp; Community</a>
            </li>
          </ul>
        </div>
        <div className="fc">
          <div className="fct">Connect</div>
          <ul>
            <li>
              <a href="contact.html">Contact us</a>
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
    // <footer>
    //   <div className="bb ze ki xn 2xl:ud-px-0">
    //     <div className="ji gp">
    //       <div className="tc uf ap gg fp">
    //         <div className="animate_top zd/2 to/4">
    //           <a href="index.html">
    //             {/* <img src="images/logo-light.svg" alt="Logo" className="om" />
    //             <img src="images/logo-dark.svg" alt="Logo" className="xc nm" /> */}
    //             <h2 className="fk vj zp pr ac text-[#000042]">Auromax Group</h2>
    //           </a>

    //           <p className="lc fb">
    //             We move where opportunity flows - delivering results in
    //             property, trade, and community impact.
    //           </p>

    //           <ul className="tc wf cg">
    //             <li>
    //               <a href="#!">
    //                 <svg
    //                   className="vh ul cl il"
    //                   width="24"
    //                   height="24"
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <g clipPath="url(#clip0_48_1505)">
    //                     <path
    //                       d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
    //                       fill=""
    //                     />
    //                   </g>
    //                   <defs>
    //                     <clipPath id="clip0_48_1505">
    //                       <rect width="24" height="24" fill="white" />
    //                     </clipPath>
    //                   </defs>
    //                 </svg>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>

    //         <div className="vd ro tc sf rn un gg vn">
    //           <div className="animate_top">
    //             <h4 className="kk wm tj ec">Quick Links</h4>

    //             <ul>
    //               <li>
    //                 <a href="/" className="sc xl vb">
    //                   Home
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/about" className="sc xl vb">
    //                   About
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/services" className="sc xl vb">
    //                   Services
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/our-company" className="sc xl vb">
    //                   Our Company
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/news-and-opportunities" className="sc xl vb">
    //                   News
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/contact" className="sc xl vb">
    //                   Let’s Talk Opportunities
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="animate_top">
    //             <h4 className="kk wm tj ec">Services</h4>

    //             <ul>
    //               <li>
    //                 <a href="#!" className="sc xl vb">
    //                   Property Development
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="sc xl vb">
    //                   Trading & Commodities
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="sc xl vb">
    //                   Community Projects (CSR & HSE)
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="sc xl vb">
    //                   Market Entry Services (MES)
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="animate_top">
    //             <h4 className="kk wm tj ec">Newsletter</h4>
    //             <p className="ac qe">Subscribe to receive future updates</p>

    //             <form action="#!" method="#!">
    //               <div className="i">
    //                 <input
    //                   type="text"
    //                   placeholder="Email address"
    //                   className="vd sm _g ch pm vk xm rg gm dm dn gi mi"
    //                 />

    //                 <button className="h q fi">
    //                   <svg
    //                     className="th vm ul"
    //                     width="20"
    //                     height="20"
    //                     viewBox="0 0 20 20"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <g clipPath="url(#clip0_48_1487)">
    //                       <path
    //                         d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
    //                         fill=""
    //                       />
    //                     </g>
    //                     <defs>
    //                       <clipPath id="clip0_48_1487">
    //                         <rect width="20" height="20" fill="white" />
    //                       </clipPath>
    //                     </defs>
    //                   </svg>
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bh ch pm tc uf sf yo wf xf ap cg fp bj">
    //       <div className="animate_top">
    //         <ul className="tc wf gg">
    //           {/* <li>
    //             <a href="#!" className="xl">
    //               English
    //             </a>
    //           </li> */}
    //           <li>
    //             <a href="#!" className="xl">
    //               Privacy Policy
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#!" className="xl">
    //               Terms of Use
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="animate_top">
    //         <p>&copy; 2025 Auromax. All rights reserved.</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
