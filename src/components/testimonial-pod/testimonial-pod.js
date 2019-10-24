import React from 'react';
import styles from './testimonial-pod.module.scss';

export const TestimonialPods = ({
  children
}) => {
  return (
    <div className={styles.TestimonialPods}>
      {children}
    </div>
  );
};

export const TestimonialPod = ({
  children,
  author
}) => {
  return (
    <div className={styles.TestimonialPod_wrapper}>
      <div className={styles.TestimonialPod}>
        <div className={styles.TestimonialPod_speechMark}>
        </div>
        <div className={styles.TestimonialPod_content}>
          <div className={styles.TestimonialPod_testimonial}>
            {children}
          </div>
          <div className={styles.TestimonialPod_author}>
            {author}
          </div>
        </div>
      </div>
    </div>
  );
};