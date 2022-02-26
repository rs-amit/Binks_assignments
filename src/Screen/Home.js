import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Component/Header';
import UserDetail from '../Component/UserDetail';
import UserList from '../Component/UserList';
import "./Home.css"

function Home() {

    const [users, setUser] = useState([])
    const [singleUsers, setSingleUsers] = useState(null)


    useEffect(() => {
        const getUserHandler = async () => {
            const res = await axios.get(`https://server.jerryroy.repl.co/api/Auth`)
            setUser(res.data.user)
        }
        getUserHandler()
    }, [])

    console.log(users)

    const singleUserHandler=async(id)=>{
        const res = await axios.get(`https://server.jerryroy.repl.co/api/Auth/user/${id}`)
        setSingleUsers(res.data.UserDetail)
        console.log(res.data.UserDetail)
        
    }




    return (
        <div className='home'>
            <div className="home-wrap">
                <Header />
                <div className='home-body'>
                    <div className='home-left'>
                        {
                            users?.map((user) => {
                                return <UserList user={user} key={user._id} singleUserHandler={singleUserHandler}/>
                            })
                        }
                    </div>
                    <div className='home-right'>
                        <UserDetail singleUsers={singleUsers}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;