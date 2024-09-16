export const useGetuserInfo = () => {
    const { name , profilePhoto , isAuth} = JSON.parse(
        localStorage.getItem("auth")
    );
    console.log(name, profilePhoto, isAuth);
    
    return { name , profilePhoto , isAuth };
}