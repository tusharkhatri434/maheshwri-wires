import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
const Connect = () => {
  return <div className="flex flex-col">
      <div className="bg-gray-50 pt-24 pb-16 py-[70px] my-0">
        <div className="container">
          <SectionHeading title="Connect With Us" subtitle="Let's build a connection that lasts" />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="md:grid md:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="col-span-3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Looking for customized wire solutions? Submit your enquiry and our team will reach out within 24 hours.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>

            {/* Contact Details */}
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Contact Details</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-3 text-brand-gray">Our Office</h3>
                  <address className="not-italic text-gray-600">
                    Maheshwari Wires<br />
                    Industrial Area, Sector 5<br />
                    Noida, Uttar Pradesh<br />
                    India - 201301
                  </address>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-brand-gray">Contact Information</h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Phone:</span> +91 120 4567890
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Email:</span> info@maheshwariwires.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Operating Hours:</span> 9:00 AM - 6:00 PM (Mon-Sat)
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-brand-gray">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                      <span className="sr-only">LinkedIn</span>
                      <span className="text-sm">Li</span>
                    </a>
                    <a href="#" className="h-10 w-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                      <span className="sr-only">Twitter</span>
                      <span className="text-sm">Tw</span>
                    </a>
                    <a href="#" className="h-10 w-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                      <span className="sr-only">Facebook</span>
                      <span className="text-sm">Fb</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="mt-8">
        <div className="container">
          <div className="aspect-[16/9] w-full bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for Google Maps */}
            <div className="h-full w-full flex items-center justify-center bg-gray-200">
              <div className="text-center">
                <p className="text-gray-500 mb-2">Google Map Embed</p>
                <p className="text-sm text-gray-400">Maheshwari Wires Plant Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading title="Frequently Asked Questions" subtitle="Find answers to common questions about our products and services" />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-brand-blue mb-3">What industries do you serve?</h3>
                <p className="text-gray-600">
                  Maheshwari Wires serves a wide range of industries including automotive, aerospace, electronics, jewelry, textiles, and general manufacturing sectors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-brand-blue mb-3">Do you offer custom wire solutions?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in developing custom wire solutions tailored to specific industry requirements. Our R&D team works closely with clients to create wires with unique specifications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-brand-blue mb-3">What is your minimum order quantity?</h3>
                <p className="text-gray-600">
                  Minimum order quantities vary by product type. We accommodate both small batch orders for specialized needs and large volume requirements for industrial production.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-brand-blue mb-3">Do you export your products internationally?</h3>
                <p className="text-gray-600">
                  Yes, Maheshwari Wires exports to over 20 countries across Asia, Europe, North America, and Australia. We comply with international shipping standards and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Connect;