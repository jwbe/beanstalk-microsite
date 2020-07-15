import React from 'react';
import GiltStudyDiagramTheme from './gilt-study-diagram.module.scss';

const GiltStudyDiagram = () => (
  <div className={GiltStudyDiagramTheme.GiltStudyDiagram}>
    <div className={`${GiltStudyDiagramTheme.GiltStudyDiagram_Bar} ${GiltStudyDiagramTheme.GiltStudyDiagram_Bar___Shares}`}>
      UK Shares 4.7%
    </div>
    <div className={`${GiltStudyDiagramTheme.GiltStudyDiagram_Bar} ${GiltStudyDiagramTheme.GiltStudyDiagram_Bar___Cash}`}>
      Cash 1.1%
    </div>
    <div className={GiltStudyDiagramTheme.GiltStudyDiagram_Bar_Caption}>
      Source: Barclays equity gilt study 2019
    </div>
  </div>
);

export default GiltStudyDiagram;