import type { Metadata } from "next"
import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"

export const metadata: Metadata = {
  title: "Terms and Conditions | Barcelos South Africa",
  description:
    "Read the terms and conditions governing your use of the Barcelos South Africa website and services.",
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
                Last Updated: February 2026
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                1. Introduction and Acceptance
              </h2>
              <p className="text-charcoal-medium mb-4">
                Welcome to the Barcelos South Africa website. These Terms and
                Conditions (&ldquo;Terms&rdquo;) govern your use of our website and digital
                services. By accessing or using this website, you agree to be
                bound by these Terms.
              </p>
              <p className="text-charcoal-medium mb-6">
                If you do not agree with any amendments to these Terms and
                Conditions, you may no longer access the site. We reserve the
                right to amend these terms at any time, with notice published on
                our website.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                2. Intellectual Property Rights
              </h2>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-3">
                <li>
                  <strong>Ownership:</strong> All content on this website,
                  including but not limited to text, graphics, logos, images,
                  digital downloads, and software, is the property of Barcelos
                  or its content suppliers and is protected by South African and
                  international copyright and trademark laws.
                </li>
                <li>
                  <strong>License:</strong> You are granted a limited license to
                  access and make personal use of this website. You may not
                  download (other than page caching), modify, or reproduce any
                  portion of it without express written consent from us.
                </li>
                <li>
                  <strong>Trademarks:</strong> &ldquo;Barcelos,&rdquo; &ldquo;Barcelos Flame
                  Grilled Chicken,&rdquo; and related logos are registered trademarks.
                  They may not be used in connection with any product or service
                  that is not ours in any manner that is likely to cause
                  confusion among customers.
                </li>
                <li>
                  <strong>User Content:</strong> When you post content on our
                  platforms, you grant us an irrevocable, non-exclusive,
                  royalty-free license to use, reproduce, modify, and distribute
                  that content for business purposes.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-charcoal-medium mb-4">
                <strong>Accuracy:</strong> You agree to provide accurate,
                current, and complete information when making reservations,
                ordering food, submitting franchise inquiries, or signing up for
                communications.
              </p>
              <p className="text-charcoal-medium mb-4">
                <strong>Account Security:</strong> If you create an account, you
                are responsible for maintaining the confidentiality of your
                password and account information. You warrant that all orders
                placed with your account are made by you or with your express
                consent.
              </p>
              <p className="text-charcoal-medium mb-4">
                <strong>Prohibited Conduct:</strong> You agree not to use the
                website for any unlawful purpose, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-2">
                <li>Submitting false or misleading information.</li>
                <li>
                  Attempting to hack, destabilize, or gain unauthorized access
                  to our website, servers, or data.
                </li>
                <li>Harassing or abusing our staff or other users.</li>
                <li>
                  Using automated systems to scrape or extract data from the
                  website.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                4. Online Ordering
              </h2>
              <p className="text-charcoal-medium mb-4">
                Online ordering is provided through our partner platform,
                ServeUp. When placing orders:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-3">
                <li>
                  <strong>Order Confirmation:</strong> Once you have placed your
                  order and your payment has been authorised, you will not be
                  able to cancel your order.
                </li>
                <li>
                  <strong>Pricing:</strong> Prices listed are in South African
                  Rand (ZAR) and may exclude delivery fees. Prices are subject
                  to change without notice.
                </li>
                <li>
                  <strong>Payment:</strong> Payment card data is not stored
                  locally but is transmitted encrypted to our payment providers.
                </li>
                <li>
                  <strong>Delivery:</strong> Delivery times are estimates and
                  may vary based on location and demand. We are not liable for
                  delays beyond our reasonable control.
                </li>
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
                  <strong>Pricing Errors:</strong> While we strive for accuracy,
                  errors may occur. In the event of a pricing error, we reserve
                  the right to cancel orders placed at the incorrect price.
                </li>
                <li>
                  <strong>Allergens:</strong> While we attempt to provide
                  accurate information regarding ingredients, we cannot
                  guarantee that any product is 100% free from allergens due to
                  the risk of cross-contamination in our kitchens. Please inform
                  us of any allergies when ordering.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 mb-6 text-charcoal-medium space-y-3">
                <li>
                  <strong>&ldquo;As Is&rdquo; Basis:</strong> Your use of and reliance on
                  the website is entirely at your own risk. The website and our
                  services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
                </li>
                <li>
                  <strong>No Warranty:</strong> Barcelos does not warrant that
                  the website will be uninterrupted, error-free, or free of
                  viruses or other harmful components.
                </li>
                <li>
                  <strong>Liability Cap:</strong> To the fullest extent
                  permitted by South African law, our liability for any claim
                  arising out of your use of the website or services is limited
                  to the amount you paid us for the specific transaction giving
                  rise to the claim. We shall not be liable for indirect,
                  incidental, or consequential damages.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                7. Third-Party Links and Services
              </h2>
              <p className="text-charcoal-medium mb-6">
                Our website may contain links to third-party websites or
                services, including our ordering partner ServeUp and social
                media platforms. We are not responsible for the content,
                privacy practices, or terms of service of these third-party
                sites. Your use of third-party services is at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                8. Privacy and Data Protection
              </h2>
              <p className="text-charcoal-medium mb-6">
                Your use of this website is also governed by our Privacy Policy,
                which explains how we collect, use, and protect your personal
                information in compliance with the Protection of Personal
                Information Act (POPIA). Location data and analytics may be used
                to improve our services but are not stored indefinitely.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                9. Franchise Inquiries
              </h2>
              <p className="text-charcoal-medium mb-6">
                Information provided through our franchise inquiry form is used
                solely for the purpose of evaluating potential franchise
                opportunities. By submitting an inquiry, you consent to being
                contacted by our franchise development team. All franchise
                discussions are subject to separate franchise agreements.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                10. Governing Law and Jurisdiction
              </h2>
              <p className="text-charcoal-medium mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of the Republic of South Africa.
              </p>
              <p className="text-charcoal-medium mb-6">
                <strong>Dispute Resolution:</strong> Any dispute arising out of
                or in connection with these Terms shall be subject to the
                exclusive jurisdiction of the courts of the Republic of South
                Africa.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-charcoal-medium mb-6">
                We reserve the right to modify these Terms at any time. Any
                changes will be effective immediately upon posting on the
                website. Your continued use of the website constitutes
                acceptance of the modified Terms.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                12. Contact Us
              </h2>
              <p className="text-charcoal-medium mb-4">
                If you have any questions regarding these Terms, please contact
                us at:
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
