import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import "./User.css";

const FetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to Fetch");
    return response.json();
}

const UserList = () => {
    // 1. inputValue state define kar di hai
    const [inputValue, setInputValue] = useState("");

    const { data: users, isLoading, isError, error } = useQuery({
        queryKey: ["users"],
        queryFn: FetchUser
    });

    if (isLoading) return <h1 id="user-loading">Loading......</h1>;
    if (isError) return <h1 id="user-error">{error.message}</h1>;

    // 2. Users ko name ya email ke zariye filter karna
    const filteredUsers = users ? users.filter((v) => {
       return v.name.toLowerCase().includes(inputValue.toLowerCase()) || 
              v.email.toLowerCase().includes(inputValue.toLowerCase());
    }) : [];

    return (
        <div id="user-page" className="user-container">
            <div className="user-header-section">
                <h2 id="user-heading">Users Directory</h2>
                
                {/* Search Input */}
                <input 
                    type="text" 
                    placeholder="Search user by name or email..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="user-search-input"
                />
            </div>
            
            <div id="user-grid" className="user-grid">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((v, i) => {
                        // 3. Explicit return add kar diya hai taake card properly render ho
                        return (
                            <div key={v.id || i} id={`user-card-${i}`} className="user-card">
                                <div className="user-avatar">
                                    {v.name.charAt(0)}
                                </div>
                                <div className="user-info">
                                    <h3 className="user-name">{v.name}</h3>
                                    <p className="user-email">✉️ {v.email}</p>
                                    <p className="user-phone">📞 {v.phone}</p>
                                    <p className="user-city">🏙️ {v.address?.city}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h3 className="no-users">No user found</h3>
                )}
            </div>

            {/* Bottom Right Sticky Back Home Button */}
            <NavLink to="/" id="back-home-btn" className="sticky-home-btn">
                Back Home
            </NavLink>
        </div>
    );
}

export default UserList;