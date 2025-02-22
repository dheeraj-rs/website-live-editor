import  { useState } from 'react';
import { EditableContent } from './components/EditableContent';
import './styles/main.scss';
import { Edit, Save } from 'lucide-react';

function App() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="app">
      <div className={`edit-mode-toggle ${editMode ? 'active' : ''}`}>
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? <Save /> : <Edit />}
        </button>
      </div>

      <nav className="nav">
        <div className="nav__container">
          <EditableContent
            tag="a"
            className="nav__logo"
            initialContent="ModernCo"
            editMode={editMode}
          />
          <ul className="nav__menu">
            <li><EditableContent tag="a" initialContent="Home" editMode={editMode} /></li>
            <li><EditableContent tag="a" initialContent="About" editMode={editMode} /></li>
            <li><EditableContent tag="a" initialContent="Services" editMode={editMode} /></li>
            <li><EditableContent tag="a" initialContent="Team" editMode={editMode} /></li>
            <li><EditableContent tag="a" initialContent="Contact" editMode={editMode} /></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero__content">
          <EditableContent
            tag="h1"
            className="hero__title"
            initialContent="Transform Your Digital Presence"
            editMode={editMode}
          />
          <EditableContent
            tag="p"
            className="hero__subtitle"
            initialContent="We create innovative solutions that help businesses thrive in the digital age"
            editMode={editMode}
          />
        </div>
      </section>

      <section id="services" className="features">
        <div className="features__container">
          <div className="features__header">
            <EditableContent
              tag="h2"
              initialContent="Our Services"
              editMode={editMode}
            />
            <EditableContent
              tag="p"
              initialContent="Discover how we can help your business grow"
              editMode={editMode}
            />
          </div>
          <div className="features__grid">
            <div className="features__item">
              <EditableContent
                isIcon={true}
                initialContent="Rocket"
                editMode={editMode}
              />
              <EditableContent
                tag="h3"
                initialContent="Digital Strategy"
                editMode={editMode}
              />
              <EditableContent
                tag="p"
                initialContent="We help you develop a comprehensive digital strategy that aligns with your business goals."
                editMode={editMode}
              />
            </div>

            <div className="features__item">
              <EditableContent
                isIcon={true}
                initialContent="Shield"
                editMode={editMode}
              />
              <EditableContent
                tag="h3"
                initialContent="Secure Solutions"
                editMode={editMode}
              />
              <EditableContent
                tag="p"
                initialContent="Our security-first approach ensures your data and users are protected at all times."
                editMode={editMode}
              />
            </div>

            <div className="features__item">
              <EditableContent
                isIcon={true}
                initialContent="Zap"
                editMode={editMode}
              />
              <EditableContent
                tag="h3"
                initialContent="Fast Development"
                editMode={editMode}
              />
              <EditableContent
                tag="p"
                initialContent="Rapid development and deployment of your digital solutions without compromising quality."
                editMode={editMode}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about__container">
          <div className="about__image">
            <EditableContent
              isImage={true}
              initialContent="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              imageProps={{
                alt: "Team collaboration"
              }}
              editMode={editMode}
            />
          </div>
          <div className="about__content">
            <EditableContent
              tag="h2"
              initialContent="About Us"
              editMode={editMode}
            />
            <EditableContent
              tag="p"
              initialContent="We are a team of passionate developers, designers, and strategists dedicated to helping businesses succeed in the digital world. With years of experience and a commitment to excellence, we deliver solutions that make a difference."
              editMode={editMode}
            />
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="team__container">
          <div className="team__header">
            <EditableContent
              tag="h2"
              initialContent="Meet Our Team"
              editMode={editMode}
            />
            <EditableContent
              tag="p"
              initialContent="The talented people behind our success"
              editMode={editMode}
            />
          </div>
          <div className="team__grid">
            <div className="team__member">
              <EditableContent
                isImage={true}
                initialContent="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
                imageProps={{
                  alt: "Team member"
                }}
                editMode={editMode}
              />
              <EditableContent
                tag="h3"
                initialContent="Sarah Johnson"
                editMode={editMode}
              />
              <EditableContent
                tag="p"
                initialContent="CEO & Founder"
                editMode={editMode}
              />
            </div>
            <div className="team__member">
              <EditableContent
                isImage={true}
                initialContent="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
                imageProps={{
                  alt: "Team member"
                }}
                editMode={editMode}
              />
              <EditableContent
                tag="h3"
                initialContent="David Chen"
                editMode={editMode}
              />
              <EditableContent
                tag="p"
                initialContent="Lead Developer"
                editMode={editMode}
              />
            </div>
            <div className="team__member">
              <EditableContent
                isImage={true}
                initialContent="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                imageProps={{
                  alt: "Team member"
                }}
                editMode={editMode}
              />
              <EditableContent
                tag="h3"
                initialContent="Emily Davis"
                editMode={editMode}
              />
              <EditableContent
                tag="p"
                initialContent="Design Director"
                editMode={editMode}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact__container">
          <div className="contact__header">
            <EditableContent
              tag="h2"
              initialContent="Get in Touch"
              editMode={editMode}
            />
            <EditableContent
              tag="p"
              initialContent="Have a project in mind? Let's talk about it."
              editMode={editMode}
            />
          </div>
          <form className="contact__form">
            <div className="form-group">
              <EditableContent
                tag="label"
                initialContent="Name"
                editMode={editMode}
              />
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <EditableContent
                tag="label"
                initialContent="Email"
                editMode={editMode}
              />
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <EditableContent
                tag="label"
                initialContent="Message"
                editMode={editMode}
              />
              <textarea id="message" placeholder="Your message"></textarea>
            </div>
            <EditableContent
              tag="button"
              initialContent="Send Message"
              editMode={editMode}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;