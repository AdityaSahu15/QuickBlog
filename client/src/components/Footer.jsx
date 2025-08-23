import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200 mt-40">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <img src={assets.logo} alt="logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed text-gray-600">
            QuickBlog brings you insightful stories, guides, and the latest updates. 
            Stay inspired, stay informed, and never miss a post.
          </p>
        </div>

        {/* Dynamic Sections */}
        {footer_data.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © 2025 QuickBlog. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
