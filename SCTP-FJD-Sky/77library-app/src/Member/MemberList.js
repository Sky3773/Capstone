import React, { useEffect, useState } from 'react';

const MemberList = ({ members }) => {
    return (
        <div>
            <h2>Member List</h2>
            <ul>
                {members.map(member => (
                    <li key={member.id}>
                        {`ID: ${member.memberID}, Name: ${member.name}, Address: ${member.address}, Email: ${member.email}, Phone: ${member.number}`}
                        </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default MemberList;