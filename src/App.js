import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div>
          <nav
            className={`${styles.navigationBar} ${styles.container} ${styles.promoSection}`}
          >
            <span>
              <a href="/#">
                <span>Logo</span>
                <span>Landingfolio</span>
              </a>
            </span>
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
        </div>
      </header>
      <main className={`${styles.container} ${styles.main}`}>
        <div>
          <section>
            <h1 className={styles.h1}>
              Turn Yourself Into Your Favorite Memes
            </h1>
            <p className={styles.p}>
              MemeMorph is the world's most advanced face-morphing app. You can
              turn yourself into your favorite memes by uploading a few selfies
              to our platform and then let our AI do the rest of the work!
            </p>
            <span className={styles.p}>Product</span>
          </section>

          <section className={styles.secondSection}>
            <button>Device Desktop</button>

            <button>Visit Site</button>
          </section>
          <section>
            <div>
              <h4>Extensive component library for Tailwind, Webflow & Figma</h4>
              <p>
                Give every page a stunning, professional look — with hundreds of
                components to choose from.
              </p>
              <button>Browse Library</button>
            </div>
          </section>
          <section className={styles.picture}>
            <img
              src="https://landingfoliocom.imgix.net/inspiration/1677451730987Turn20Yourself20Into20Your20Favorite20Memesdesktop0710f14043fd4c1591234d10c1d8ca74png?&q=75&auto=format&w=750"
              alt=""
            />
          </section>
        </div>
      </main>
      <footer>
        <div>
          <span>Landingfolio</span>
          <p>
            Landingfolio features the best Landing Page designs on the web. Get
            inspiration from real Landing Page examples, curated by us to ensure
            the highest quality.
          </p>
          <button> Chat with us</button>
        </div>
      </footer>
    </>
  );
}
