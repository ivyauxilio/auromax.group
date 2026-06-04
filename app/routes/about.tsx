import { useState } from "react";

export default function About() {
  const [openId, setOpenId] = useState<string | null>("v1");

  const toggleView = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <div className="about">
        <section className="hero">
          <div className="h-img"></div>
          <div className="h-ov1"></div>
          <div className="h-ov2"></div>
          <div className="h-content">
            <div>
              <div className="hc-pre a1">AuroMax Group: Our Story</div>
              <h1 className="hc-h1 a2">
                <span className="ghost">Of Indonesia.</span>Not merely
                <br />
                in it<span className="hc-dot"></span>
              </h1>
            </div>
            <div className="hc-right a3">
              <div className="hc-slogan">Trust First. Desire Always.</div>
              <p className="hc-sub">
                "AuroMax was not built to take from Indonesia. It was built to
                grow <em>with</em> it, connecting the world to what Indonesia
                has, and Indonesia to what the world needs."
              </p>
              <a href="#story" className="btn-e">
                Our story
              </a>
              <a
                href="/contact"
                className="btn-gl"
                style={{ marginLeft: "12px" }}
              >
                Work with us
              </a>
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="t-i">
            <span className="t-t">
              About AuroMax <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Founded in Indonesia <span className="t-s">·</span>
            </span>
            <span className="t-t">
              LLC Registered <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Four Services <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Trust First. Desire Always. <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Indonesia Only <span className="t-s">·</span>
            </span>
            <span className="t-t">
              About AuroMax <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Founded in Indonesia <span className="t-s">·</span>
            </span>
            <span className="t-t">
              LLC Registered <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Four Services <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Trust First. Desire Always. <span className="t-s">·</span>
            </span>
            <span className="t-t">
              Indonesia Only <span className="t-s">·</span>
            </span>
          </div>
        </div>

        <section className="story" id="story">
          <div>
            <div className="ey e">Founded with purpose</div>
            <h2 className="s-h2">
              Built to be the bridge Indonesia <em>deserves.</em>
            </h2>
            <p className="s-body">
              Most companies that come to Indonesia bring a strategy. AuroMax
              came with something stronger: a genuine belief that Indonesia is
              one of the world's most extraordinary opportunities, and that the
              firms working here were not doing it justice.
            </p>
            <p className="s-body">
              The networks were thin. The expertise came from outside. The
              commitment was surface level. So we built something different:{" "}
              <strong>
                a company rooted in Indonesia, embedded in its communities
              </strong>
              , working across four of its biggest economic areas: natural
              commodities, property development, market entry, and community
              investment.
            </p>
            <p className="s-body">
              We do not advise from a distance. We work from inside Indonesia.
              Every relationship we offer, every process we guide you through,
              every project we deliver, we have done it ourselves with our own
              money and our own name on the line. That is not a sales line. It
              is just how AuroMax was built.
            </p>
            <a href="/contact" className="btn-e" style={{ marginTop: "8px" }}>
              Work with AuroMax
            </a>
          </div>
          <div>
            <div className="quote-block">
              <div className="qb-txt">
                "The opportunity in Indonesia is not something you can truly see
                from the outside. You have to be in it, living it, working it,
                before it really shows itself."
              </div>
              <div className="qb-attr">AuroMax Group · Founding Principle</div>
            </div>
            <div className="diff-list">
              <div className="di">
                <div className="di-n">01</div>
                <div>
                  <div className="di-t">Indonesia only, always</div>
                  <div className="di-b">
                    We do not spread ourselves across Asia. Indonesia is not one
                    of our markets. It is our <em>only</em> market, and that
                    focus makes us the deepest specialists here.
                  </div>
                </div>
              </div>
              <div className="di">
                <div className="di-n">02</div>
                <div>
                  <div className="di-t">Four services, one roof</div>
                  <div className="di-b">
                    Trading, property, market entry, and CSR all under one roof.
                    One partner. One point of responsibility. No passing you
                    around, no gaps between what you need and what gets
                    delivered.
                  </div>
                </div>
              </div>
              <div className="di">
                <div className="di-n">03</div>
                <div>
                  <div className="di-t">Operators, not advisors</div>
                  <div className="di-b">
                    We have registered our own company, traded commodities, and
                    developed property in Indonesia. We guide you through things
                    we have personally done ourselves.
                  </div>
                </div>
              </div>
              <div className="di">
                <div className="di-n">04</div>
                <div>
                  <div className="di-t">Built for the long term</div>
                  <div className="di-b">
                    AuroMax builds things meant to outlast any single deal or
                    moment in time. Because that is the only standard worth
                    working to.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="photo-pair">
          <div className="pp-main">
            <div className="pp-main-img"></div>
            <div className="pp-main-ov"></div>
            <div className="pp-main-txt">
              <div className="pp-lbl">What we trade</div>
              <div className="pp-stat">
                Minerals
                <br />
                &amp; More
              </div>
              <div className="pp-sub">
                Copper, gold, tobacco, seafood, agricultural goods
              </div>
            </div>
          </div>
          <div className="pp-right">
            <div className="pp-s">
              <div className="pp-n">4</div>
              <div className="pp-l">Core services under one Indonesia</div>
            </div>
            <div className="pp-s">
              <div className="pp-n">100%</div>
              <div className="pp-l">
                Focused on Indonesia, not spread across Asia
              </div>
            </div>
            <div className="pp-s">
              <div className="pp-n">LLC</div>
              <div className="pp-l">
                Fully registered &amp; compliant with Indonesian law
              </div>
            </div>
          </div>
        </div>

        <div className="mv" id="mission">
          <div className="mv-card">
            <div>
              <div className="mvc-lbl">Our mission</div>
              <div className="mvc-h">
                To be the most trusted partner for anyone working with
                Indonesia's commodities, property and market access.
              </div>
              <div className="mvc-body">
                We bring together global ambition and local expertise. The kind
                of knowledge, relationships, and hands-on work that only comes
                from being truly embedded in Indonesia's economy, its
                communities, and its future.
              </div>
            </div>
            <div className="mvc-ico">M</div>
          </div>
          <div className="mv-card">
            <div>
              <div className="mvc-lbl">Our vision</div>
              <div className="mvc-h">
                An Indonesia where its natural wealth, land and opportunity is
                truly seen and used by the world.
              </div>
              <div className="mvc-body">
                We want a future where Indonesia's potential in minerals, land,
                and commerce is no longer overlooked or undervalued. AuroMax
                wants to be the company that helped make that happen,
                responsibly, for generations to come.
              </div>
            </div>
            <div className="mvc-ico">V</div>
          </div>
        </div>

        <section className="values-section" id="values">
          <div className="vs-hdr">
            <div>
              <div className="vs-pre">Our values</div>
              <h2 className="vs-h2">
                Five words.
                <br />
                <em>Five convictions.</em>
              </h2>
            </div>
            <div className="vs-aside">
              These are not taglines. They drive every trade we make, every
              building we put up, and every partner we bring to Indonesia.
            </div>
          </div>
          <div className="val-list">
            {/* <div className="vi open" id="v1">
              <button className="vi-head" onclick="tv('v1')"> */}
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
                    "We go where the value is not where everyone else is already
                    looking."
                  </div>
                </div>
              </div>
            </div>
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
                    "The gap between Indonesia and the world is not a problem.
                    It is where we work."
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
                    "A deal is only as good as the integrity behind it. We don't
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
                    things that will not hold up. Everything AuroMax creates is
                    built to outlast us.
                  </div>
                  <div className="vi-q">
                    "We build for the generation after us, not the quarter after
                    this one."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="indo-section" id="indonesia">
          <div>
            <div className="ey e">Why Indonesia</div>
            <h2 className="is-h2">
              The opportunity the world hasn't fully <em>discovered.</em>
            </h2>
            <p className="is-body">
              Indonesia has more than 280 million people, the largest economy in
              Southeast Asia, and some of the richest reserves of nickel,
              copper, gold, and agricultural wealth anywhere on earth. It is not
              some emerging bet. It is a real powerhouse the world has quietly{" "}
              <strong>underestimated for too long.</strong>
            </p>
            <p className="is-body">
              AuroMax is here because we believe Indonesia is not just an
              opportunity for today. It is the economic story of the next
              generation, and we are placing ourselves, and our partners, right
              at the front of it.
            </p>
            <a href="/contact" className="btn-e" style={{ marginTop: "10px" }}>
              Talk to us about Indonesia
            </a>
          </div>
          <div className="indo-grid">
            <div className="ig">
              <div className="ig-n">280M+</div>
              <div className="ig-l">
                People. The largest economy in Southeast Asia
              </div>
            </div>
            <div className="ig">
              <div className="ig-n">#1</div>
              <div className="ig-l">
                In global nickel reserves, plus copper, gold and coal
              </div>
            </div>
            <div className="ig">
              <div className="ig-n">17,508</div>
              <div className="ig-l">
                Islands, with enormous stretches of land still to be developed
              </div>
            </div>
            <div className="ig">
              <div className="ig-n">2045</div>
              <div className="ig-l">
                Indonesia's target year to reach the world's top 5 economies
              </div>
            </div>
            <div className="ig" style={{ gridColumn: "span 2" }}>
              <div className="ig-n">Top 5</div>
              <div className="ig-l">
                Fastest-growing Asia-Pacific economies consistently year after
                year
              </div>
            </div>
          </div>
        </section>

        <section className="fbq">
          <div className="fbq-img"></div>
          <div className="fbq-ov"></div>
          <div className="fbq-c">
            <div className="fbq-pre">AuroMax founding conviction</div>
            <p className="fbq-q">
              "Indonesia's opportunity is not a passing trend. It is a{" "}
              <strong>permanent reality</strong> that most of the world has not
              looked at closely enough. We want to change that, responsibly, for
              generations."
            </p>
            <div className="fbq-attr">
              AuroMax Group · Est. 2024 · Indonesia
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div>
            <h2 className="cb-h2">
              Ready to work with <em>AuroMax?</em>
            </h2>
            <p className="cb-body">
              Whether you are a global buyer, a property investor, or a business
              looking to enter Indonesia, we are ready to have a real
              conversation. Every message is answered personally by our team.
            </p>
            <div className="cb-email">customerservice@auromax.group</div>
          </div>
          <div className="cb-btns">
            <a href="/contact" className="btn-e">
              Let's talk Indonesia
            </a>
            <a href="/services" className="btn-gl">
              Our four services →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
