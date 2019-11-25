import React, { useState } from 'react';
import styles from './designed-for-growth-graph.module.scss';


const graphBar = (height) => {
  return (
    <div className={styles.graphBar_wrapper}>
      <div className={styles.Diagram_graph_bar} style={{height: `${height}%`}}>

      </div>
    </div>
  );
}

const DesignedForGrowthGraph = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
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
              {graphBar(25)}
              {graphBar(75)}
              {graphBar(100)}
              {graphBar(75)}
              {graphBar(75)}
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
                No
              </div>
              <div className={styles.Diagram_graph_minimumContribution}>
                Yes
              </div>
              <div className={styles.Diagram_graph_minimumContribution}>
                Yes
              </div>
              <div className={styles.Diagram_graph_minimumContribution}>
                Yes
              </div>
              <div className={styles.Diagram_graph_minimumContribution}>
                Yes
              </div>
            </div>
          </div>
        </div>
        :
        <div className={styles.Diagram_table_wrapper}>
          <table className={styles.Diagram_table}>
            <tr className={styles.Diagram_table_header}>
              <th className={styles.Diagram_table_header_cell}>

              </th>
              <th className={styles.Diagram_table_header_cell}>
                Charges
              </th>
              <th className={styles.Diagram_table_header_cell}>
                Minimum
              </th>
            </tr>
            <tr className={styles.Diagram_table_row}>
              <td className={`${styles.Diagram_table_cell} ${styles.Diagram_table_cell___first} ${styles.Diagram_table_cell___name}`}>
                KidSave
              </td>
              <td className={styles.Diagram_table_cell}>
                0.50%
              </td>
              <td className={styles.Diagram_table_cell}>
                £0
              </td>
            </tr>
            <tr className={styles.Diagram_table_row}>
              <td className={`${styles.Diagram_table_cell} ${styles.Diagram_table_cell___first} ${styles.Diagram_table_cell___name}`}>
                Fidelity
              </td>
              <td className={styles.Diagram_table_cell}>
                £25 pa + charges
              </td>
              <td className={`${styles.Diagram_table_cell} ${styles.Diagram_table_cell___last}`}>
                £50/month
              </td>
            </tr>
            <tr className={styles.Diagram_table_row}>
              <td className={`${styles.Diagram_table_cell} ${styles.Diagram_table_cell___first} ${styles.Diagram_table_cell___name}`}>
                Hargreaves Lansdowne
              </td>
              <td className={styles.Diagram_table_cell}>
                0.45% + charges
              </td>
              <td className={`${styles.Diagram_table_cell} ${styles.Diagram_table_cell___last}`}>
                £25/month
              </td>
            </tr>
            <tr className={styles.Diagram_table_row}>
              <td className={`${styles.Diagram_table_cell} ${styles.Diagram_table_cell___first} ${styles.Diagram_table_cell___name}`}>
                Interactive Investor
              </td>
              <td className={styles.Diagram_table_cell}>
                £80 pa + charges
              </td>
              <td className={`${styles.Diagram_table_cell} ${styles.Diagram_table_cell___last}`}>
                £25/month
              </td>
            </tr>
          </table>
          <p className={styles.Diagram_note}>
            Note: No fund charges shown as all allow choice of different funds with different fees.
          </p>
        </div>
      }
    </div>
  );
};


export default DesignedForGrowthGraph;