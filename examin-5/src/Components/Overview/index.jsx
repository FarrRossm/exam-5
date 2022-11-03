import React from 'react';
import AccountImage from '../images/akk.jfif';
import Users from '../images/people.svg';
const AccountMain = () => {
    return (
        <>
            <div className="account">
                <div className="account-image ">
                    <a href="https://github.com/settings/profile" className='avatar'> <img src={AccountImage} alt="akk" /></a>
                </div>
                <div className="account-name ">
                    <div><span> FarrRoss </span></div>
                    <div><button>Edit Profile</button></div>

                </div>
                <div className="account-follower">
                    <div className="followers">
                        <a href="#"><img src={Users} alt="rasm" />0 followers</a>
                    </div>
                    <div className="following">
                        <a href="#">1 following</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountMain;