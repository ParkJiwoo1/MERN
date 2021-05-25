import React, {useState} from 'react';


//const [currentStorage, setCurrentStorage] = useState({});

var currentStorage = {}
var currentUser = '' //id
/*
export const getCurrentStorage = () => {
    return currentStorage;
}*/

export const getCurrentUser = () => {
    var loadedCurrentUser = currentUser;
    if (window.localStorage.getItem('current_user')) {
        loadedCurrentUser = window.localStorage.getItem('current_user');
        currentUser = loadedCurrentUser;
        console.log("currentuserID=",loadedCurrentUser);
    }

    return loadedCurrentUser;
}

export const setCurrentUser = (userID) => {
    var updatedUser = userID;
    currentUser = updatedUser
    //setCurrentStorage(updatedStorage);
    window.localStorage.setItem('current_user',updatedUser);

}

export const removeCurrentUser = () => {
    window.localStorage.removeItem('current_user');
    console.log("currentuser: ", currentUser); //wambsak
}

export const getCurrentStorage = () => {
    var loadedCurrentStorage = {...currentStorage};
    if (window.localStorage.getItem('users')) {
        currentStorage = JSON.parse(window.localStorage.getItem('users'));
        loadedCurrentStorage = currentStorage;
        //setCurrentStorage(JSON.parse(window.localStorage.getItem('users')));
    }
    return loadedCurrentStorage;
}

export const saveUser = (userID, password) => {
    var updatedStorage = {...currentStorage};
    updatedStorage[userID] = {
        password: password,
        productid : '',
        data: []
    }
    currentStorage = updatedStorage
    //setCurrentStorage(updatedStorage);
    window.localStorage.setItem('users',JSON.stringify(updatedStorage));

}



export const checkPW=(e)=>{
    var reg=/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/;
    return reg.test(e);
}

/*
const LocalStorageComponent=()=>{
    const[userName,setUserName]=useState("");
    const[check, setCheck]=useState(false);
    const [currentStorage, setCurrentStorage] = useState({});
/*
    structure:
    localStorage - user
    {
        userID1: {
            password: 123123,
            data: [{}],
        },
        userID2: {
            password: 123123,
            data: [{}],
        }, ....
    }
    export const getData = () => {
        if (window.localStorage.getItem('users')) {
            setCurrentStorage(JSON.parse(window.localStorage.getItem('users')));
        }
    }
    const saveUser = (userID, password) => {
        var updatedStorage = {...currentStorage};
        updatedStorage[userID] = {
            password: password,
            data: []
        }
        setCurrentStorage(updatedStorage);
        window.localStorage.setItem('users',JSON.stringify(updatedStorage));
    }
    const saveData=()=>{
        const userObj={name:userName};
        window.localStorage.setItem("userName",JSON.stringify(userObj));
    };
    const callData=()=>{
        setCheck(true);
    }
    const onChange=(e)=>{
        setUserName(e.target.value);
        setCheck(false);
    };
/*
    return(
        <div>
            <>
            name="userName"
            value={userName}
            onChange={onChange}
            </>
            
            {check ? <p>{window.localStorage.getItem("userName")}</p>:<></>}
        </div>
    );
    
};
export default LocalStorageComponent;*/