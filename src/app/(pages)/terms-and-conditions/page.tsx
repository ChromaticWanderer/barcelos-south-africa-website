import type { Metadata } from "next"
import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"

export const metadata: Metadata = {
  title: "Terms and Conditions | Barcelos India",
  description:
    "Read the terms and conditions governing your use of the Barcelos India website and services.",
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <PageHeader
          title="Terms and Conditions"
          subtitle="Please read these terms carefully"
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
                Welcome to the Barcelos India website. These Terms and
                Conditions ("Terms") govern your use of our website and digital
                services. By accessing or using this website, you agree to be
                bound by these Terms. If you do not agree with any part of these
                Terms, you must not use our services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                2. Operating Entities
              </h2>
              <p className="text-charcoal-medium mb-4">
                This website is operated specifically for the Indian market
                through a partnership between:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <p className="text-charcoal-medium">
                  <strong>The Brand Owner:</strong> Merlot Investments Limited
                  (Mauritius), owner of the "Barcelos" trademark and
                  intellectual property.
                </p>
                <p className="text-charcoal-medium mt-3">
                  <strong>The Local Operator:</strong> Masala Country Hospitality
                  LLP (India), responsible for daily operations, order
                  fulfillment, and management of Barcelos outlets in India.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                3. Intellectual Property Rights
              </h2>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-3">
                <li>
                  <strong>Ownership:</strong> All content on this website,
                  including but not limited to text, graphics, logos, images,
                  digital downloads, and software, is the property of Merlot
                  Investments Limited or its content suppliers and is protected
                  by international copyright and trademark laws.
                </li>
                <li>
                  <strong>License:</strong> You are granted a limited license to
                  access and make personal use of this website. You may not
                  download (other than page caching), modify, or reproduce any
                  portion of it without express written consent from us.
                </li>
                <li>
                  <strong>Trademarks:</strong> "Barcelos," "Barcelos Flame
                  Grilled Chicken," and related logos are registered trademarks
                  of Merlot Investments Limited. They may not be used in
                  connection with any product or service that is not ours in any
                  manner that is likely to cause confusion among customers.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                4. Use of Services
              </h2>
              <p className="text-charcoal-medium mb-4">
                <strong>Accuracy:</strong> You agree to provide accurate,
                current, and complete information when making reservations,
                ordering food, or signing up for newsletters.
              </p>
              <p className="text-charcoal-medium mb-4">
                <strong>Prohibited Conduct:</strong> You agree not to use the
                website for any unlawful purpose, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>Submitting false or misleading information.</li>
                <li>
                  Attempting to hack, destabilize, or gain unauthorized access
                  to our website, servers (including Google Sheets/Make.com
                  integrations), or data.
                </li>
                <li>Harassing or abusing our staff or other users.</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                5. Products, Pricing, and Availability
              </h2>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-3">
                <li>
                  <strong>Menu Items:</strong> All products and menu items are
                  subject to availability. We reserve the right to discontinue
                  any item at any time.
                </li>
                <li>
                  <strong>Pricing:</strong> Prices listed on the website are in
                  Indian Rupees (INR) and are subject to change without notice.
                  While we strive for accuracy, errors may occur; in the event
                  of a pricing error, we reserve the right to cancel orders
                  placed at the incorrect price.
                </li>
                <li>
                  <strong>Allergens:</strong> While we attempt to provide
                  accurate information regarding ingredients, we cannot
                  guarantee that any product is 100% free from allergens due to
                  the risk of cross-contamination in our kitchens.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-3">
                <li>
                  <strong>"As Is" Basis:</strong> This website and our services
                  are provided on an "as is" and "as available" basis.
                </li>
                <li>
                  <strong>No Warranty:</strong> Neither Merlot Investments
                  Limited nor Masala Country Hospitality LLP warrants that the
                  website will be uninterrupted, error-free, or free of viruses.
                </li>
                <li>
                  <strong>Liability Cap:</strong> To the fullest extent
                  permitted by law, our liability for any claim arising out of
                  your use of the website or services is limited to the amount
                  you paid us for the specific transaction giving rise to the
                  claim. We shall not be liable for indirect, incidental, or
                  consequential damages.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-charcoal-medium mb-6">
                Our website may contain links to third-party websites or
                services (e.g., delivery aggregators like Zomato/Swiggy or
                social media platforms). We are not responsible for the content
                or privacy practices of these third-party sites.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                8. Governing Law and Jurisdiction
              </h2>
              <p className="text-charcoal-medium mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of India.
              </p>
              <p className="text-charcoal-medium mb-6">
                <strong>Dispute Resolution:</strong> Any dispute arising out of
                or in connection with these Terms shall be subject to the
                exclusive jurisdiction of the courts located in Faridabad,
                Haryana.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-charcoal-medium mb-6">
                We reserve the right to modify these Terms at any time. Any
                changes will be effective immediately upon posting on the
                website. Your continued use of the website constitutes
                acceptance of the modified Terms.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                10. Contact Us
              </h2>
              <p className="text-charcoal-medium mb-4">
                If you have any questions regarding these Terms, please contact
                us at:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-charcoal-medium">
                  <strong>Email:</strong> barcelos.india@barcelos.com
                  <br />
                  <strong>Address:</strong> Masala Country Hospitality LLP,
                  405B, Pinnacle Business Tower, Shooting Range Road, Suraj
                  Kund, Faridabad, Haryana 121009, India.
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
