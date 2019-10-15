import React, { useState } from 'react';
import styles from './designed-for-growth.module.scss';
import FundBalance from '../fund-balance/fund-balance';
import SimpleBars from '../simple-bars/simple-bars';

const graphBar = (height) => {
  return (
    <div className={styles.graphBar_wrapper}>
      <div className={styles.Diagram_graph_bar} style={{height: `${height}%`}}>

      </div>
    </div>
  );
}

const DesignedForGrowth = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
      <h1 className={styles.Title}>
        Designed for Growth
      </h1>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Save more for your child
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              We want your children to benefit from their investment, so we have no charges and one of the lowest fees on the market - only 0.5%.
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <div className={styles.Diagram_wrapper}>
            <div className={styles.Diagram_tabs}>
              <div className={`${styles.Diagram_tabs_tab} ${showDiagramGraph ? styles.Diagram_tabs_tab___active : null}`} onClick={() => setShowDiagramGraph(true)}>
                Fees vs Leading Child Savings Providers
              </div>
              <div className={`${styles.Diagram_tabs_tab} ${!showDiagramGraph ? styles.Diagram_tabs_tab___active : null}`} onClick={() => setShowDiagramGraph(false)}>
                Fees vs Selected Investment Programs
              </div>
            </div>
            {
              showDiagramGraph ?
              <div className={styles.Diagram_graph_wrapper}>
                <div className={styles.Diagram_graph}>
                  <div className={styles.Diagram_graph_area}>
                    <div className={styles.Diagram_graph_area_axis_unit}>
                      2.0%
                    </div>
                    <div className={styles.Diagram_graph_area_axis_unit}>
                      1.5%
                    </div>
                    <div className={styles.Diagram_graph_area_axis_unit}>
                      1.0%
                    </div>
                    <div className={styles.Diagram_graph_area_axis_unit}>
                      0.5%
                    </div>
                    <div className={styles.Diagram_graph_area_axis_unit}>
                      0.0%
                    </div>
                  </div>
                  <div className={styles.Diagram_graph_bars}>
                    {graphBar(100)}
                    {graphBar(50)}
                    {graphBar(75)}
                    {graphBar(25)}
                    {graphBar(0)}
                  </div>
                </div>
                <div className={styles.Diagram_graph_bars_labels}>
                  <div className={styles.Diagram_graph_bars_label}>
                    KidStart
                  </div>
                  <div className={styles.Diagram_graph_bars_label}>
                    One Family
                  </div>
                  <div className={styles.Diagram_graph_bars_label}>
                    Foresters Friendly
                  </div>
                  <div className={styles.Diagram_graph_bars_label}>
                    Foresters Financial
                  </div>
                  <div className={styles.Diagram_graph_bars_label}>
                    Scottish Friendly
                  </div>
                </div>
                <div className={styles.Diagram_graph_minimumContributions_container}>
                  <div className={styles.Diagram_graph_minimumContributions_axisLabel}>
                    Minimum <br/>contribution
                  </div>
                  <div className={styles.Diagram_graph_minimumContributions}>
                    <div className={`${styles.Diagram_graph_minimumContribution} ${styles.Diagram_graph_minimumContribution___kidstart}`}>
                      Yes
                    </div>
                    <div className={styles.Diagram_graph_minimumContribution}>
                      No
                    </div>
                    <div className={styles.Diagram_graph_minimumContribution}>
                      No
                    </div>
                    <div className={styles.Diagram_graph_minimumContribution}>
                      No
                    </div>
                    <div className={styles.Diagram_graph_minimumContribution}>
                      No
                    </div>
                  </div>
                </div>
              </div>
              :
              <div className={styles.Diagram_table}>
              </div>
            }
          </div>
        </article>

      </section>


      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Shares are better
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Studies show that shares historically have returned nearly 3x as much as cash savings.
            </p>
            <p className={styles.TextBlock_Paragraph___smaller}>
              Source: Barclays Equity Gift Study 2016
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <SimpleBars/>

          <div className={styles.TextBlock}>
            <p className={styles.TextBlock_Paragraph}>
              When saving over a long period - perhaps a pension or Junior ISA - the ups and downs of shares can be compensated for by higher growth.
            </p>
            <p className={styles.TextBlock_Paragraph}>
              Beanstalk is a Stocks & Shares Junior ISA allowing you to save for your child tax free.
            </p>
          </div>
        </article>

      </section>


      <section className={styles.Section}>
        <article className={styles.Article}>
          <FundBalance/>
        </article>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Choose your risk
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              We offer a simple choice of two funds. One is low risk and one tracks the market. You can split and adjust your child's investment whenever you want, following its performance on the app.
            </p>
            <p className={styles.TextBlock_Paragraph___smaller}>
              Risk warning
            </p>
          </div>
        </article>
      </section>






    </>
  );
};

export default DesignedForGrowth;

