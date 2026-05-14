import React, { useEffect, useMemo, useState } from 'react'

const testimonials = [
  {
    quote: 'Materinya jelas, kelasnya interaktif, dan progress speaking saya terasa dalam beberapa minggu.',
    author: 'Rina, IELTS Student'
  },
  {
    quote: 'Business English di LWU sangat membantu untuk meeting dan presentasi di kantor.',
    author: 'Andi, Professional Learner'
  },
  {
    quote: 'Tutor support-nya konsisten, jadi saya lebih percaya diri komunikasi pakai English.',
    author: 'Nisa, General English Student'
  }
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeTestimonial = useMemo(() => testimonials[activeIndex], [activeIndex])

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length)
    }, 4500)

    return () => window.clearInterval(timerId)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length)
  }

  return (
    <section className="hero container">
      <div className="hero-grid">
        <div className="hero-left">
          <h1>Learning With Us</h1>
          <p className="lead">Helping 1,000+ students achieve their goals within a few months. IELTS | General English | Business English | Self-Development Courses.</p>
          <div className="cta-row reveal">
            <a className="btn primary" href="#products">See Courses</a>
            <a className="btn ghost" href="https://linktr.ee/lwuid?utm_source=linktree_profile_share&ltsid=89c905a2-ab3b-476f-bc6b-ab94dc1cc4f4" target="_blank" rel="noreferrer">Contact Us</a>
          </div>
          <div className="home-social reveal">
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
        <div className="hero-right reveal">
          <div className="testimonial card carousel-card">
            <div key={activeIndex} className="testimonial-content">
              <p className="quote">“{activeTestimonial.quote}”</p>
              <div className="author">— {activeTestimonial.author}</div>
            </div>

            <div className="carousel-controls">
              <button type="button" onClick={goToPrevious} className="carousel-btn" aria-label="Previous testimonial">‹</button>
              <div className="carousel-dots">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.author}
                    type="button"
                    className={index === activeIndex ? 'dot active' : 'dot'}
                    aria-label={`Go to testimonial ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <button type="button" onClick={goToNext} className="carousel-btn" aria-label="Next testimonial">›</button>
            </div>
          </div>
        </div>
      </div>

      <section id="products" className="container cards">
        <h2>Our Offerings</h2>
        <div className="grid">
          <div className="card">
            <h3>IELTS Preparation</h3>
            <p>Intensive courses with proven strategies, mock tests, and feedback.</p>
          </div>
          <div className="card">
            <h3>General English</h3>
            <p>Conversational practice, grammar, and practical language use.</p>
          </div>
          <div className="card">
            <h3>Business English</h3>
            <p>Professional communication, presentations, and email writing.</p>
          </div>
          <div className="card">
            <h3>Self-Development</h3>
            <p>Personal growth courses to boost confidence and soft skills.</p>
          </div>
        </div>
      </section>
    </section>
  )
}
