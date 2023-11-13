import React, { useEffect, useState } from 'react'
import axios from 'axios';


function UserProbsDataAnaly() {
    const [userProbsData, setUserProbsData] = useState([]);
    const user_id = sessionStorage.getItem('user_id')
    const getCompes = async () => {
        const url = `/users/getproblemlanguagecount/${user_id}`;
        const res = await axios(url);
        console.log(res.data);
        setUserProbsData(res.data);

    }


    useEffect(() => {
        getCompes();
    }, []);

  return (
    <div>UserProbsDataAnaly
                <tbody>
                    {userProbsData.map(userProbsDat =>
                        <tr key={userProbsDat.sel_language}>
                            <td>{userProbsDat.sel_language}</td>
                            <td>{userProbsDat.language_count}</td>
            
                        </tr>
                    )}
                </tbody>

                이걸로 빈도수그래프 ㅇㅋ?





    </div>

  )
}

export default UserProbsDataAnaly