import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Branding Services', slug: 'branding-services' },
    { name: 'Website Design', slug: 'website-design' },
    { name: 'App Development', slug: 'app-development' },
    { name: 'Digital Marketing', slug: 'digital-marketing-services' },
    { name: 'Enquiry Generation', slug: 'enquiry-generation-services' },
    { name: 'Search Engine Optimization', slug: 'search-engine-optimization' },
    { name: 'App Marketing', slug: 'app-marketing' },
    { name: 'Content Marketing', slug: 'content-marketing' },
    { name: 'PPC/Paid Marketing', slug: 'ppc-paid-marketing' },
  ];

  const majorCities = [
    { name: 'Delhi', slug: 'delhi' },
    { name: 'Mumbai', slug: 'mumbai' },
    { name: 'Bangalore', slug: 'bangalore' },
    { name: 'Hyderabad', slug: 'hyderabad' },
    { name: 'Chennai', slug: 'chennai' },
    { name: 'Kolkata', slug: 'kolkata' },
    { name: 'Pune', slug: 'pune' },
    { name: 'Noida', slug: 'noida' },
    { name: 'Gurgaon', slug: 'gurgaon' },
    { name: 'Jaipur', slug: 'jaipur' },
    { name: 'Lucknow', slug: 'lucknow' },
    { name: 'Chandigarh', slug: 'chandigarh' },
    { name: 'Ahmedabad', slug: 'ahmedabad' },
    { name: 'Surat', slug: 'surat' },
    { name: 'Indore', slug: 'indore' },
    { name: 'Bhopal', slug: 'bhopal' },
    { name: 'Patna', slug: 'patna' },
    { name: 'Nagpur', slug: 'nagpur' },
    { name: 'Visakhapatnam', slug: 'visakhapatnam' },
    { name: 'Coimbatore', slug: 'coimbatore' },
    { name: 'Kochi', slug: 'kochi' },
    { name: 'Thiruvananthapuram', slug: 'thiruvananthapuram' },
    { name: 'Vadodara', slug: 'vadodara' },
    { name: 'Rajkot', slug: 'rajkot' },
    { name: 'Guwahati', slug: 'guwahati' },
    { name: 'Bhubaneswar', slug: 'bhubaneswar' },
    { name: 'Ranchi', slug: 'ranchi' },
    { name: 'Raipur', slug: 'raipur' },
    { name: 'Dehradun', slug: 'dehradun' },
    { name: 'Shimla', slug: 'shimla' },
    { name: 'Jammu', slug: 'jammu' },
    { name: 'Srinagar', slug: 'srinagar' },
    { name: 'Agra', slug: 'agra' },
    { name: 'Varanasi', slug: 'varanasi' },
    { name: 'Kanpur', slug: 'kanpur' },
    { name: 'Allahabad', slug: 'allahabad' },
    { name: 'Amritsar', slug: 'amritsar' },
    { name: 'Ludhiana', slug: 'ludhiana' },
    { name: 'Jalandhar', slug: 'jalandhar' },
    { name: 'Mysore', slug: 'mysore' },
    { name: 'Mangalore', slug: 'mangalore' },
    { name: 'Hubli', slug: 'hubli' },
    { name: 'Vijayawada', slug: 'vijayawada' },
    { name: 'Tirupati', slug: 'tirupati' },
    { name: 'Madurai', slug: 'madurai' },
    { name: 'Trichy', slug: 'trichy' },
    { name: 'Salem', slug: 'salem' },
    { name: 'Kozhikode', slug: 'kozhikode' },
    { name: 'Thrissur', slug: 'thrissur' },
    { name: 'Kollam', slug: 'kollam' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_72b5f121-ec40-4b5f-8120-c28f47aa0596/artifacts/gwmdlouv_ib6o5403_logo-pytech.png"
              alt="PyTech Digital"
              className="h-10 w-auto mb-4 brightness-0 invert"
              data-testid="footer-logo"
            />
            <p className="text-sm mb-4">
              Your trusted digital partner for branding, web design, app development, and digital marketing services across India.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61583324489028" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/PyTech_Digital" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" data-testid="social-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/109582123" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" data-testid="social-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pytech_digital/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" data-testid="social-instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/${service.slug}/delhi`}
                    className="text-sm hover:text-cyan-400 transition-colors"
                    data-testid={`footer-service-${service.slug}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-cyan-400 transition-colors" data-testid="footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-cyan-400 transition-colors" data-testid="footer-portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-cyan-400 transition-colors" data-testid="footer-contact">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-colors" data-testid="footer-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-colors" data-testid="footer-terms">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm" data-testid="footer-address">
                  2nd Floor, Plot No. 21 & 21A, Sector 142, Noida, Uttar Pradesh 201304
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+919205222170" className="text-sm hover:text-cyan-400 transition-colors" data-testid="footer-phone">
                  +91 9205 222 170
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@pytechdigital.com" className="text-sm hover:text-cyan-400 transition-colors" data-testid="footer-email">
                  info@pytechdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Cities */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-semibold text-lg mb-4">We Serve</h3>
          <div className="flex flex-wrap gap-4">
            {majorCities.map((city) => (
              <Link
                key={city.slug}
                to={`/website-design/${city.slug}`}
                className="text-sm hover:text-cyan-400 transition-colors"
                data-testid={`footer-city-${city.slug}`}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm" data-testid="footer-copyright">
            © 2024 PyTech Digital. All Rights Reserved.
          </p>
          <p className="text-sm mt-2">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;