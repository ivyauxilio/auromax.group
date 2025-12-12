import React, { useState } from "react";

export default function News() {
  const [filter, setFilter] = useState("all");
  const items = [
    {
      id: 1,
      category: "press",
      title: "New Resort Development Kicks Off in Lombok",
      date: "Jan 12, 2026",
      image: "/images/blog-01.png",
      description:
        "AGL announces groundbreaking of a new eco-resort in Lombok, strengthening tourism and local job opportunities.",
    },
    {
      id: 2,
      category: "milestone",
      title: "AGL Achieves Key Milestone in Renewable Water Project",
      date: "Feb 8, 2026",
      image: "/images/blog-01.png",
      description:
        "Our clean water initiative in rural Indonesia reaches its second development phase.",
    },
    {
      id: 3,
      category: "opportunity",
      title: "Seeking Partners for Sustainable Copper Supply Chain",
      date: "Feb 20, 2026",
      image: "/images/blog-01.png",
      description:
        "AGL is inviting investors and logistics partners for a cooperative copper trade operation.",
    },
    {
      id: 4,
      category: "press",
      title: "AGL Expands Presence in Hong Kong",
      date: "Mar 3, 2026",
      image: "/images/blog-01.png",
      description:
        "Our Hong Kong office broadens its real-estate and trade development portfolio.",
    },
  ];

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <>
      <div className="container mx-auto p-4">
        <section className="ji gp uq py-16">
          <div className="text-center">
            <div className="animate_top bb ze rj ki xn vq text-center">
              <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
                News & Opportunities
              </h2>
              <p className="text-gray-600 text-lg md:text-xl">
                Stay Updated • Stay Connected
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Filters */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-3 rounded-lg font-semibold border ${
                  filter === "all"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                All
              </button>

              <button
                onClick={() => setFilter("press")}
                className={`px-6 py-3 rounded-lg font-semibold border ${
                  filter === "press"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Press Releases
              </button>

              <button
                onClick={() => setFilter("milestone")}
                className={`px-6 py-3 rounded-lg font-semibold border ${
                  filter === "milestone"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Project Milestones
              </button>

              <button
                onClick={() => setFilter("opportunity")}
                className={`px-6 py-3 rounded-lg font-semibold border ${
                  filter === "opportunity"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Opportunities
              </button>
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="c rc i z-1 pg relative">
                <img
                  className="w-full rounded-lg"
                  src="images/blog-01.png"
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

              <div className="p-6">
                <p className="text-sm text-gray-500">{item.date}</p>

                {/* <h3 className="text-xl font-bold mt-2 mb-3"></h3> */}
                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">{item.title}</a>
                </h4>

                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>This is the About page for our React Router v7 app.</p> */}

        <section className="lj tp kr mt-8">
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
