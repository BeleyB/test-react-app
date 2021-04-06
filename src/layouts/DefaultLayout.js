import AlertContainer from "../components/Alert/AlertContainer"
import { DefaultHeader } from "./Header/DefaultHeader"




export const DefaultLayout = ({ children }) => {
    return (
        <div>
            <DefaultHeader />
            <AlertContainer />
            <div className="container">
                {children}
            </div>
        </div>
    )
}