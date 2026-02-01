import type { Metadata } from "next"
import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"

export const metadata: Metadata = {
  title: "Privacy Policy | Barcelos South Africa",
  description:
    "Learn how Barcelos South Africa collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
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
                Last Updated: February 2026
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                1. Data Protection
              </h2>
              <p className="text-charcoal-medium mb-6">
                Protecting personal rights is integral to our corporate culture and built into our services and products. Barcelos is committed to ensuring that your privacy is protected. This policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                2. Collection and Use of Personal Data
              </h2>

              <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">
                Server Information
              </h3>
              <p className="text-charcoal-medium mb-4">
                Our web servers temporarily log domain names, IP addresses, access dates, file requests, HTTP response codes, and referral sources. This information is collected for system security purposes and to ensure the proper functioning of our website.
              </p>

              <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">
                Cookies
              </h3>
              <p className="text-charcoal-medium mb-4">
                Our website uses cookies to customize your user experience. Cookies do not give us access to your system or your personal data. You can disable cookies through your browser settings, though this may affect some website functionality.
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly (e.g., session management, ordering).
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used to analyze site traffic and improve our services.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings and preferences for a better experience.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">
                Personal Information
              </h3>
              <p className="text-charcoal-medium mb-6">
                We do not collect personal data such as your name, address, phone number, or e-mail address unless you provide this information voluntarily. This includes when you submit information requests, participate in competitions, download vouchers, or complete our franchise inquiry form.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                3. Data Usage
              </h2>
              <p className="text-charcoal-medium mb-4">
                Personal data provided to us is used solely for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>Technical administration of the website</li>
                <li>Fulfilling your requests and inquiries</li>
                <li>Processing franchise applications</li>
                <li>Customer support and service delivery</li>
                <li>Marketing communications (only with your express consent)</li>
              </ul>
              <p className="text-charcoal-medium mb-6">
                Any use for marketing purposes requires your express consent and complies with South African legal requirements, including the Protection of Personal Information Act (POPIA).
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                4. Data Disclosure
              </h2>
              <p className="text-charcoal-medium mb-6">
                Your personal data is only disclosed to official agencies when legally required. All employees with access to personal data are bound to confidentiality. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                5. Data Security
              </h2>
              <p className="text-charcoal-medium mb-6">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes secure data transmission, access controls, and regular security assessments.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                6. Your Rights (POPIA Compliance)
              </h2>
              <p className="text-charcoal-medium mb-4">
                Under the Protection of Personal Information Act (POPIA), you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to the processing of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                7. Freedom of Information
              </h2>
              <p className="text-charcoal-medium mb-6">
                You may request written information about your stored personal data at any time by contacting us. We will respond to your request within a reasonable timeframe as required by law.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                8. Third-Party Services
              </h2>
              <p className="text-charcoal-medium mb-6">
                Our website may contain links to third-party websites or integrate with third-party services (such as ServeUp for online ordering). We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you use.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-charcoal-medium mb-6">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website following any changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                10. Contact Us
              </h2>
              <p className="text-charcoal-medium mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights regarding your personal data, please contact us:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-charcoal-medium">
                  <strong>Barcelos Head Office</strong>
                  <br />
                  <strong>Phone:</strong> +27 12 6600 450
                  <br />
                  <strong>Email:</strong> customer@barcelos.co.za
                  <br />
                  <strong>Website:</strong> www.barcelos.co.za
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
