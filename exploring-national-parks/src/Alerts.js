import React from 'react';
import AlertsComponent from './Alerts/Alerts';
import './Style/alerts.css';

/**
 * Renders the Alerts component page.
 * @component
 * @module Alerts
 *
 * @returns {JSX.Element} The rendered Alerts component.
 */

function Alerts() {
  return (
    <div className="alerts-parent">
      <AlertsComponent />
    </div>
  );
}

export default Alerts;