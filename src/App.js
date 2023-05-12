import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div>
          <nav
            className={`${styles.navigationBar}  ${styles.promoSection} ${styles.container} `}
          >
            <div>
              <span>
                <a href="/#">
                  <span>Logo</span>
                  <span>Landingfolio</span>
                </a>
              </span>
            </div>
            <ul className={styles.container}>
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
              <button className={styles.button}>Support</button>
              <button className={styles.button1}>Login</button>
            </div>
          </nav>
        </div>
      </header>
      <main className={` ${styles.main}`}>
        <div>
          <section>
            <h1 className={styles.h1}>
              Turn Yourself Into Your Favorite Memes
            </h1>
            <div>
              <p className={styles.p}>
                MemeMorph is the world's most advanced face-morphing app. You
                can turn yourself into your favorite memes by uploading a few
                selfies to our platform and then let our AI do the rest of the
                work!
              </p>
            </div>
            <a href="/#">
              <span className={styles.p}>Product</span>
            </a>
          </section>

          <section className={`${styles.promoSection} ${styles.h1}`}>
            <button className={styles.button2}>Device Desktop</button>

            <button className={styles.button3}>Visit Site</button>
          </section>
          <section className={styles.h4}>
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
        <div className={styles.grid}>
          <section>
            <span>Landingfolio</span>
            <p>
              Landingfolio features the best Landing Page designs on the web.
              Get inspiration from real Landing Page examples, curated by us to
              ensure the highest quality.
            </p>

            <div>
              <p>Links</p>
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
                <li>
                  <a href="/#">Submit a design</a>
                </li>
              </ul>
              <div>
                <p>Legal</p>
                <ul>
                  <li>
                    <a href="/#"> Cookie Policy</a>
                  </li>
                  <li>
                    <a href="/#">Licensing Agreement</a>
                  </li>
                  <li>
                    <a href="/#">Partner Terms</a>
                  </li>
                  <li>
                    <a href="/#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <p>Products</p>
                <ul>
                  <li>
                    <a href="/#">Free Logos</a>
                  </li>
                  <li>
                    <a href="/#">Mockup Generator</a>
                  </li>
                  <li>
                    <a href="/#">Figma Component Library</a>
                  </li>
                  <li>
                    <a href="/#">Webflows Cloneables</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
