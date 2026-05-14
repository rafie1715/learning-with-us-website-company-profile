import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta-section">
          <a href="https://linktr.ee/lwuid?utm_source=linktree_profile_share&ltsid=89c905a2-ab3b-476f-bc6b-ab94dc1cc4f4" target="_blank" rel="noreferrer" className="footer-cta-btn">
            Start Your Learning Journey
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} Learning With Us</div>
          <div className="links footer-links">
            <a href="https://www.instagram.com/lwu_id" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/learning-with-us-id/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.tiktok.com/@lwu_id" target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=6285711359655" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-icon">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
