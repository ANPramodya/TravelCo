"use client";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-bold text-gray-900">
            Avora Odyssey
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            How we protect and use your personal information
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Make a booking or inquiry</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our customer service</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-gray-700">
              This may include your name, email address, phone number, passport details, 
              payment information, and travel preferences.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Booking Processing</h3>
                <p className="text-blue-800 text-sm">
                  To process your bookings, arrange services, and manage your travel itinerary.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-900 mb-2">Customer Support</h3>
                <p className="text-green-800 text-sm">
                  To provide assistance, respond to inquiries, and resolve issues.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-900 mb-2">Marketing Communications</h3>
                <p className="text-purple-800 text-sm">
                  To send promotional offers and travel updates (with your consent).
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-900 mb-2">Service Improvement</h3>
                <p className="text-orange-800 text-sm">
                  To analyze trends and improve our services and website experience.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers with restricted access</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Sharing</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with third parties only when necessary for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Flight and hotel bookings</li>
              <li>Transportation arrangements</li>
              <li>Tour operators and activity providers</li>
              <li>Legal requirements or regulatory compliance</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We ensure all third parties comply with data protection standards.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to enhance user experience. Cookies help us:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Remember Preferences</h4>
                  <p className="text-gray-600 text-sm">Store your language and currency choices</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analyze Usage</h4>
                  <p className="text-gray-600 text-sm">Understand how visitors use our site</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Improve Performance</h4>
                  <p className="text-gray-600 text-sm">Optimize website speed and functionality</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, contact us at privacy@Avora Odyssey.com
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy periodically. Significant changes will be 
              communicated through our website or email notifications. Continued use of our 
              services constitutes acceptance of the updated policy.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-gray-600 text-sm">
                  For privacy-related inquiries, contact our Data Protection Officer:
                </p>
                <p className="text-gray-900 font-medium">
                  privacy@Avora Odyssey.com
                </p>
              </div>
              <div className="text-sm text-gray-500">
                <p>Last updated: December 2024</p>
                <p>Version: 2.1</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}