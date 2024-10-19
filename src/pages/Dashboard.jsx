import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard_parent">
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h2>MumbaiHacks</h2>
        <div className="user-profile">
          <span>NS</span>
          <i className="settings-icon">⚙️</i> {/* Simulating settings icon */}
        </div>
      </div>

      {/* Section 1: Learn and Get Inspired */}
      <div className="learn-section">
        <h3>Learn and get inspired</h3>
        <div className="learn-cards">
          <div className="card">
            <div className="card-icon">🚀</div>
            <div className="card-text">
              <h4>Documentation</h4>
              <p>Learn to use Xano best practices</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">👥</div>
            <div className="card-text">
              <h4>Community</h4>
              <p>Connect with other Xano users</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">📺</div>
            <div className="card-text">
              <h4>YouTube Channel</h4>
              <p>New videos weekly!</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🛒</div>
            <div className="card-text">
              <h4>Marketplace</h4>
              <p>Connect with Xano experts</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">❓</div>
            <div className="card-text">
              <h4>FAQs</h4>
              <p>Common questions and answers</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">📦</div>
            <div className="card-text">
              <h4>Templates</h4>
              <p>Complete backends for use cases</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Ready to Build */}
      <div className="dashboard-container">
        <h1>Ready to build a secure and scalable backend?</h1>
        <p>
          Get started with one of the options below and start accelerating
          development with no-code.
        </p>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Check out the tutorial</h2>
            <p>
              A guided use case to help you learn how Xano can help you build a
              great backend.
            </p>
            <p>13 min to complete</p>
            <button className="primary-btn">Get started</button>
          </div>

          <div className="dashboard-card">
            <h2>Introduce yourself to the Xano Community</h2>
            <p>
              Connect with fellow Xano users, seek assistance, and discover
              resources to enhance your journey.
            </p>
            <button className="secondary-btn">Join our community</button>
          </div>

          <div className="dashboard-card">
            <h2>Quickstart guide</h2>
            <p>
              Take a look at our curated selection of videos and suggested tasks
              to help you get familiar with Xano.
            </p>
            <p>2 hrs to complete</p>
            <button className="primary-btn">Get started</button>
          </div>

          <div className="dashboard-card">
            <h2>Build an API</h2>
            <p>
              Ready to dig in? Start building an API endpoint using Xano's
              no-code API builder.
            </p>
            <button className="primary-btn">Add an endpoint</button>
          </div>

          <div className="dashboard-card">
            <h2>Bring your data into Xano</h2>
            <p>
              Import your data from Airtable or CSV. You can also copy and paste
              data into a database table.
            </p>
            <p>4 min to complete</p>
            <button className="primary-btn">Import data</button>
          </div>

          <div className="dashboard-card">
            <h2>Authentication</h2>
            <p>
              Xano can automatically set up user authentication/login with email
              and OAuth services.
            </p>
            <p>9 min to complete</p>
            <button className="primary-btn">Set up authentication</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
