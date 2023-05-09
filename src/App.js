import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.promoSection}>
          <a href="/#">
            <span>Landingfolio</span>
          </a>
        </div>
        <nav>
          <div>Logo</div>
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
              <a href="/#">Inspiration</a>
            </li>
            <li>
              <a href="/#">Inspiration</a>
            </li>
          </ul>
        </nav>
      </header>
      <main> Main content </main>
      <footer>My Footer</footer>
    </>
  );
}
