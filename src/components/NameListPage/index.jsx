// NameListPage.js
import React from 'react';
import NameList from '../NameList';
import WelcomeMessage from '../WelcomeMessage';


function NameListPage() {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500'>
            <WelcomeMessage />
            <NameList />
        </div>
    );
}

export default NameListPage;