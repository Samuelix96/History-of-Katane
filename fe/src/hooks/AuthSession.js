import { useEffect , useState} from "react";
import  {jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../middlewares/ProtectedRoutes"


export const useSession = () =>
{
    const navigate = useNavigate()
    const session = isAuth()
    const decodeSession = session ? jwtDecode(session) : null;
    console.log(decodeSession)
    

    const checkTokenExpirationTime = () =>
    {
        const convertUnixDateToMillisecond = decodeSession ? decodeSession.exp * 1000 : null;

        const expirationDate = new Date(convertUnixDateToMillisecond)
        const currentData = new Date()

        if (expirationDate < currentData)
        {
            localStorage.clear()
        }

        console.log(expirationDate)
    }

    return decodeSession


}