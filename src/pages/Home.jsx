import React from "react";
import Header from "./Header";
import { NavLink } from "react-router";
import "./Home.css";

const Home = () => {
    return (
        <div id="home-page" className="home-container">
            <Header />
            
            <div className="home-content-wrapper">
                {/* Left Side: Clean Heading & Hover-Arrow Buttons */}
                <div className="home-left-section" id="home-left">
                    <h1 id="home-title">Manage Your Data & Store</h1>
                    <p className="home-subtitle">
                        Access real-time user directories and explore product catalogs with fast, seamless navigation.
                    </p>
                    
                    <div id="home-buttons-container" className="home-buttons">
                        <NavLink to="/users" id="goto-users-btn" className="home-nav-btn user-btn">
                            <span className="btn-text">Explore Users</span>
                            <span className="btn-arrow">→</span>
                        </NavLink>
                        
                        <NavLink to="/products" id="goto-products-btn" className="home-nav-btn product-btn">
                            <span className="btn-text">View Products</span>
                            <span className="btn-arrow">→</span>
                        </NavLink>
                    </div>
                </div>

                {/* Right Side: Clean, Realistic Dashboard Card */}
                <div className="home-right-section" id="home-right-card">
                    <div className="dashboard-card">
                        <div className="card-top">
                            <h3>System Overview</h3>
                            <span className="version-tag">v2.0</span>
                        </div>
                        
                        <p className="card-desc">
                            Everything synced in one place. Select any module from the left to fetch and filter live records.
                        </p>
                        
                        <div className="stats-grid">
                            <div className="stat-box">
                                <span className="stat-label">Users Module</span>
                                <span className="stat-value">Ready</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-label">Products API</span>
                                <span className="stat-value">Connected</span>
                            </div>
                        </div>

                        <div className="progress-section">
                            <div className="progress-label">
                                <span>Database Sync</span>
                                <span>100%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;