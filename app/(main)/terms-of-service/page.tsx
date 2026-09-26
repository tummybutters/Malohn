import LegalPage from "@/components/legal/LegalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Malohn Capital Group website, SMS program, and services.",
  path: "/terms-of-service",
});

const sections = [
  { id: "agreement", label: "Agreement to these terms" },
  { id: "services", label: "Our services" },
  { id: "sms", label: "SMS messaging terms" },
  { id: "calls", label: "Calls and email" },
  { id: "info", label: "Information you provide" },
  { id: "ip", label: "Intellectual property" },
  { id: "third-party", label: "Third party sites" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnification" },
  { id: "termination", label: "Termination" },
  { id: "disputes", label: "Disputes and governing law" },
  { id: "general", label: "General" },
  { id: "contact", label: "Contact us" },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="September 24, 2026"
      updatedDate="September 24, 2026"
      sections={sections}
    >
      <div className="summary">
        <p>
          <strong>The short version:</strong> We help you pursue financing, but
          we cannot guarantee approval, amounts, rates, or terms. Nothing on
          this website is a guarantee of funding or financial advice. If you
          sign an engagement agreement with us, that agreement controls your
          fees and services.
        </p>
      </div>

      <section id="agreement">
        <h2>Agreement to these terms</h2>
        <p>
          These Terms of Service ("Terms") govern your use of malohncapital.com
          and its subdomains, including our booking pages (the "Site"), our SMS
          messaging program, and related communications, operated by Malohn
          Capital Group ("MCG," "we," "us," or "our"). By accessing or using the
          Site, you agree to these Terms and to our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. If you do not agree, do
          not use the Site.
        </p>
        <p>
          You must be at least 18 years old to use the Site or our services.
        </p>
        <p>
          We may update these Terms from time to time by posting the revised
          version on this page with a new "Last updated" date. Your continued
          use of the Site after changes are posted means you accept the revised
          Terms.
        </p>
      </section>

      <section id="services">
        <h2>Our services</h2>
        <p>
          <strong>No guarantee of funding.</strong> We do not guarantee that you
          will be approved for any financing, or that you will receive any
          particular amount, rate, term, or timeline. Examples, funding amounts,
          rates, timelines, and past transactions shown on the Site are for
          illustration only, reflect specific circumstances, and are not a
          promise or prediction of your results. Rates and programs change
          without notice.
        </p>
        <p>
          <strong>Not financial, legal, or tax advice.</strong> Content on the
          Site, including guides and downloadable resources, is general
          information only. It is not investment, legal, tax, or accounting
          advice. Consult your own qualified advisors before making financial
          decisions. All investments and borrowing involve risk, including the
          risk of loss.
        </p>
        <p>
          <strong>Engagement agreements control.</strong> If you enter into a
          separate written engagement or services agreement with MCG, that
          agreement governs the scope of services, fees, payment terms, and any
          refunds. If it conflicts with these Terms, the engagement agreement
          controls.
        </p>
      </section>

      <section id="sms">
        <h2>SMS messaging terms</h2>
        <p>
          <strong>Program description.</strong> Malohn Capital Group sends text
          messages to people who provide their mobile number through our website
          forms or booking pages and check the box consenting to receive texts.
          Messages include appointment confirmations and reminders, rescheduling
          updates, updates about your inquiry or engagement, and customer
          support. If you separately opted in to marketing messages, we may also
          send occasional offers and updates about our services.
        </p>
        <p>
          <strong>Consent.</strong> Consent to receive text messages is not a
          condition of any purchase or service.
        </p>
        <p>
          <strong>Opting out.</strong> Text <strong>STOP</strong> to the number
          that messaged you at any time. We will send one message confirming you
          are unsubscribed, and you will receive no further texts. To rejoin,
          opt in again the same way you originally did.
        </p>
        <p>
          <strong>Help.</strong> Text <strong>HELP</strong> for assistance, or
          contact us at{" "}
          <a href="mailto:support@malohncapital.com">
            support@malohncapital.com
          </a>{" "}
          or <a href="tel:+16468095505">(646) 809-5505</a>.
        </p>
        <p>
          <strong>Rates and frequency.</strong> Message and data rates may
          apply. Message frequency varies based on your appointments and
          engagement. Contact your wireless provider with questions about your
          plan.
        </p>
        <p>
          <strong>Carriers.</strong> Supported on all major U.S. carriers,
          including AT&amp;T, T-Mobile, and Verizon, and most regional carriers.
          Carriers are not liable for delayed or undelivered messages.
        </p>
        <p>
          <strong>Privacy.</strong> See our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. No mobile information
          will be shared with third parties or affiliates for marketing or
          promotional purposes.
        </p>
      </section>

      <section id="calls">
        <h2>Calls and email</h2>
        <p>
          By providing your phone number and email address, you agree that MCG
          may contact you by phone and email about your inquiry, appointments,
          and services. Where required by law, we will obtain your separate
          consent before contacting you with marketing calls. You may ask us to
          stop calling or emailing you at any time.
        </p>
      </section>

      <section id="info">
        <h2>Information you provide</h2>
        <p>
          You agree that all information you provide to us, including financial,
          business, credit, and identity information, is accurate, current, and
          complete, and that you are authorized to provide it. You understand
          that lenders rely on this information, and that providing false or
          misleading information may result in denied applications and may
          violate law. Our handling of your information is described in our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <p>
          If you post or send us comments, testimonials, or reviews intended for
          public display, you grant us a non-exclusive, royalty free license to
          use, reproduce, and display them in connection with our business. This
          license does not apply to application materials, financial documents,
          or other private information you provide to us for services.
        </p>
      </section>

      <section id="ip">
        <h2>Intellectual property</h2>
        <p>
          The Site and its content, including text, graphics, logos, videos,
          guides, and downloadable materials, are owned by MCG or its licensors
          and protected by copyright, trademark, and other laws. You may view
          and print pages and download resources for your own informational use.
          You may not copy, modify, republish, distribute, sell, or create
          derivative works from any Site content without our written permission.
        </p>
        <p>
          You may not use the Site in any unlawful way, attempt to gain
          unauthorized access to it, interfere with its operation, or use bots,
          scrapers, or other automated means to collect content from it.
        </p>
      </section>

      <section id="third-party">
        <h2>Third party sites and services</h2>
        <p>
          The Site may link to or integrate third party websites and services,
          including scheduling tools and lender or partner platforms. We do not
          control and are not responsible for their content, policies, or
          practices, and a link is not an endorsement. Your dealings with
          lenders and other third parties, including loan agreements, are solely
          between you and them.
        </p>
      </section>

      <section id="disclaimers">
        <h2>Disclaimers</h2>
        <p>
          The Site and all content, products, and services offered through it
          are provided "as is" and "as available," without warranties of any
          kind, express or implied, including warranties of merchantability,
          fitness for a particular purpose, accuracy, and non-infringement, to
          the fullest extent permitted by law. We do not warrant that the Site
          will be uninterrupted, error free, or free of harmful components.
        </p>
      </section>

      <section id="liability">
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, MCG and its owners, officers,
          employees, and agents will not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or for lost profits, lost
          opportunities, or loss of data, arising from your use of the Site or
          reliance on its content, even if advised of the possibility of such
          damages. Our total liability for any claim arising from your use of
          the Site will not exceed one hundred U.S. dollars ($100). Liability
          relating to services provided under an engagement agreement is
          governed by that agreement.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations, so some of the
          above may not apply to you.
        </p>
      </section>

      <section id="indemnity">
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless MCG and its owners, officers,
          employees, and agents from any claims, damages, liabilities, costs,
          and expenses, including reasonable attorneys' fees, arising from your
          violation of these Terms, your misuse of the Site, or inaccurate
          information you provide.
        </p>
      </section>

      <section id="termination">
        <h2>Termination</h2>
        <p>
          We may suspend or end your access to the Site at any time, without
          notice, if we believe you have violated these Terms or acted
          unlawfully. Sections that by their nature should survive, including
          those on disclaimers, limitation of liability, indemnification, and
          disputes, survive termination.
        </p>
      </section>

      <section id="disputes">
        <h2>Disputes and governing law</h2>
        <p>
          These Terms are governed by the laws of the State of New York, without
          regard to conflict of law rules. Before filing any claim, you agree to
          contact us at{" "}
          <a href="mailto:support@malohncapital.com">
            support@malohncapital.com
          </a>{" "}
          and try in good faith to resolve the dispute informally for at least
          30 days.
        </p>
        <p>
          Any dispute that is not resolved informally will be resolved by
          binding individual arbitration administered by the American
          Arbitration Association under its applicable rules, except that either
          party may bring an individual claim in small claims court.{" "}
          <strong>
            You and MCG each waive the right to a jury trial and to participate
            in a class or representative action.
          </strong>{" "}
          If a separate engagement agreement contains its own dispute resolution
          terms, those terms control for disputes arising under that agreement.
        </p>
      </section>

      <section id="general">
        <h2>General</h2>
        <p>
          These Terms, together with our Privacy Policy and any engagement
          agreement you sign with us, are the entire agreement between you and
          MCG regarding the Site. If any provision is found unenforceable, the
          rest remains in effect. Our failure to enforce any provision is not a
          waiver. You may not assign these Terms without our consent.
        </p>
      </section>

      <section id="contact">
        <h2>Contact us</h2>
        <p>Questions about these Terms can be sent to:</p>
        <div className="contact-block">
          <p>
            <strong>Malohn Capital Group</strong>
          </p>
          <p>
            48 Wall Street, Suite 1100-21
            <br />
            New York, NY 10005
          </p>
          <p>
            <a href="mailto:support@malohncapital.com">
              support@malohncapital.com
            </a>
          </p>
          <p>
            <a href="tel:+16468095505">(646) 809-5505</a>
          </p>
        </div>
      </section>
    </LegalPage>
  );
}
