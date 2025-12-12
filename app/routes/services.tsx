export default function Services() {
  return (
    <>
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: "url('/images/globe.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Where Opportunity Moves, We Move With It
          </h1>
          <h2 className="fk vj zp pr text-white wm ">Our Business</h2>
          {/* <p className="text-white/90 text-lg md:text-xl font-medium drop-shadow-md">
            Delivering growth through strategic property development, trade
            solutions, and community impact.
          </p> */}
        </div>
      </div>

      <div className="container mx-auto p-4">
        {/* <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>This is the About page for our React Router v7 app.</p> */}

        <section className="ji gp uq py-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="animate_top bb ze rj ki xn vq">
              <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Core Services</h2>
              {/* <p className="bb on/5 wo/5 hq max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p> */}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bb ye ki xn vq jb jo">
            {/* CARD 1 */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg relative">
                <img
                  className="w-full rounded-lg"
                  src="images/property.webp"
                  alt="Blog"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40 rounded-lg">
                  <a
                    href="#"
                    className="vc ek rg lk gh sl ml il gi hi bg-white px-4 py-2 rounded"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div className="yh">
                {/* <div className="tc uf wf ag jq text-sm mb-2">
                  <div className="tc wf ag gap-2">
                    <img src="images/icon-man.svg" alt="User" />
                    <p>Musharof Chy</p>
                  </div>
                  <div className="tc wf ag gap-2">
                    <img src="images/icon-calender.svg" alt="Calender" />
                    <p>25 Dec, 2025</p>
                  </div>
                </div> */}

                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="#">Property Development</a>
                </h4>
                <p>
                  Focus on Lombok/Sumbawa; project highlights; investment
                  opportunities. Showcase ongoing and upcoming projects with a
                  “Watch This Space” element for new investments.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg relative">
                <img
                  className="w-full rounded-lg"
                  src="images/trading.jpg"
                  alt="Blog"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40 rounded-lg">
                  <a
                    href="#"
                    className="vc ek rg lk gh sl ml il gi hi bg-white px-4 py-2 rounded"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div className="yh">
                {/* <div className="tc uf wf ag jq text-sm mb-2">
                <div className="tc wf ag gap-2">
                  <img src="images/icon-man.svg" alt="User" />
                  <p>Musharof Chy</p>
                </div>
                <div className="tc wf ag g-2">
                  <img src="images/icon-calender.svg" alt="Calender" />
                  <p>25 Dec, 2025</p>
                </div>
              </div> */}

                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="#">Trading & Commodities</a>
                </h4>
                <p>
                  Present current active commodities (Copper, gold, scrap,
                  tobacco, cigars, agricultural products, seafood, corn etc) and
                  an “In the Pipeline” teaser for what’s next. Highlight
                  sourcing & quality assurance.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg relative">
                <img
                  className="w-full rounded-lg"
                  src="images/csr.jpg"
                  alt="Blog"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40 rounded-lg">
                  <a
                    href="./blog-single.html"
                    className="vc ek rg lk gh sl ml il gi hi bg-white px-4 py-2 rounded"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div className="yh">
                {/* <div className="tc uf wf ag jq text-sm mb-2">
                <div className="tc wf ag gap-2">
                  <img src="images/icon-man.svg" alt="User" />
                  <p>Musharof Chy</p>
                </div>
                <div className="tc wf ag gap-2">
                  <img src="images/icon-calender.svg" alt="Calender" />
                  <p>25 Dec, 2025</p>
                </div>
              </div> */}

                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">Community Projects (CSR & HSE)</a>
                </h4>
                <p>
                  Position as an evolving portfolio of impact-driven initiatives
                  or pilot projects.{" "}
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg relative">
                <img
                  className="w-full rounded-lg"
                  src="images/blog-04.png"
                  alt="Blog"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40 rounded-lg">
                  <a
                    href="./blog-single.html"
                    className="vc ek rg lk gh sl ml il gi hi bg-white px-4 py-2 rounded"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div className="yh">
                {/* <div className="tc uf wf ag jq text-sm mb-2">
                <div className="tc wf ag gap-2">
                  <img src="images/icon-man.svg" alt="User" />
                  <p>Musharof Chy</p>
                </div>
                <div className="tc wf ag gap-2">
                  <img src="images/icon-calender.svg" alt="Calender" />
                  <p>25 Dec, 2025</p>
                </div>
              </div> */}

                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">Market Entry Services (MES)</a>
                </h4>
                <p>
                  Detailed service flow: product registration, distributor
                  search, compliance process, facilitation of trade, and money
                  flow management. Keep it process-focused but flexible -
                  highlight recent success stories.
                </p>
              </div>
            </div>
          </div>

          <div className="flex text-center mb-12">
            <div className="animate_top bb ze rj ki xn vq">
              <div className="tc tf yo zf mb">
                <a href="#!" className="ek jk lk gh gi hi rg ml il vc _d _l">
                  Email Us Now
                </a>

                <span className="tc sf">
                  <a href="#!" className="inline-block ek xj kk wm">
                    {" "}
                    customerservice@auromax.group
                  </a>
                  <span className="inline-block">
                    For any question or concern
                  </span>
                </span>
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
