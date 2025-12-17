"use client";
import { useState } from "react";
import FadeIn from "../FadeIn";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create email subject with clear identifier
      const subject = `📧 Avora Odyssey CONTACT FORM: ${formData.name} - ${new Date().toLocaleDateString()}`;
      
      // Create email body
      const body = `
New Contact Form Submission from Avora Odyssey Website:

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

---
Sent from: Avora Odyssey Website Contact Form
Timestamp: ${new Date().toLocaleString()}
      `.trim();

      // Use mailto link as a fallback (works without backend)
      const mailtoLink = `mailto:hello@avoraodyssey.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      setSubmitMessage("📧 Email client opened! Please send the pre-filled email to complete your message.");

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        setIsSubmitting(false);
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("❌ Failed to open email client. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <FadeIn>
              <div className="mb-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                  Let's Create<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Amazing Journeys
                  </span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Get in touch with our travel experts to start planning your perfect adventure.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@avoraodyssey.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+94 11 234 5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Galle Road, Colombo 03, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Form */}
          <FadeIn>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={`w-full px-4 pt-6 pb-2 border-2 rounded-xl bg-transparent peer focus:outline-none transition-all ${
                      errors.name ? "border-red-500" : "border-gray-200 focus:border-blue-500 text-gray-500"
                    }`}
                  />
                  <label className="absolute left-4 top-2 text-sm peer-focus:text-blue-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base pointer-events-none text-gray-500">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className={`w-full px-4 pt-6 pb-2 border-2 rounded-xl bg-transparent peer focus:outline-none transition-all ${
                      errors.email ? "border-red-500" : "border-gray-200 focus:border-blue-500 text-gray-500"
                    }`}
                  />
                  <label className="absolute left-4 top-2 text-sm peer-focus:text-blue-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base pointer-events-none text-gray-500">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    rows={4}
                    className={`w-full px-4 pt-6 pb-2 border-2 rounded-xl bg-transparent peer focus:outline-none transition-all resize-none ${
                      errors.message ? "border-red-500" : "border-gray-200 focus:border-blue-500 text-gray-500"
                    }`}
                  />
                  <label className="absolute left-4 top-2 text-sm peer-focus:text-blue-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base pointer-events-none text-gray-500">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
                    isSubmitting 
                      ? "bg-gradient-to-r from-gray-500 to-gray-600" 
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Opening Email Client...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <span className="ml-2">→</span>
                    </>
                  )}
                </button>

                {/* Success/Error Message */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitMessage.includes("❌") 
                      ? "bg-red-50 text-red-700 border border-red-200" 
                      : "bg-green-50 text-green-700 border border-green-200"
                  }`}>
                    <p className="font-medium">{submitMessage}</p>
                    {submitMessage.includes("📧") && (
                      <p className="text-sm mt-2 text-green-600">
                        Email subject will be: <span className="font-mono">"📧 Avora Odyssey CONTACT FORM: [Your Name]"</span>
                      </p>
                    )}
                  </div>
                )}

                <p className="text-center text-gray-500 text-sm mt-4">
                  Fields marked with <span className="text-red-500">*</span> are required
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}