export default function About() {
  return (
    <>
      <div className="container mx-auto p-4">
        {/* <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>This is the About page for our React Router v7 app.</p> */}

        <section className="ji gp uq 2xl:ud-py-35 pg">
          <div className="bb ze ki xn wq">
            <div className="tc wf gg qq">
              <div className="animate_left xc gn gg jn/2 i">
                <div>
                  <img
                    src="images/shape-05.svg"
                    alt="Shape"
                    className="h -ud-left-5 x"
                  />
                  <img src="images/about-01.png" alt="About" className="ib" />
                  <img src="images/about-02.png" alt="About" />
                </div>
                <div>
                  <img src="images/shape-06.svg" alt="Shape" />
                  <img
                    src="images/about-03.png"
                    alt="About"
                    className="ob gb"
                  />
                  {/* <img src="images/shape-07.svg" alt="Shape" className="bb" /> */}
                  <svg height="200px" width="200px">
                    <g transform="rotate(0, 100, 100)">
                      <path
                        d="M 0 100
           A 100 100 0 0 1 200 100
           L 0 100
           Z"
                        fill="navy"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="animate_right jn/2">
                <h4 className="ek yj gb text-[#08442B]">About Us</h4>
                <h2 className="fk vj zp pr kk wm qb">
                  We Make Our customers happy by giving Best services.
                </h2>
                <p className="uo">
                  Right now, we’re expanding into eco-resorts in Sumbawa and
                  scaling our renewable water solutions in rural Indonesia
                </p>

                <a href="#" data-fslightbox className="vc wf hg mb">
                  <span className="tc wf xf be dd rg i gh ua">
                    <span className="nf h vc yc vd rg gh qk -ud-z-1"></span>
                    <img src="images/icon-play.svg" alt="Play" />
                  </span>
                  <span className="kk">SEE HOW WE WORK</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="lj tp kr">
          <div>
            <div className="animate_top bb ze rj ki xn vq">
              <h2 x-text="sectionTitle" className="fk vj pr kk wm bb _b">
                Commitment to Indonesia’s growth
              </h2>
              <p className="bb on/5 wo/5 hq" x-text="sectionTitleText">
                Our business evolves as fast as the markets we operate in - we
                thrive on identifying and seizing opportunities the moment they
                arise
              </p>
            </div>
          </div>

          <div className="bb ze ki xn yq mb mt-3">
            <div className="wc qf pn xo ng gap-3">
              <div
                className="animate_top sg oi pi zq ml il am cn _m border border-blue-500"
                style={{ borderWidth: "1px" }}
              >
                <img src="images/icon-04.svg" alt="Icon" />
                <h4 className="ek zj kk wm nb _b">Integrity</h4>
              </div>

              <div
                className="animate_top sg oi pi zq ml il am cn _m border border-blue-500"
                style={{ borderWidth: "1px" }}
              >
                <img src="images/icon-05.svg" alt="Icon" />
                <h4 className="ek zj kk wm nb _b">Sustainability</h4>
              </div>

              <div
                className="animate_top sg oi pi zq ml il am cn _m border border-blue-500"
                style={{ borderWidth: "1px" }}
              >
                <img src="images/icon-07.svg" alt="Icon" />
                <h4 className="ek zj kk wm nb _b">innovation</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="i pg gh ji">
        <img className="h p q" src="images/shape-16.svg" alt="Bg Shape" />

        <div className="bb ye i z-10 ki xn dr">
          <div className="tc uf sn tn un gg">
            <div className="animate_left to/2">
              <h2 className="fk vj zp pr lk ac">Partner with Us</h2>
              <p className="lk">
                Become part of a community built on collaboration and success.
              </p>
            </div>
            <div className="animate_right bf">
              <a href="#!" className="vc ek kk hh rg ol il cm gi hi">
                Email Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
