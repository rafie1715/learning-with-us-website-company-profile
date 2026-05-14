import React from 'react'

const products = [
  { title: 'IELTS Preparation', desc: 'Listening, Reading, Writing, Speaking modules + mock tests' },
  { title: 'General English', desc: 'Daily conversation, grammar and vocabulary practice' },
  { title: 'Business English', desc: 'Email, negotiation, presentations, workplace communication' },
  { title: 'Self-Development Courses', desc: 'Confidence, public speaking, goal-setting workshops' }
]

export default function ProductsServices() {
  return (
    <section className="container page products">
      <h2>Products & Services</h2>
      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a className="btn" href="https://linktr.ee/lwuid?utm_source=linktree_profile_share&ltsid=89c905a2-ab3b-476f-bc6b-ab94dc1cc4f4" target="_blank" rel="noreferrer">Contact Us</a>
          </div>
        ))}
      </div>
    </section>
  )
}
