import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <button
            onClick={() => {
              throw new Error('Testing');
            }}
          >
            Click for error
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
