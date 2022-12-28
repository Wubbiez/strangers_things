import styles from "./Home.module.css";
import React from "react";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Welcome to Stranger's Things!</h1>
      </div>

      <div>
        <h3>
          This is a social website where you can buy and sell goods from
          strangers! Not to be confused with the Netflix original series
          (besides the similar logo).
        </h3>
      </div>
    </div>
  );
}

export default Home;
