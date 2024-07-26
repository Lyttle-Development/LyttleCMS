import { Layout } from '@frontend/layouts';
import styles from './index.module.scss';
import { Component } from '@frontend/components';
import { usePage } from '@frontend/hooks/usePage';

function Page() {
  const title = usePage('Home');

  return (
    <>
      <Component.Title>{title}</Component.Title>
      <Component.Container>
        <section className={styles.landing}>
          <h2>Hello</h2>
          <p className={styles.description}>World</p>
        </section>
      </Component.Container>
    </>
  );
}

Page.getLayout = Layout.getDefault;

export default Page;
