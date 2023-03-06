import { observer } from 'mobx-react';
import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { applicationState } from "./state/application.state";

export interface AppProps {}
export const App = observer(({}: AppProps) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="top-bar"><Navigation /><button onClick={() => applicationState.toggleDebug()} className="debug">{applicationState.debug ? 'Debugging': 'Not Debugging'}</button></div>
            <header>
                <h1 className="text-red-500 font-bold">Vite Stater</h1>
            </header>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex justify-center items-center gap-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
});
