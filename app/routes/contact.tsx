import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact AuroMax — Trust First. Desire Always.</title>
        <meta
          name="description"
          content="Get in touch with AuroMax Group. 
          Every message is answered personally within 1 to 2 business days. Trust First. Desire Always."
        />
        <meta
          property="og:title"
          content="Contact AuroMax Group — Talk to Indonesia"
        />
        <meta
          property="og:description"
          content="Every AuroMax conversation starts with honesty. Reach out today and we will respond personally within 1 to 2 business days."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="contact-page">
        <section className="hero">
          <div className="h-img"></div>
          <div className="h-ov"></div>
          <div className="h-content">
            <div>
              <div className="hc-pre a1">AuroMax Group: Get in touch</div>
              <h1 className="hc-h1 a2">
                <span className="ghost">Talk to</span>Indonesia
                <span className="hc-dot"></span>
              </h1>
            </div>
            <div className="hc-right a3">
              <div className="hc-slogan">Trust First. Desire Always.</div>
              <p className="hc-sub">
                Every AuroMax conversation starts the same way: with{" "}
                <em>honesty</em>. We will tell you exactly what we can do, how
                we do it, and whether we are the right fit for what you are
                trying to do in Indonesia.
              </p>
              <div className="hc-direct">
                customerservice@auromax.group · Response within 1 to 2 business
                days
              </div>
            </div>
          </div>
        </section>

        <section className="contact-body">
          <div className="cb-left">
            <div>
              <div className="cbl-pre">Get in touch</div>
              <h2 className="cbl-h2">
                Let's talk about <em>Indonesia.</em>
              </h2>
              <p className="cbl-body">
                Whether you are an established importer, a property investor, a
                business coming to Indonesia for the first time, or just curious
                about what AuroMax does, every conversation starts here. We do
                not use scripts. We have real conversations with real answers.
              </p>
            </div>
            <div>
              <div className="eq-types">
                <div className="eq">
                  <div
                    className="eq-icon"
                    style={{ background: "rgba(45,90,27,.35)" }}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="eq-title">Trading &amp; Commodities</div>
                    <div className="eq-body">
                      Sourcing minerals, tobacco, agricultural products or
                      seafood from Indonesia, or looking to connect with
                      verified Indonesian suppliers.
                    </div>
                  </div>
                </div>
                <div className="eq">
                  <div
                    className="eq-icon"
                    style={{ background: "rgba(201,168,76,.2)" }}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="eq-title">Property Development</div>
                    <div className="eq-body">
                      Investing in Indonesian property, partnering on a
                      development, or exploring land in Lombok or Sumbawa.
                    </div>
                  </div>
                </div>
                <div className="eq">
                  <div
                    className="eq-icon"
                    style={{ background: "rgba(201,94,58,.2)" }}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="eq-title">Market Entry (MES)</div>
                    <div className="eq-body">
                      Setting up your business in Indonesia, registration,
                      finding distributors, compliance, trade facilitation, or
                      managing money flow.
                    </div>
                  </div>
                </div>
                <div className="eq">
                  <div
                    className="eq-icon"
                    style={{ background: "rgba(168,198,134,.1)" }}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="eq-title">Partnership &amp; General</div>
                    <div className="eq-body">
                      CSR collaboration, media, or any other serious
                      conversation about Indonesia and AuroMax.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cbl-direct">
              <div className="cd-lbl">Direct email</div>
              <div className="cd-email">customerservice@auromax.group</div>
              <div className="cd-note">
                Every message answered personally within 1 to 2 business days
              </div>
              <div className="cd-loc">
                <div className="cd-loc-lbl">Based in</div>
                <div className="cd-loc-txt">
                  Indonesia, operating across Lombok, Sumbawa and nationally
                </div>
              </div>
            </div>
          </div>

          <div className="cb-right">
            <div className="cfr-title">Send us a message</div>
            <div className="cfr-sub">
              Fill in the form below and a real person from the AuroMax team
              will respond, not an automated system.
            </div>
            <form
              action="https://formspree.io/f/xgobvvvr"
              method="POST"
              onSubmit={handleSub}
            >
              <div className="form-row">
                <div className="fg">
                  <label htmlFor="firstname">First name</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="fg">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="fg">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
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
              <div className="form-row">
                <div className="fg">
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    type="text"
                    placeholder="Where are you based?"
                  />
                </div>
                <div className="fg">
                  <label htmlFor="service">I'm enquiring about</label>
                  <select id="service">
                    <option value="" disabled selected>
                      Select a service
                    </option>
                    <option>Trading &amp; Commodities</option>
                    <option>Property Development</option>
                    <option>Market Entry (MES)</option>
                    <option>CSR &amp; Community</option>
                    <option>Partnership</option>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>
              <div className="fg full">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  placeholder="Tell us what you are trying to achieve in Indonesia and how AuroMax might help. The more you share, the more useful our reply will be."
                ></textarea>
              </div>
              <div className="form-guarantee">
                <div className="fg-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <div className="fg-txt">
                  Every message is read by a real person. We reply within 1 to 2
                  business days. Your information is never shared. Trust first
                  always.
                </div>
              </div>
              <button
                type="submit"
                className="form-submit"
                disabled={submitted}
                style={{
                  background: submitted ? "var(--jade)" : "",
                }}
              >
                {submitted
                  ? "Sent, we will be in touch within 1 to 2 business days."
                  : "Send message →"}
              </button>
              <div className="form-note">
                AuroMax will only use your information to reply to this message.{" "}
                <a href="#" style={{ color: "inherit" }}>
                  Privacy policy
                </a>
                .
              </div>
            </form>
          </div>
        </section>

        <section className="next">
          <div className="nx-head">
            <div className="nx-pre">What happens next</div>
            <h2 className="nx-h2">
              From first message
              <br />
              to first deal.
            </h2>
          </div>
          <div className="nx-steps">
            <div className="nxs">
              <div className="nxs-n">01</div>
              <div className="nxs-t">We read your message</div>
              <div className="nxs-b">
                A real person reads every message, not an algorithm. We take
                time to understand what you are actually trying to do in
                Indonesia.
              </div>
            </div>
            <div className="nxs">
              <div className="nxs-n">02</div>
              <div className="nxs-t">We respond personally</div>
              <div className="nxs-b">
                Within 1 to 2 business days, a member of the AuroMax team will
                be in touch with a direct, honest response. Trust first that is
                our promise.
              </div>
            </div>
            <div className="nxs">
              <div className="nxs-n">03</div>
              <div className="nxs-t">We have a real conversation</div>
              <div className="nxs-b">
                We will ask the right questions, listen carefully, and tell you
                honestly what we can do and how we would approach working
                together. No scripts.
              </div>
            </div>
            <div className="nxs">
              <div className="nxs-n">04</div>
              <div className="nxs-t">We get to work</div>
              <div className="nxs-b">
                If we are the right fit, we move quickly. AuroMax does not do
                endless meetings. We do decisions, agreements, and results.
              </div>
            </div>
          </div>
        </section>
        <div className="promise">
          <div className="promise-txt">
            "Every conversation with AuroMax starts with{" "}
            <strong>honesty</strong> about what we can do, what we cannot, and
            whether we are the right fit for what you are building in Indonesia.{" "}
            <strong>Trust first.</strong> That is not a tagline. It is how we
            actually operate."
          </div>
          <div className="promise-detail">
            AuroMax Group Ltd
            <br />
            Indonesia
            <br />
            Est. 2024
            <br />
            <br />
            Trust First.
            <br />
            Desire Always.
          </div>
        </div>
      </div>
    </>
  );
}
