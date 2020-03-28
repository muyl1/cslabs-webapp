import React from 'react';
import {Layout} from '../../Layout/Layout';
import styles from '../../NotFound/NotFound.module.scss';

const CreatorsModules = () => (
  <Layout>
    <div className={styles['not-found']}>
      <label>This page is still under construction.</label>
    </div>
  </Layout>
);

export default CreatorsModules;
