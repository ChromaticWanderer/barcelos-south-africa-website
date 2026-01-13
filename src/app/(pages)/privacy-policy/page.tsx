import type { Metadata } from "next"
import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"

export const metadata: Metadata = {
  title: "Privacy Policy | Barcelos India",
  description:
    "Learn how Barcelos India collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <PageHeader
          title="Privacy Policy"
          subtitle="Your privacy matters to us"
        />

        <section className="py-12 md:py-16">
          <div className="container-wide max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-charcoal-light mb-8">
                Last Updated: 18/12/2025
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-charcoal-medium mb-6">
                Welcome to Barcelos. We are committed to protecting your privacy
                and ensuring your personal data is handled safely and
                responsibly. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website, use our services, or dine at our locations.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                2. Who We Are (Data Controllers)
              </h2>
              <p className="text-charcoal-medium mb-4">
                Your data is jointly controlled and managed by the brand owner
                and the local operating partner to ensure seamless service
                delivery and brand quality.
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <p className="font-semibold text-charcoal mb-2">
                  Global Brand Owner:
                </p>
                <p className="text-charcoal-medium mb-4">
                  Merlot Investments Limited
                  <br />
                  212 St. James Court, Rue St. Denis, Port Louis, Mauritius.
                </p>
                <p className="font-semibold text-charcoal mb-2">
                  Local Operating Partner (India):
                </p>
                <p className="text-charcoal-medium">
                  Masala Country Hospitality LLP
                  <br />
                  405B, Pinnacle Business Tower, Shooting Range Road, Suraj
                  Kund, Faridabad, Haryana 121009, India.
                  <br />
                  (LLP Identification No: AAK-0811)
                </p>
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                3. How We Process and Store Your Data
              </h2>
              <p className="text-charcoal-medium mb-4">
                To provide our services efficiently, we use third-party
                automation and storage providers. By submitting your
                information, you acknowledge that your data will be processed
                through the following systems:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>
                  <strong>Make (formerly Integromat):</strong> We use Make.com
                  to automate the transfer of your data from our collection
                  points to our internal databases. Make.com acts as a data
                  processor and transmits data securely.
                </li>
                <li>
                  <strong>Google Workspace (Google Sheets):</strong> Your data
                  is securely stored in Google Sheets, which acts as our central
                  database. This data is accessible only to authorized personnel
                  from Merlot Investments Limited and Masala Country Hospitality
                  LLP for operational and customer service purposes.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                4. International Data Transfers
              </h2>
              <p className="text-charcoal-medium mb-6">
                Your personal information may be transferred to, and maintained
                on, computers located outside of your state, province, country,
                or other governmental jurisdiction where the data protection
                laws may differ than those from your jurisdiction.
              </p>
              <p className="text-charcoal-medium mb-6">
                Specifically, data is shared between our entities in Mauritius
                and India, and processed on servers (via Google and Make) that
                may be located in the United States or Europe. We take all
                necessary steps to ensure that your data is treated securely and
                in accordance with this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                5. Purpose of Data Collection
              </h2>
              <p className="text-charcoal-medium mb-4">
                We collect and process your personal data for the following
                distinct purposes:
              </p>

              <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">
                A. Operational & Service Delivery (Masala Country Hospitality
                LLP)
              </h3>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>
                  <strong>Process Orders & Reservations:</strong> Facilitate
                  table bookings, takeaway orders, and delivery requests.
                </li>
                <li>
                  <strong>Customer Support:</strong> Respond to inquiries,
                  complaints, or feedback.
                </li>
                <li>
                  <strong>Loyalty & Rewards:</strong> Manage your participation
                  in loyalty programs.
                </li>
                <li>
                  <strong>Local Communication:</strong> Send updates regarding
                  the status of your order or reservation.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">
                B. Brand Oversight & Quality Assurance (Merlot Investments
                Limited)
              </h3>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>
                  <strong>Quality Control:</strong> Monitor feedback to ensure
                  local outlets meet global brand standards.
                </li>
                <li>
                  <strong>Global Analytics:</strong> Analyze anonymized data to
                  understand market trends and improve our menu globally.
                </li>
                <li>
                  <strong>Intellectual Property Protection:</strong> Safeguard
                  the integrity of the Barcelos trademark.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">
                C. Legal Compliance
              </h3>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>
                  <strong>Compliance:</strong> Fulfill tax, accounting, and
                  regulatory requirements in India and Mauritius.
                </li>
                <li>
                  <strong>Dispute Resolution:</strong> Address legal claims or
                  disputes arising from your use of our services.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                6. Your Rights Regarding Your Data
              </h2>
              <p className="text-charcoal-medium mb-4">
                Under applicable data protection laws (including the Digital
                Personal Data Protection Act of India and the Mauritius Data
                Protection Act), you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>Access a summary of your personal data.</li>
                <li>Correct inaccurate or incomplete information.</li>
                <li>
                  Erase your personal data from our records (Right to be
                  Forgotten).
                </li>
                <li>Withdraw Consent for marketing communications.</li>
              </ul>
              <div className="bg-barcelos-red/5 border border-barcelos-red/20 p-6 rounded-lg mb-6">
                <p className="font-semibold text-charcoal mb-2">
                  How to Exercise Your Rights:
                </p>
                <p className="text-charcoal-medium">
                  To exercise these rights, please submit a written request. We
                  will acknowledge your request within 24 hours.
                </p>
                <p className="text-charcoal-medium mt-2">
                  <strong>Email:</strong> barcelos.india@barcelos.com
                  <br />
                  <strong>Subject Line:</strong> "Data Privacy Request - [Your
                  Name]"
                </p>
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                7. Grievance Redressal
              </h2>
              <p className="text-charcoal-medium mb-4">
                In accordance with the Digital Personal Data Protection Act,
                2023 (India), if you have any concerns regarding how your
                personal data is being processed, please contact our designated
                Grievance Officer:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <p className="text-charcoal-medium">
                  <strong>Grievance Officer:</strong> Mr. Jared Mazzis
                  <br />
                  <strong>Email:</strong> barcelos.india@barcelos.com
                  <br />
                  <strong>Address:</strong> 405B, Pinnacle Business Tower,
                  Shooting Range Road, Suraj Kund, Faridabad, Haryana 121009,
                  India.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                8. Cookie Policy
              </h2>
              <p className="text-charcoal-medium mb-4">
                Our website uses cookies to enhance your experience.
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website
                  to function (e.g., logging in, ordering).
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used to analyze site
                  traffic and improve our services (e.g., Google Analytics).
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to show relevant ads
                  on third-party platforms.
                </li>
              </ul>
              <p className="text-charcoal-medium">
                You can manage your cookie preferences through your browser
                settings.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
