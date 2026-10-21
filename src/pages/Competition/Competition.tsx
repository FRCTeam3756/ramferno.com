import { Helmet } from "@vuer-ai/react-helmet-async";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";
import background from "../../assets/images/competition/background.webp";
import rebuiltPhoto from "../../assets/images/robots/rebuiltPhoto.jpeg";
import styles from "./Competition.module.css";

const seasonSteps = [
  {
    title: "A new challenge. Every year.",
    description: "January’s Kickoff reveals a new game. Students work with mentors to design, build, wire, and program a robot, then test and improve it for competition.",
  },
  {
    title: "Three teams. One alliance.",
    description: "Three robots in a red alliance face three in blue. Qualification matches rotate partners and opponents; selected alliances then compete together in the playoffs.",
  },
  {
    title: "More than the score.",
    description: "Teams also fundraise, share STEM in their communities, and help one another. FIRST calls this Coopertition®: competing hard while helping everyone succeed.",
  },
];

const matchPhases = [
  { duration: "20 sec", title: "Autonomous", description: "Robots follow pre-programmed instructions to score fuel or climb. Both hubs are active." },
  { duration: "10 sec", title: "Transition", description: "Drivers take control. Both hubs stay active for the opening seconds of teleop." },
  { duration: "4 × 25 sec", title: "Alliance shifts", description: "Hubs alternate: only one alliance can score fuel at a time. The alliance with more autonomous fuel is inactive first; a tie is decided randomly." },
  { duration: "30 sec", title: "End game", description: "Both hubs reactivate. Teams balance final shots with climbing the tower before the buzzer." },
];

export default function Competition() {
  return (
    <>
      <Helmet>
        <title>Competition | RamFerno Robotics</title>
        <meta name="description" content="Discover FIRST Robotics Competition with Team 3756 RamFerno and learn how the 2026 game, REBUILT, works: fuel, alliance shifts, and tower climbs." />
      </Helmet>
      <NavMenu />
      <main id="competition" className={styles.main}>
        <header className={styles.hero}>
          <img className={styles.heroImage} src={background} alt="" fetchPriority="high"/>
          <div className={styles.heroCopy}>
            <h1>Built to compete.<br />Ready to collaborate.</h1>
            <p className={styles.heroDescription}>Engineering, teamwork, and the energy of a sport.<br />This is where our robots come to life.</p>
            <a className={styles.heroLink} href="#how-it-works">Explore the competition <ArrowDown size={18} aria-hidden="true" /></a>
          </div>
          <span className={styles.photoLabel}>RamFerno / Windsor 2026</span>
        </header>

        <section id="how-it-works" className={styles.section} aria-labelledby="first-title">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>01 / The competition</p>
              <h2 id="first-title">What is FIRST?</h2>
            </div>
            <span className={styles.sectionLabel}>An introduction</span>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.introduction}>
              <p className={styles.lead}>A sport for the next generation of problem-solvers.</p>
              <p>FIRST stands for <strong>For Inspiration and Recognition of Science and Technology</strong>. Its robotics programs bring students together through hands-on engineering.</p>
              <p>RamFerno takes part in <strong>FIRST Robotics Competition (FRC)</strong>, where high-school teams build full-size robots for a different field challenge each season.</p>
              <a className={styles.resourceLink} href="https://www.firstinspires.org/programs/frc/" target="_blank" rel="noopener noreferrer">Discover FIRST <ArrowUpRight size={20} aria-hidden="true" /></a>
            </div>
            <ol className={styles.steps}>
              {seasonSteps.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="rebuilt-title">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>02 / The 2026 game · Presented by Haas</p>
              <h2 id="rebuilt-title">REBUILT<span className={styles.trademark}>™</span></h2>
            </div>
            <p className={styles.seasonYear}><span>Season</span>2026</p>
          </div>
          <div className={styles.twoColumns}>
            <figure className={styles.gamePhoto}>
              <img src={rebuiltPhoto} alt="RamFerno’s robot Jean Gray beside yellow fuel and a hub on the REBUILT field" loading="lazy" width={1086} height={724} />
              <figcaption>Our 2026 robot in action</figcaption>
            </figure>
            <div>
              <p className={styles.lead}>Collect fuel. Time your shots.<br />Climb higher.</p>
              <p>REBUILT challenges alliances to gather fuel, navigate obstacles, and climb a tower. The alliance with the most points wins.</p>
              <ul className={styles.objectives}>
                <li><h3>Fuel the hub</h3><p>Collect the yellow balls and shoot into your alliance’s hub. Each fuel scores one point while the hub is active; an inactive hub earns none.</p></li>
                <li><h3>Work the field</h3><p>Cross the bumps or travel beneath the trenches. When your hub is inactive, collect fuel or defend while preparing for your next scoring window.</p></li>
                <li><h3>Climb the tower</h3><p>Finish off the floor. Teleop climbs earn 10, 20, or 30 points by level; an autonomous Level 1 climb earns 15.</p></li>
              </ul>
            </div>
          </div>

          <div className={styles.matchHeader}>
            <h3>A match, from start to finish.</h3>
            <p>20 seconds autonomous + 2:20 driver-controlled</p>
          </div>
          <ol className={styles.timeline}>
            {matchPhases.map((phase) => (
              <li key={phase.title}>
                <span className={styles.duration}>{phase.duration}</span>
                <h4>{phase.title}</h4>
                <p>{phase.description}</p>
              </li>
            ))}
          </ol>
          <p className={styles.rankingNote}>During qualification, alliances can also earn bonus ranking points for reaching fuel and tower scoring targets. These rewards help determine the standings beyond wins and losses.</p>

          <div className={styles.resources}>
            <p className={styles.eyebrow}>Go deeper</p>
            <a className={styles.resourceLink} href="https://www.firstinspires.org/hubfs/web/volunteer/frc/2026-rebuilt-game-overview.pdf?hsLang=en" target="_blank" rel="noopener noreferrer">Official game overview <ArrowUpRight size={20} aria-hidden="true" /></a>
            <a className={styles.resourceLink} href="https://firstfrc.blob.core.windows.net/frc2026/Manual/2026GameManual.pdf" target="_blank" rel="noopener noreferrer">2026 game manual <ArrowUpRight size={20} aria-hidden="true" /></a>
            <a className={styles.resourceLink} href="/robots">Meet our robots <ArrowUpRight size={20} aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
