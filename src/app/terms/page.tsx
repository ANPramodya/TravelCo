"use client";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-bold text-gray-900">
            TravelCo
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
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: December 2024
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using TravelCo's services, you agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Booking and Reservations</h2>
            <p className="text-gray-700 mb-4">
              All bookings are subject to availability. A booking is considered confirmed only after 
              we receive full payment or the required deposit. Prices are subject to change without 
              notice until the booking is confirmed.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Deposit must be paid within 7 days of booking confirmation</li>
              <li>Balance payment is due 30 days before departure</li>
              <li>Cancellations must be made in writing</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cancellation Policy</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cancellation Period</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cancellation Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">60+ days before departure</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20% of total cost</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">30-59 days before departure</td>
                    <td className="px-4 py-3 text-sm text-gray-700">50% of total cost</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Less than 30 days</td>
                    <td className="px-4 py-3 text-sm text-gray-700">100% of total cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Travel Insurance</h2>
            <p className="text-gray-700 mb-4">
              We strongly recommend that all travelers purchase comprehensive travel insurance. 
              TravelCo is not responsible for any losses, accidents, damages, injuries, or delays 
              that may occur during your trip.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liability Limitations</h2>
            <p className="text-gray-700 mb-4">
              TravelCo acts as an intermediary between travelers and service providers. We are not 
              liable for any acts, omissions, or negligence of third-party service providers including 
              airlines, hotels, transportation companies, or tour guides.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Itinerary</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify itineraries due to unforeseen circumstances including 
              weather conditions, political unrest, or other events beyond our control. Alternative 
              arrangements will be made whenever possible.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Travel Documents</h2>
            <p className="text-gray-700 mb-4">
              It is the traveler's responsibility to ensure they have valid passports, visas, and 
              other required travel documents. TravelCo is not responsible for any denial of entry 
              or transit due to improper documentation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these terms shall be governed by the laws of Sri Lanka. 
              Parties agree to attempt mediation before pursuing legal action.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              For any questions regarding these Terms & Conditions, please contact us at 
              <a href="mailto:legal@travelco.com" className="text-blue-600 hover:text-blue-800 ml-1">
                legal@travelco.com
              </a>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}