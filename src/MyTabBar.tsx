import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MyTabBar = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('entrees');  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(tabName);
  };

  return (
    <div>
      <div className="tab-bar">
        <button className={activeTab === 'groups' ? 'active' : ''} onClick={() => handleTabClick('groups')}>Groups</button>&nbsp;&nbsp;
        <button className={activeTab === 'entrees' ? 'active' : ''} onClick={() => handleTabClick('entrees')}>Links</button>&nbsp;&nbsp;
        <button className={activeTab === 'jobs' ? 'active' : ''} onClick={() => handleTabClick('jobs')}>Jobs</button>
      </div>
      <div className="tab-content">
        <p>
        {activeTab === 'groups'  && <div>Use <b>Groups</b> to set up categories for your links</div>}
        {activeTab === 'entrees' && <div>Use <b>Links</b> as your aide memoires - put into groups</div>}
        {activeTab === 'jobs'    && <div>Us <b>Jobs</b> to track your job applications (if you dare)</div>}
        </p>
      </div>

    </div>
  );
}

export default MyTabBar
