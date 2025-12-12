export default function OurCompanyPage() {
  return (
    <div className="w-full">
      {/* ---- HEADER BANNER ---- */}
      <div
        className="relative w-full h-[320px] md:h-[420px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner04.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Connecting Opportunities Across Regions and Industries
          </h1>
          <h2 className="fk vj zp pr text-white wm "> Our Company</h2>
        </div>
      </div>

      {/* ---- PAGE CONTENT ---- */}
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-20">
        {/* SECTION 1: Company Profiles */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sister company profiles
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            AGL Hong Kong and its sister companies collaborate across real
            estate development, trade, and community-driven
            initiatives—leveraging cross-border strengths to deliver innovative
            solutions in Asia.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-3">AGL Hong Kong</h3>
              <p className="text-gray-600">
                The core strategic hub managing investment operations, regional
                partnerships, and multinational business development.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-3">Sister companies</h3>
              <p className="text-gray-600">-</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Global Presence Map */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Global Presence
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our organization operates as an interconnected network—each entity
            supporting the flow of opportunity and execution.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our reach spans across Hong Kong and Indonesia—establishing a strong
            foundation for cross-border partnerships and sustainable growth.
          </p>

          <div className="w-full flex justify-center mt-8">
            <img
              src="/images/global-map.jpg"
              alt="Global Presence Map"
              className="max-w-full rounded-xl shadow-lg"
            />
          </div>
        </section>
      </div>
      <section className="i pg ji gp uq">
        <span className="rc h s r vd fd/5 fh rm"></span>
        <img src="images/shape-08.svg" alt="Shape Bg" className="h q r" />
        <img src="images/shape-09.svg" alt="Shape" className="of h y z/2" />
        <img src="images/shape-10.svg" alt="Shape" className="h _ aa" />
        {/* <img src="images/shape-11.svg" alt="Shape" className="of h m ba" /> */}

        <div className="of h m ba">
          <svg height="100px" width="150px">
            <g transform="rotate(0, 100, 100)">
              <path
                d="M 100 0 L 0 200 L 200 200
           Z"
                fill="navy"
              />
            </g>
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet With Our Dedicated Team
          </h2> */}
          <h2 x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b">
            {" "}
            Meet With Our Dedicated Team
          </h2>

          <p className="text-lg text-gray-600">
            Our business evolves as fast as the markets we operate in — we
            thrive on identifying and seizing opportunities the moment they
            arise.
          </p>
        </div>
        <div className="bb ze i va ki xn xq jb jo">
          <div className="wc qf pn xo gg cp">
            <div className="animate_top rj">
              <div className="c i pg z-1">
                <img className="vd" src="images/team-01.png" alt="Team" />

                <div className="ef im nl il">
                  <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                  <span className="h s p rc vd hd mh va"></span>
                  <div className="h s p vd ij jj xa">
                    <ul className="tc xf wf gg">
                      <li>
                        <a href="#!">
                          <svg
                            className="uh vl ml il"
                            width="10"
                            height="18"
                            viewBox="0 0 10 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                              fill=""
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <svg
                            className="uh vl ml il"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                              fill=""
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="yj go kk wm ob zb">Olivia Andrium</h4>
              <p>Manager</p>
              <div className="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm font-semibold text-blue-700">
                  Latest Win
                </p>
                <p className="text-sm text-blue-600">
                  Closed a $2.4M property acquisition deal
                </p>
              </div>
            </div>

            <div className="animate_top rj">
              <div className="c i pg z-1">
                <img className="vd" src="images/team-02.png" alt="Team" />

                <div className="ef im nl il">
                  <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                  <span className="h s p rc vd hd mh va"></span>
                  <div className="h s p vd ij jj xa">
                    <ul className="tc xf wf gg">
                      <li>
                        <a href="#!">
                          <svg
                            className="uh vl ml il"
                            width="10"
                            height="18"
                            viewBox="0 0 10 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                              fill=""
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <svg
                            className="uh vl ml il"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                              fill=""
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="yj go kk wm ob zb">Jemse Kemorun</h4>
              <p>Product Designer</p>
              <div className="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm font-semibold text-blue-700">
                  Latest Win
                </p>
                <p className="text-sm text-blue-600">
                  Closed a $2.4M property acquisition deal
                </p>
              </div>
            </div>
            <div className="animate_top rj">
              <div className="c i pg z-1">
                <img className="vd" src="images/team-03.png" alt="Team" />

                <div className="ef im nl il">
                  <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                  <span className="h s p rc vd hd mh va"></span>
                  <div className="h s p vd ij jj xa">
                    <ul className="tc xf wf gg">
                      <li>
                        <a href="#!">
                          <svg
                            className="uh vl ml il"
                            width="10"
                            height="18"
                            viewBox="0 0 10 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z"
                              fill=""
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <svg
                            className="uh vl ml il"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z"
                              fill=""
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="yj go kk wm ob zb">Avi Pestarica</h4>
              <p>COO</p>
              <div className="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm font-semibold text-blue-700">
                  Latest Win
                </p>
                <p className="text-sm text-blue-600">
                  Closed a $2.4M property acquisition deal
                </p>
              </div>
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
              <a href="#!" className="vc ek kk hh rg ol il cm gi hi">
                Email Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
