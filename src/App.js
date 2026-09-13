import './App.css';

export const trackButtonClick = (buttonName) => {
  window.dataLayer = window.dataLayer || [];
  const normalizedButtonName = String(buttonName);
  const eventPayload = {
    event: 'button_counter_clicked',
    event_name: 'button_counter_clicked',
    button_name: normalizedButtonName,
  };

  console.log('[GTM] Button click tracked:', eventPayload);
  window.dataLayer.push(eventPayload);
};

const chartSeries = [
  { name: 'page_view', color: '#1a73e8', points: [10, 18, 22, 16, 28, 26, 23, 30, 35, 32, 54, 58] },
  { name: 'scroll', color: '#34a853', points: [8, 11, 18, 14, 20, 18, 22, 26, 22, 25, 18, 30] },
  { name: 'session_start', color: '#fbbc05', points: [5, 9, 14, 11, 18, 14, 17, 19, 15, 18, 22, 24] },
  { name: 'user_engagement', color: '#ea4335', points: [4, 7, 9, 6, 11, 10, 12, 13, 9, 14, 12, 16] },
  { name: 'first_visit', color: '#a142f4', points: [3, 5, 8, 7, 9, 8, 10, 9, 11, 13, 10, 12] },
];

const tableRows = [
  { name: 'page_view', count: '71', users: '8', perUser: '8.88', revenue: '₹0.00', percent: '32.0%' },
  { name: 'scroll', count: '53', users: '6', perUser: '3.17', revenue: '₹0.00', percent: '19.6%' },
  { name: 'session_start', count: '31', users: '8', perUser: '1.50', revenue: '₹0.00', percent: '12.1%' },
  { name: 'user_engagement', count: '22', users: '4', perUser: '2.25', revenue: '₹0.00', percent: '9.1%' },
  { name: 'first_visit', count: '20', users: '8', perUser: '1.00', revenue: '₹0.00', percent: '8.1%' },
];

