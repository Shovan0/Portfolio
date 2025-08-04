import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>

            <div className={styles.content}>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl("skills/react.png")} alt="React Logo" />
                        </div>
                        <p>React.js</p>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl("skills/figma.png")} alt="figma Logo" />
                        </div>
                        <p>Figma</p>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl("skills/mongodb.png")} alt="MongoDB Logo" />
                        </div>
                        <p>MongoDB</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl("skills/node.png")} alt="node Logo" />
                        </div>
                        <p>Node JS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl("skills/html.png")} alt="HTML Logo" />
                        </div>
                        <p>HTML</p>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl("skills/css.png")} alt="CSS Logo" />
                        </div>
                        <p>CSS</p>
                    </div>
                </div>

                <ul className={styles.history}>
                    {Array.isArray(history) &&
                        history.map((historyItem, id) => (
                            <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((exp, i) => (
                                            <li key={i}>{exp}</li>
                                        ))}
                                    </ul>
                                    {historyItem.offerLink && (
                                        <a
                                            href={historyItem.offerLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.offerButton}
                                        >
                                            View Offer Letter
                                        </a>
                                    )}
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    );
};

