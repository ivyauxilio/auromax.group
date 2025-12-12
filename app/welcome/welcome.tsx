import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { useEffect, useState } from "react";

export function Welcome() {
  const videos = ["/video/lombok.mp4", "/video/csr.mp4", "/video/ship.mp4"];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const slides = [
    {
      video: "/video/lombok.mp4",
      title: "Building Futures in Lombok",
    },
    {
      video: "/video/csr.mp4",
      title: "Trading the World’s Resources",
    },
    {
      video: "/video/ship.mp4",
      title: "Creating Clean Water Solutions",
    },
  ];

  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % videos.length);
  //   }, 6000); // change video every 6 seconds

  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true); // fade in
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          key={slides[index].video}
          className="absolute inset-0 h-full w-full object-cover"
          src={slides[index].video}
          autoPlay
          muted
          loop
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-20 flex flex-col h-full items-center justify-center text-center px-6 gap-y-6">
          <div className="animate_left jn/2">
            <h1 className="fk vj zp or wm wb text-white">
              {slides[index].title}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="#!" className="ek jk lk gh gi hi rg ml il vc _d _l sl">
                Get Started Now
              </a>

              <a
                href="#!"
                className="bg-white rg gi text-black font-semibold px-10 rounded-lg shadow-xl hover:bg-gray-200 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="gj do ir hj sp jr i pg">
        <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
          <img
            src="images/shape-01.svg"
            alt="shape"
            className="xc 2xl:ud-block h t -ud-left-[10%] ua"
          />
          <img
            src="images/shape-02.svg"
            alt="shape"
            className="xc 2xl:ud-block h u p va"
          />
          <img
            src="images/shape-03.svg"
            alt="shape"
            className="xc 2xl:ud-block h v w va"
          />
          <img src="images/circle-fillsvg.svg" alt="shape" className="h q r" />
          <img
            src="images/corporate-handshake.png"
            alt="Woman"
            className="h q r ua"
          />
        </div>

        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="tc _o">
            <div className="animate_left jn/2">
              <h1 className="fk vj zp or kk wm wb">
                We move where opportunity flows - delivering results in
                property, trade, and community impact.
              </h1>
              {/* <p className="fq">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
                consequat varius nisi quis, posuere magna.
              </p> */}

              <div className="tc tf yo zf mb">
                <a href="#!" className="ek jk lk gh gi hi rg ml il vc _d _l sl">
                  Connect with Us
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
        </div>
      </section>
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
                <a href="#">Community Projects (CSR & HSE)</a>
              </h4>
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
                <a href="#">Market Entry Services (MES)</a>
              </h4>
            </div>
          </div>
        </div>

        <div className="flex text-center mb-12">
          <div className="animate_top bb ze rj ki xn vq">
            <div className="tc tf yo zf mb">
              <a href="#!" className="ek jk lk gh gi hi rg ml il vc _d _l sl">
                Partner with Us
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
              <a href="#!" className="vc ek kk hh rg ol il cm gi hi sl">
                Email Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
