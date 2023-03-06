import { BrowserRouter as MainRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { SecondPage } from './pages';
import { StartPage } from './pages/start.page';

export interface RouterProps {}

export const Router = ({}: RouterProps) => {
    return (
        <MainRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/second" element={<SecondPage />} />
                </Route>
            </Routes>
        </MainRouter>
    );
};
