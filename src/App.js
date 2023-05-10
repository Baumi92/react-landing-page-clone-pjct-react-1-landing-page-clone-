import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.promoSection}>
          <a href="/#">
            <span>Logo</span>
            <span>Landingfolio</span>
          </a>
        </div>
        <nav className={`${styles.navigationBar} ${styles.container}`}>
          <ul>
            <li>
              <a href="/#">Inspiration</a>
            </li>
            <li>
              <a href="/#">Component Library</a>
            </li>
            <li>
              <a href="/#">Templates</a>
            </li>
            <li>
              <a href="/#">Learn</a>
            </li>
            <li>
              <a href="/#">Tools</a>
            </li>
            <li>
              <a href="/#">Pricing</a>
            </li>
          </ul>
          <div>
            <a href="/#">Support</a>
            <a href="/#">Login</a>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <h1 className={styles.h1}>Turn Yourself Into Your Favorite Memes</h1>
          <p>
            MemeMorph is the world's most advanced face-morphing app. You can
            turn yourself into your favorite memes by uploading a few selfies to
            our platform and then let our AI do the rest of the work!
          </p>
        </section>
      </main>
      <footer>My Footer</footer>
    </>
  );
}
