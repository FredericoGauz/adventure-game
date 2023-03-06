import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import { Layout } from './pages/layout.page';

export interface AppProps {}
export const App = observer(({}: AppProps) => {
    return (
        <Layout>
            <div className="top-bar">
                {/* <button
                    onClick={() => applicationState.toggleDebug()}
                    className="debug"
                >
                    {applicationState.debug ? 'Debugging' : 'Not Debugging'}
                </button> */}
            </div>
            <Outlet />
        </Layout>
    );
});
