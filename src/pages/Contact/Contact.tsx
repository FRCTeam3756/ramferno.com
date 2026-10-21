import styles from './Contact.module.css';
import NavMenu from '../../components/Global/NavMenu/NavMenu';
import Footer from '../../components/Global/Footer/Footer';
import { Helmet } from '@vuer-ai/react-helmet-async';
import { mentors, studentLeaders, subteams, teamEmail, type TeamPerson } from './teamData';

function Person({ person }: { person: TeamPerson }) {
  return (
    <div className={styles.person}>
      {person.headshot ? (
        <img className={styles.avatar} src={person.headshot} alt="" />
      ) : (
        <span className={styles.avatarPlaceholder} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          </svg>
        </span>
      )}
      <div className={styles.personDetails}>
        <p className={styles.role}>{person.role}</p>
        <p className={styles.name}>{person.name}</p>
        {person.email && <a href={`mailto:${person.email}`}>Email {person.name}</a>}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | RamFerno Robotics</title>
        <meta name="description" content="Meet RamFerno Robotics’ mentors, student leaders, and subteam captains. Get in touch with our team." />
      </Helmet>
      <NavMenu />
      <main id="contact" className={styles.container}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>The people behind the robot</p>
          <h1>Contact our team</h1>
          <p>General inquiries should be made out to contact@ramferno.com</p>
          <a className={styles.contactLink} href={`mailto:${teamEmail}`}>Get in touch <span aria-hidden="true">↗</span></a>
        </header>

        <section aria-labelledby="mentors-heading" className={styles.tree}>
          <h2 id="mentors-heading" className={styles.tierHeading}>Mentors</h2>
          <ul className={styles.mentors}>
            {(['left', 'center', 'right'] as const).map((position) => (
              <li key={mentors[position].id} className={`${styles.mentor} ${position === 'center' ? styles.leadMentor : ''}`}>
                <Person person={mentors[position]} />
              </li>
            ))}
          </ul>

          <section aria-labelledby="students-heading" className={styles.students}>
            <div className={styles.leadership}>
              <p className={styles.eyebrow}>Student-led, always</p>
              <h2 id="students-heading">Student leadership</h2>
              <ul className={styles.leaders}>
                {studentLeaders.map((person) => <li key={person.id}><Person person={person} /></li>)}
              </ul>
            </div>
            <section aria-labelledby="subteams-heading" className={styles.subteamSection}>
              <h3 id="subteams-heading" className={styles.tierHeading}>Subteams & captains</h3>
              <ul className={styles.subteams}>
                {subteams.map((subteam) => (
                  <li key={subteam.id} className={styles.subteam}>
                    <h4>{subteam.name}</h4>
                    <p className={styles.description}>{subteam.description}</p>
                    <ul className={styles.captains}>
                      {subteam.captains.map((person) => <li key={person.id}><Person person={person} /></li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
