import React, {useState, useEffect} from 'react'
import { List, ProfileContainer, ProfilePicture, Title, Item, UserName } from './styles/Profile'
import { useUserAuth } from '../../contexts/firebaseContext'




const Profile = ({src}) => {

    const loadingImage = 'https://github.com/karlhadwen/netflix/blob/master/public/images/misc/loading.gif?raw=true'

    const [loading, setLoading] = useState({})
    const [profile, setProfile] = useState(true)
    const firebase = useUserAuth(true)
    const user = firebase.currentUser || {}

    useEffect(() => {
        console.log('profile', profile)
        setTimeout(()=> {
            setLoading()
        })
        
    }, [profile.displayName])
    return (
        <>
        <ProfileContainer>
            <Title> Who's watching</Title>
            <List>
                <Item onClick={()=> setProfile({displayName: user.displayName, photoUrl: user.photoUrl})}>
                    <ProfilePicture src={src ? user.photoURL :  loadingImage} />
                    <UserName>{user.displayName}</UserName>
                </Item>
            </List>
        </ProfileContainer>
        </>
    )
}

export default Profile