function App() {
  return (
    <div className="page-shell">
      <div className="browser-frame">
        <header className="browser-header">
          <div className="browser-tabs">
            <div className="tab tab-active">Google Tag Manager</div>
            <div className="tab">Analytics / Event name</div>
            <div className="tab">My App</div>
          </div>
          <div className="browser-actions">
            <span className="mini-icon" aria-hidden="true">★</span>
            <span className="mini-icon" aria-hidden="true">⌁</span>
            <span className="avatar-circle">A</span>
          </div>
        </header>

        <aside className="app-sidebar">
          <div className="sidebar-top">
            <div className="logo-mark" aria-hidden="true">◔</div>
            <div className="project-name">Analytics</div>
          </div>

          <button type="button" className="create-btn">Create</button>

          <nav className="side-nav">
            <button type="button" className="nav-item">Reports snapshot</button>
            <button type="button" className="nav-item">Realtime overview</button>
            <button type="button" className="nav-item">Realtime pages</button>
            <div className="nav-group">
              <div className="nav-title">Business objectives</div>
              <button type="button" className="nav-subitem">Generate leads</button>
              <button type="button" className="nav-subitem">Drive sales</button>
              <button type="button" className="nav-subitem">Understand web and/or app...</button>
            </div>
            <div className="nav-group active-group">
              <div className="nav-title">View user engagement &amp; ret...</div>
              <button type="button" className="nav-subitem selected">Overview</button>
              <button type="button" className="nav-subitem" onClick={() => trackButtonClick('Events')}>Events</button>
              <button type="button" className="nav-subitem">Pages and screens</button>
              <button type="button" className="nav-subitem">Data import</button>
            </div>
            <div className="nav-group">
              <div className="nav-title">User</div>
              <button type="button" className="nav-subitem">User attributes</button>
            </div>
            <div className="nav-group">
              <div className="nav-title">Tech</div>
            </div>
          </nav>

          <div className="sidebar-footer">
            <span className="footer-dot">◐</span>
            <span>Library</span>
          </div>
        </aside>

        <main className="analytics-main">
          <div className="topbar">
            <div className="title-wrap">
              <div className="line-item">All accounts &nbsp;&gt;&nbsp; Default account for Fire...</div>
              <div className="page-title-row">
                <div className="title-badge">A</div>
                <h1>React Sample App</h1>
              </div>
            </div>
            <div className="topbar-actions">
              <div className="search-box">Try searching “property ID”</div>
              <div className="toolbar-icons">
                <span aria-hidden="true">◎</span>
                <span aria-hidden="true">⎘</span>
                <span aria-hidden="true">?</span>
                <span className="user-badge">A</span>
              </div>
            </div>
          </div>

          <div className="panel chart-panel">
            <div className="panel-header">
              <div className="panel-title-wrap">
                <div className="title-badge small">A</div>
                <h2>Events: Event name</h2>
              </div>
                <div className="panel-controls">
                  <button type="button" className="track-button" onClick={() => trackButtonClick('B')}>
                    Button B
                  </button>
                  <button type="button" className="track-button" onClick={() => trackButtonClick('Z')}>
                    Button Z
                  </button>
                  <div className="range-select">Last 28 days &nbsp; Aug 16 - Sep 12, 2026</div>
                </div>
            </div>

            <div className="chart-wrapper">
              <svg viewBox="0 0 960 320" className="chart-svg" role="img" aria-label="Event trend chart">
                {[0, 1, 2, 3, 4].map((row) => (
                  <line
                    key={row}
                    x1="0"
                    x2="960"
                    y1={40 + row * 62}
                    y2={40 + row * 62}
                    stroke="#e7ebf1"
                    strokeWidth="1"
                  />
                ))}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
                  <line
                    key={col}
                    x1={116 + col * 110}
                    x2={116 + col * 110}
                    y1="0"
                    y2="320"
                    stroke="#edf1f6"
                    strokeWidth="1"
                  />
                ))}

                {chartSeries.map((series) => {
                  const points = series.points
                    .map((value, index) => `${116 + index * 110},${260 - value * 4}`)
                    .join(' ');

                  return (
                    <polyline
                      key={series.name}
                      points={points}
                      fill="none"
                      stroke={series.color}
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  );
                })}

                <g className="axis-labels">
                  {['Aug 17', '19', '21', '23', '25', '27', '29', '31', 'Sep 02', '04', '06', '08', '10', '12'].map((label, index) => (
                    <text key={label} x={124 + index * 58} y={300} fill="#7a8599" fontSize="11">
                      {label}
                    </text>
                  ))}
                </g>
              </svg>
            </div>

            <div className="legend-row">
              {chartSeries.map((series) => (
                <div key={series.name} className="legend-item">
                  <span className="legend-dot" style={{ background: series.color }} />
                  <span>{series.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="table-panel">
            <div className="table-toolbar">
              <div className="table-actions">
                <button type="button" className="mini-square" aria-label="Rows" />
                <button type="button" className="mini-square" aria-label="Search" />
              </div>
              <div className="table-meta">Rows per page: 10</div>
            </div>

            <table className="analytics-table">
              <thead>
                <tr>
                  <th className="check-column"><input type="checkbox" defaultChecked /></th>
                  <th>Event name</th>
                  <th>Event count</th>
                  <th>Total users</th>
                  <th>Event count per user</th>
                  <th>Total revenue</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, index) => (
                  <tr key={row.name} className={index === 0 ? 'featured' : ''}>
                    <td className="check-column"><input type="checkbox" defaultChecked={index === 0} /></td>
                    <td className="event-name">
                      <button type="button" className="event-link" onClick={() => trackButtonClick(row.name)}>
                        <span className="event-pill" style={{ background: chartSeries[index % chartSeries.length].color }} />
                        {row.name}
                      </button>
                    </td>
                    <td>{row.count}</td>
                    <td>{row.users}</td>
                    <td>{row.perUser}</td>
                    <td>{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;