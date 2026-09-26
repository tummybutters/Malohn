import LegalPage from "@/components/legal/LegalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How Malohn Capital Group collects, uses, shares, and protects your personal information.",
  path: "/privacy-policy",
});

const sections = [
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use it" },
  { id: "share", label: "How we share it" },
  { id: "sms", label: "Text messaging" },
  { id: "cookies", label: "Cookies and tracking" },
  { id: "retention", label: "Retention and security" },
  { id: "choices", label: "Your choices" },
  { id: "state-rights", label: "State privacy rights" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="September 24, 2026"
      updatedDate="September 24, 2026"
      sections={sections}
    >
      <div className="summary">
        <p>
          <strong>The short version:</strong> we collect the information you
          give us so we can evaluate your goals and help you pursue financing.
          We do not sell your personal information for money. We share it with
          lenders and funding partners only to help you obtain capital you have
          asked us to pursue, and we never share your text messaging opt-in
          consent with third parties for their marketing.
        </p>
      </div>

      <section id="collect">
        <h2>Information we collect</h2>
        <h3>Information you provide to us</h3>
        <ul>
          <li>
            <strong>Contact details</strong> such as your name, email address,
            phone number, and mailing address, for example when you book a
            meeting, download a guide, or fill out a form.
          </li>
          <li>
            <strong>Business and investment details</strong> such as your
            company name, entity information, industry, time in business,
            revenue, real estate portfolio, deal information, and capital goals.
          </li>
          <li>
            <strong>Financial and credit information</strong> such as income,
            assets, debts, bank statements, tax documents, and credit reports or
            credit profile details, provided by you or obtained with your
            authorization.
          </li>
          <li>
            <strong>Identity information</strong> such as date of birth,
            government issued identification, and Social Security number, when
            required by a lender or funding partner to process an application
            you have authorized.
          </li>
          <li>
            <strong>Communications</strong> including emails, messages, call
            notes, and, where permitted by law and with any required notice,
            call recordings.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            Device and browser information, IP address, general location, pages
            viewed, referring pages, and the date and time of your visit.
          </li>
          <li>
            Information collected through cookies, pixels (including the Meta
            Pixel), and similar technologies, described in the Cookies and
            tracking section below.
          </li>
        </ul>
        <h3>Information from other sources</h3>
        <p>
          We may receive information from credit bureaus (with your
          authorization), lenders and funding partners, advertising and lead
          platforms, public records, and people who refer you to us.
        </p>
      </section>

      <section id="use">
        <h2>How we use your information</h2>
        <ul>
          <li>
            To respond to inquiries, schedule and hold consultations, and
            deliver resources you request.
          </li>
          <li>
            To evaluate your credit profile, financial position, and goals, and
            to design a capital strategy.
          </li>
          <li>
            To prepare, submit, and follow up on financing applications you
            authorize.
          </li>
          <li>
            To communicate with you by phone, email, and text message about your
            inquiry or engagement, and, where you have consented, about offers
            and updates.
          </li>
          <li>
            To operate, secure, analyze, and improve our website and services,
            and to measure our advertising.
          </li>
          <li>
            To comply with legal obligations, resolve disputes, enforce our
            agreements, and prevent fraud.
          </li>
        </ul>
      </section>

      <section id="share">
        <h2>How we share your information</h2>
        <p>
          We do not sell your personal information for money. We share it only
          as described below:
        </p>
        <ul>
          <li>
            <strong>Lenders and funding partners.</strong> With your
            authorization, we share the information needed for lenders,
            financial institutions, and funding partners to review and process
            applications on your behalf. Their use of your information is
            governed by their own privacy policies.
          </li>
          <li>
            <strong>Service providers.</strong> Companies that help us run our
            business, such as CRM and scheduling software, email and text
            messaging providers, document storage, payment processing, and IT
            and security vendors. They may use your information only to perform
            services for us.
          </li>
          <li>
            <strong>Advertising and analytics partners.</strong> Partners such
            as Meta receive information about your use of our website through
            cookies and pixels to help us measure and deliver advertising.
          </li>
          <li>
            <strong>Professional advisors</strong> such as attorneys,
            accountants, and auditors.
          </li>
          <li>
            <strong>Legal and safety.</strong> When required by law, subpoena,
            or court order, or when we believe disclosure is necessary to
            protect our rights, your safety, or the safety of others.
          </li>
          <li>
            <strong>Business transfers.</strong> In connection with a merger,
            acquisition, financing, or sale of all or part of our business.
          </li>
          <li>
            <strong>With your consent</strong> or at your direction.
          </li>
        </ul>
      </section>

      <section id="sms">
        <h2>Text messaging</h2>
        <p>
          If you provide your mobile number and consent to receive text
          messages, we may send you messages about appointments, your inquiry or
          engagement, and, if you opted in, updates and offers. Message
          frequency varies. Message and data rates may apply. Consent to receive
          text messages is not a condition of any purchase.
        </p>
        <p>
          Reply <strong>STOP</strong> at any time to opt out, or{" "}
          <strong>HELP</strong> for help. You can also contact us at
          support@malohncapital.com or (646) 809-5505.
        </p>
        <p>
          <strong>
            No mobile information will be shared with third parties or
            affiliates for marketing or promotional purposes.
          </strong>{" "}
          Text messaging originator opt-in data and consent are excluded from
          all categories of sharing described in this policy and will not be
          shared with any third parties, except service providers that deliver
          messages on our behalf.
        </p>
      </section>

      <section id="cookies">
        <h2>Cookies and tracking technologies</h2>
        <p>
          We use cookies, pixels, and similar technologies to keep the website
          working, understand how visitors use it, and measure and personalize
          advertising. This includes the Meta Pixel, which lets Meta collect
          information about your visit to show you relevant ads on its
          platforms.
        </p>
        <p>
          You can block or delete cookies in your browser settings, and you can
          manage ad preferences in your Meta account settings. Some parts of the
          site may not work properly if cookies are disabled. Our website
          recognizes Global Privacy Control (GPC) signals as a request to opt
          out of the sale or sharing of personal information where required by
          law.
        </p>
      </section>

      <section id="retention">
        <h2>Retention and security</h2>
        <p>
          We keep personal information for as long as needed to provide our
          services, maintain business records, comply with legal and regulatory
          obligations, and resolve disputes, and then delete or de-identify it.
        </p>
        <p>
          We use reasonable administrative, technical, and physical safeguards
          to protect your information, including access controls and encrypted
          storage and transmission where appropriate. No method of transmission
          or storage is completely secure, so we cannot guarantee absolute
          security. Please do not send sensitive information such as Social
          Security numbers through unsecured email.
        </p>
      </section>

      <section id="choices">
        <h2>Your choices</h2>
        <ul>
          <li>
            <strong>Marketing emails:</strong> click "unsubscribe" in any
            marketing email.
          </li>
          <li>
            <strong>Text messages:</strong> reply STOP.
          </li>
          <li>
            <strong>Calls:</strong> ask us to place you on our internal do not
            call list.
          </li>
          <li>
            <strong>Access, correction, or deletion:</strong> email
            support@malohncapital.com. We may need to verify your identity
            before fulfilling your request.
          </li>
        </ul>
        <p>
          We may still send you non-marketing messages about an active
          engagement.
        </p>
      </section>

      <section id="state-rights">
        <h2>State privacy rights</h2>
        <p>
          Depending on where you live, state privacy laws may give you some or
          all of the following rights, subject to certain exceptions:
        </p>
        <ul>
          <li>
            The right to know what personal information we have collected about
            you and how we use and disclose it.
          </li>
          <li>
            The right to access or obtain a copy of your personal information.
          </li>
          <li>The right to correct inaccurate personal information.</li>
          <li>
            The right to delete personal information we collected from you.
          </li>
          <li>
            The right to opt out of targeted advertising, the sale of personal
            information, and certain profiling.
          </li>
          <li>
            The right not to be discriminated against for exercising these
            rights.
          </li>
        </ul>
        <p>
          <strong>Making a request.</strong> Email support@malohncapital.com or
          call (646) 809-5505. We will verify your identity by matching
          information you provide with information we already have. You may use
          an authorized agent, who must provide proof of your written
          permission. We respond within the time required by applicable law.
        </p>
        <p>
          <strong>Appeals.</strong> If we deny your request, you may appeal by
          replying to our decision with the subject line "Privacy Appeal."
        </p>
        <p>
          <strong>Advertising opt out.</strong> We do not sell personal
          information for money. To opt out of targeted advertising, email
          support@malohncapital.com with the subject line "Opt Out," or enable
          Global Privacy Control in your browser.
        </p>
        <p>
          <strong>Financial information.</strong> Some information we collect in
          connection with financing may be governed by the federal
          Gramm-Leach-Bliley Act and related state financial privacy laws rather
          than general state privacy laws, and is handled under those laws.
        </p>
      </section>

      <section id="children">
        <h2>Children's privacy</h2>
        <p>
          Our website and services are intended for adults and businesses. We do
          not knowingly collect personal information from anyone under 18. If
          you believe a minor has provided us information, contact us and we
          will delete it.
        </p>
      </section>

      <section id="changes">
        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will change the "Last updated" date at the top of this page, and we
          will provide additional notice where required by law. Your continued
          use of our website or services after an update means you acknowledge
          the revised policy.
        </p>
      </section>

      <section id="contact">
        <h2>Contact us</h2>
        <p>Questions or requests about this Privacy Policy can be sent to:</p>
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
