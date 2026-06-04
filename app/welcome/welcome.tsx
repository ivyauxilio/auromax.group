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

  const [openId, setOpenId] = useState<string | null>(null);

  const toggleView = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
    <>
      <main>
        <section className="hero">
          <div className="h-img"></div>
          <div className="h-ov1"></div>
          <div className="h-ov2"></div>
          <div className="h-body">
            <div className="h-top">
              <div className="h-top-l a1">
                Indonesia &nbsp;·&nbsp; Est. 2024 &nbsp;·&nbsp; Four Services.
                One Partner.
              </div>
              <div className="h-top-r a1">
                Rooted in Indonesia.
                <br />
                Connected to the world.
              </div>
            </div>
            <div className="h-headline">
              <h1 className="h-h1">
                <span className="ghost a2">Indonesia</span>
                <span className="a3">
                  Gateway<span className="h-dot"></span>
                </span>
              </h1>
              <div className="h-slogan a4">Trust First. Desire Always.</div>
            </div>
          </div>
          <div className="h-lower">
            <div className="hl-left">
              <p className="hl-desc a4">
                AuroMax Group does one thing: Indonesia. We connect partners
                from around the world to{" "}
                <em>natural commodities, land, market access,</em> and real
                community opportunity. No general firm comes close to what we
                know here.
              </p>
              <div className="hl-btns a5">
                <a href="services.html" className="btn-e">
                  Our four services
                </a>
                <a href="about.html" className="btn-gl">
                  Our story
                </a>
              </div>
            </div>
            <div className="hl-right a5">
              <div className="hstat">
                <div className="hstat-n">4</div>
                <div className="hstat-l">Services, all under one roof</div>
              </div>
              <div className="hstat">
                <div className="hstat-n">100%</div>
                <div className="hstat-l">
                  Focused on Indonesia. Nothing else.
                </div>
              </div>
              <div className="hstat">
                <div className="hstat-n">280M</div>
                <div className="hstat-l">
                  People in the world's 4th largest nation
                </div>
              </div>
              <div className="hstat">
                <div className="hstat-n">LLC</div>
                <div className="hstat-l">
                  Registered, compliant, fully on the ground
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="t-i">
            <span className="t-t">
              Trading &amp; Commodities <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Property Development <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Market Entry Services <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Community &amp; CSR <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Trust First. Desire Always. <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Indonesia Only <span className="t-s">·</span>
            </span>
            <span className="t-t">
              LLC Registered <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Trading &amp; Commodities <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Property Development <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Market Entry Services <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Community &amp; CSR <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Trust First. Desire Always. <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Indonesia Only <span className="t-s">·</span>
            </span>
            <span className="t-t">
              LLC Registered <span className="t-s">·</span>
            </span>
          </div>
        </div>

        <section className="svc" id="services">
          <div className="svc-head">
            <div>
              <div className="sh-pre">What we do</div>
              <h2 className="sh-h2">
                Four services,
                <br />
                one partner,
                <br />
                <em>all Indonesia.</em>
              </h2>
            </div>
            <div className="sh-right">
              <p className="sh-body">
                AuroMax works exclusively in Indonesia across{" "}
                <strong>four areas we know inside out</strong>. Every service
                exists for one reason: to make Indonesia's real potential
                available to those who want it, and genuinely worthwhile for
                those who show up for it.
              </p>
            </div>
          </div>
          <div className="svc-grid">
            <a href="services.html#trading" className="sc">
              <div className="sc-img"></div>
              <div className="sc-ov"></div>
              <div className="sc-arr">↗</div>
              <div className="sc-content">
                <div className="sc-num">01 / 04</div>
                <div className="sc-title">
                  Trading &amp;
                  <br />
                  Commodities
                </div>
                <div className="sc-body">
                  We source, trade, and export Indonesia's finest natural
                  resources. Copper, gold, nickel scrap, premium tobacco,
                  hand-rolled cigars, seafood, and agricultural goods. We work
                  with verified global buyers and stay accountable the whole
                  way.
                </div>
                <div className="sc-tags">
                  <span className="sc-tag">Minerals</span>
                  <span className="sc-tag">Tobacco</span>
                  <span className="sc-tag">Seafood</span>
                  <span className="sc-tag">Agricultural</span>
                </div>
              </div>
            </a>
            <a href="services.html#property" className="sc">
              <div className="sc-img"></div>
              <div className="sc-ov"></div>
              <div className="sc-arr">↗</div>
              <div className="sc-content">
                <div className="sc-num">02 / 04</div>
                <div className="sc-title">
                  Property
                  <br />
                  Development
                </div>
                <div className="sc-body">
                  From finding the land to handing over the keys. We work across
                  Lombok, Sumbawa, and Indonesia's fastest-growing areas,
                  handling every stage: regulatory approvals, construction, and
                  investor relations. Real local authority, not remote
                  management.
                </div>
                <div className="sc-tags">
                  <span className="sc-tag">Lombok</span>
                  <span className="sc-tag">Sumbawa</span>
                  <span className="sc-tag">Land</span>
                  <span className="sc-tag">Development</span>
                </div>
              </div>
            </a>
            <a href="services.html#mes" className="sc">
              <div className="sc-img"></div>
              <div className="sc-ov"></div>
              <div className="sc-arr">↗</div>
              <div className="sc-content">
                <div className="sc-num">03 / 04</div>
                <div className="sc-title">
                  Market Entry
                  <br />
                  Services
                </div>
                <div className="sc-body">
                  Indonesia can be complex to enter. We make it manageable. We
                  guide international businesses through product registration,
                  finding distributors, staying compliant, and getting money
                  moving. We have done every part of this ourselves.
                </div>
                <div className="sc-tags">
                  <span className="sc-tag">Registration</span>
                  <span className="sc-tag">Distributors</span>
                  <span className="sc-tag">Compliance</span>
                  <span className="sc-tag">Trade</span>
                </div>
              </div>
            </a>
            <a href="services.html#csr" className="sc">
              <div className="sc-img"></div>
              <div className="sc-ov"></div>
              <div className="sc-arr">↗</div>
              <div className="sc-content">
                <div className="sc-num">04 / 04</div>
                <div className="sc-title">
                  Community
                  <br />
                  &amp; CSR
                </div>
                <div className="sc-body">
                  At AuroMax, business and community go together. Every project
                  follows proper health and safety standards, puts local people
                  to work first, and gives back to the community. Nothing
                  lasting gets built without a strong foundation.
                </div>
                <div className="sc-tags">
                  <span className="sc-tag">HSE</span>
                  <span className="sc-tag">Environment</span>
                  <span className="sc-tag">Community</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="indo">
          <div className="indo-photo">
            <div className="indo-photo-img"></div>
            <div className="indo-photo-ov"></div>
            <div className="indo-txt">
              <div className="it-pre">Why Indonesia</div>
              <h2 className="it-h2">
                The opportunity most of the world has not found yet.
              </h2>
              <p className="it-quote">
                "AuroMax sits where Indonesia's best assets meet the local
                knowledge to act on them before anyone else catches up."
              </p>
              <a
                href="about.html#indonesia"
                className="btn-e"
                style={{ marginTop: "24px", display: "inline-block" }}
              >
                Discover why →
              </a>
            </div>
          </div>
          <div>
            <div className="indo-stats">
              <div className="is-title">Indonesia by the numbers</div>
              <div className="is-item">
                <div className="is-n">280M+</div>
                <div className="is-l">
                  People. The biggest economy in Southeast Asia, and still
                  growing
                </div>
              </div>
              <div className="is-item">
                <div className="is-n">#1</div>
                <div className="is-l">
                  In global nickel reserves, plus copper, gold, bauxite and coal
                </div>
              </div>
              <div className="is-item">
                <div className="is-n">17,508</div>
                <div className="is-l">
                  Islands, with enormous stretches of land and resources still
                  to be developed
                </div>
              </div>
              <div className="is-item">
                <div className="is-n">Top 5</div>
                <div className="is-l">
                  Fastest-growing economies in the Asia Pacific, consistently
                </div>
              </div>
              <div className="is-item">
                <div className="is-n">2045</div>
                <div className="is-l">
                  Indonesia's target year to reach the world's top 5 economies
                </div>
              </div>
            </div>
            <div className="indo-band">
              <div className="ib-txt">
                "Indonesia is not some emerging bet. It is a real powerhouse the
                world has quietly <strong>underestimated for too long.</strong>"
              </div>
              <a href="contact.html" className="btn-g">
                Talk to AuroMax
              </a>
            </div>
          </div>
        </section>

        <div className="fbq">
          <div className="fbq-img"></div>
          <div className="fbq-ov"></div>
          <div className="fbq-ov2"></div>
          <div className="fbq-c">
            <div className="fbq-pre">AuroMax founding conviction</div>
            <p className="fbq-q">
              "Indonesia's opportunity is not a passing trend. It is a{" "}
              <strong>permanent reality</strong> that most of the world has not
              looked at closely enough. We want to change that, honestly, for
              generations."
            </p>
            <div className="fbq-attr">
              AuroMax Group · Est. 2024 · Indonesia
            </div>
          </div>
        </div>

        <section className="values">
          <div className="val-hdr">
            <div className="vh-left">
              <div className="vh-pre">Our values</div>
              <h2 className="vh-h2">
                Five words.
                <br />
                <em>Five convictions.</em>
              </h2>
            </div>
            <div className="vh-aside">
              These are not taglines. They drive every trade we make, every
              building we put up, and every partner we bring to Indonesia.
            </div>
          </div>
          <div className="val-list">
            {/* <div className="vi open" id="v1"> */}
            <div className={`vi ${openId === "v1" ? "open" : ""}`}>
              <button className="vi-head" onClick={() => toggleView("v1")}>
                <div className="vin">01</div>
                <div className="viw">Unlock</div>
                <div className="vif">Unlock Indonesia's True Worth</div>
                <div className="vip">+</div>
              </button>
              <div className="vi-body">
                <div className="vi-inner">
                  <div></div>
                  <div className="vi-desc">
                    Indonesia holds resources, land, and potential that most of
                    the world has not noticed yet. We do not wait for others to
                    catch on. We go deeper, find more, and turn what has been
                    missed into something genuinely valuable. This is why
                    AuroMax exists.
                  </div>
                  <div className="vi-q">
                    "We go where the real value is, not where the crowd is
                    already standing."
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="vi" id="v2"> */}
            <div className={`vi ${openId === "v2" ? "open" : ""}`}>
              <button className="vi-head" onClick={() => toggleView("v2")}>
                <div className="vin">02</div>
                <div className="viw">Bridge</div>
                <div className="vif">The Bridge Between Worlds</div>
                <div className="vip">+</div>
              </button>
              <div className="vi-body">
                <div className="vi-inner">
                  <div></div>
                  <div className="vi-desc">
                    We are the real connection between Indonesia and the rest of
                    the world. Not a go-between, but a genuine bridge built on
                    real relationships, local knowledge, and trust. Where others
                    see distance and difficulty, we see the opportunity right
                    there.
                  </div>
                  <div className="vi-q">
                    "The gap between Indonesia and the world is not something to
                    overcome. It is exactly where we do our best work."
                  </div>
                </div>
              </div>
            </div>
            <div className={`vi ${openId === "v3" ? "open" : ""}`}>
              <button className="vi-head" onClick={() => toggleView("v3")}>
                <div className="vin">03</div>
                <div className="viw">Rooted</div>
                <div className="vif">
                  Indonesia Is Our Foundation, Not Our Market
                </div>
                <div className="vip">+</div>
              </button>
              <div className="vi-body">
                <div className="vi-inner">
                  <div></div>
                  <div className="vi-desc">
                    We do not treat Indonesia like a deal to close. It is the
                    foundation of everything we build. Its people, its
                    resources, and its future shape every decision we make. We
                    are part of Indonesia, not just passing through.
                  </div>
                  <div className="vi-q">
                    "Part of Indonesia, not just working in it. The only way to
                    build something that truly lasts."
                  </div>
                </div>
              </div>
            </div>
            <div className={`vi ${openId === "v4" ? "open" : ""}`}>
              <button className="vi-head" onClick={() => toggleView("v4")}>
                <div className="vin">04</div>
                <div className="viw">Integrity</div>
                <div className="vif">Integrity Is the Deal</div>
                <div className="vip">+</div>
              </button>
              <div className="vi-body">
                <div className="vi-inner">
                  <div></div>
                  <div className="vi-desc">
                    Every number is real. Every commitment is kept. Every
                    partner matters long after the deal is done. At AuroMax,
                    integrity is what every deal is built on. Without it,
                    nothing holds up.
                  </div>
                  <div className="vi-q">
                    "A deal is only as solid as the honesty behind it. We never
                    separate the two."
                  </div>
                </div>
              </div>
            </div>
            <div className={`vi ${openId === "v5" ? "open" : ""}`}>
              <button className="vi-head" onClick={() => toggleView("v5")}>
                <div className="vin">05</div>
                <div className="viw">Legacy</div>
                <div className="vif">We Build for the Next Generation</div>
                <div className="vip">+</div>
              </button>
              <div className="vi-body">
                <div className="vi-inner">
                  <div></div>
                  <div className="vi-desc">
                    Short-term wins are easy. Lasting value takes real
                    discipline, clear thinking, and the willingness to say no to
                    things that will not hold up. Everything AuroMax builds is
                    meant to outlast us.
                  </div>
                  <div className="vi-q">
                    "We build for the next generation, not the next quarter."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why">
          <div className="why-photo">
            <div className="why-photo-img"></div>
            <div className="why-photo-ov"></div>
            <div className="why-cap">
              <div className="wc-lbl">On the ground</div>
              <div className="wc-txt">
                "Not advisors who've read about Indonesia. Operators who live
                and work within it."
              </div>
            </div>
          </div>
          <div className="why-content">
            <div className="wyc-pre">Why AuroMax</div>
            <h2 className="wyc-h2">
              The difference runs <em>deeper</em> than a pitch.
            </h2>
            <p className="wyc-intro">
              Plenty of firms work in Indonesia. AuroMax was built from inside
              it, for it, and because of it.
            </p>
            <div className="why-items">
              <div className="wi">
                <div className="wi-n">01</div>
                <div>
                  <div className="wi-t">Indonesia only, always</div>
                  <div className="wi-b">
                    Complete focus, nothing split. We are not consultants who
                    fly in. We are operators who are here for the long run.
                  </div>
                </div>
              </div>
              <div className="wi">
                <div className="wi-n">02</div>
                <div>
                  <div className="wi-t">Four services, no passing the buck</div>
                  <div className="wi-b">
                    Trading, property, market entry, and CSR all under one roof.
                    One partner. One team that sees the whole picture and stays
                    responsible for all of it.
                  </div>
                </div>
              </div>
              <div className="wi">
                <div className="wi-n">03</div>
                <div>
                  <div className="wi-t">
                    Real relationships, not contact lists
                  </div>
                  <div className="wi-b">
                    Our network of suppliers, landowners, regulators, and
                    distributors is built through direct, on-the-ground work.
                    Not through online searches or cold emails.
                  </div>
                </div>
              </div>
              <div className="wi">
                <div className="wi-n">04</div>
                <div>
                  <div className="wi-t">We have been through it ourselves</div>
                  <div className="wi-b">
                    We have our own LLC, we trade commodities, we develop
                    property. We only guide you through things we have
                    personally done ourselves.
                  </div>
                </div>
              </div>
            </div>
            <a href="contact.html" className="btn-e">
              Start the conversation
            </a>
          </div>
        </section>

        <section className="stmt">
          <div className="stmt-img"></div>
          <div className="stmt-ov"></div>
          <div className="stmt-ov2"></div>
          <div className="stmt-c">
            <div className="stmt-pre">AuroMax Group · Slogan</div>
            <p className="stmt-q">
              "<strong>Trust First.</strong> Because every good partnership
              starts there. <strong>Desire Always.</strong> Because without real
              ambition, opportunity passes you by. This is how AuroMax works."
            </p>
            <div className="stmt-attr">
              AuroMax Group · Est. 2024 · Indonesia
            </div>
          </div>
        </section>

        <section className="cta-wrap">
          <div className="cta-dark">
            <div className="cd-pre">Ready to begin?</div>
            <h2 className="cd-h2">
              Let's talk about <em>Indonesia.</em>
            </h2>
            <p className="cd-body">
              Whether you are looking at a commodity trade, a property project,
              or entering Indonesia for the first time, this is where it starts.
              We respond personally within 1 to 2 business days.
            </p>
            <div className="cd-email">customerservice@auromax.group</div>
          </div>
          <div className="cta-form">
            <div className="cf-title">Send us a message</div>
            <div className="cf-sub">
              Every message is answered by a real person, not a bot.
            </div>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              // onsubmit="handleSub(event)"
            >
              <div className="cf-row">
                <div className="fg">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="fg">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company / Organisation"
                  />
                </div>
              </div>
              <div className="cf-row">
                <div className="fg">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="fg">
                  <label htmlFor="service">I'm interested in</label>
                  <select id="service">
                    <option value="" disabled selected>
                      Select a service
                    </option>
                    <option>Trading &amp; Commodities</option>
                    <option>Property Development</option>
                    <option>Market Entry (MES)</option>
                    <option>CSR &amp; Community</option>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>
              <div className="fg full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us what you are working towards in Indonesia. The more you share, the more useful our reply will be."
                ></textarea>
              </div>
              <button type="submit" className="cf-submit">
                Send message and we'll be in touch →
              </button>
              <div className="cf-note">
                We never share your details. We reply within 1 to 2 business
                days.{" "}
                <a href="privacy.html" style={{ color: "inherit" }}>
                  Privacy policy
                </a>
                .
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
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
