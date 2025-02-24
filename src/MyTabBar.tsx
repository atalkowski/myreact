import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App2.css'

const MyTabBar = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('entrees');  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(tabName === "original" ? "/notes/index.html" : tabName); 
  };

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <div className="tab-bar">
        <button className={activeTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}>Home</button>&nbsp;&nbsp;
        <button className={activeTab === 'entrees' ? 'active' : ''} onClick={() => handleTabClick('entrees')}>Links</button>&nbsp;&nbsp;
        <button className={activeTab === 'groups' ? 'active' : ''} onClick={() => handleTabClick('groups')}>Groups</button>&nbsp;&nbsp;
        <button className={activeTab === 'jobs' ? 'active' : ''} onClick={() => handleTabClick('jobs')}>Jobs</button>&nbsp;&nbsp;
        <button className={activeTab === 'original' ? 'active' : ''} onClick={() => openNewTab('/notes/index.html')}>Original ... </button>
        
      </div>
      <div className="tab-content">
        <p>
        <br/>
        {activeTab === 'home' && <div><b>Home:</b> purpose of this project</div>}
        {activeTab === 'entrees' && <div><b>Links:</b> as your aide memoires - put into groups</div>}
        {activeTab === 'groups'  && <div><b>Groups:</b> to set up categories for your links</div>}
        {activeTab === 'jobs'    && <div><b>Jobs:</b> to track your job applications (we don't need this!)</div>}
        {activeTab === 'original'  && <div><b>Original:</b> what this demo is trying to replace</div>}
        </p>
      </div>

    </div>
  );
}

export default MyTabBar
