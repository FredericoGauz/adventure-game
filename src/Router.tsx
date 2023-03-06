import { BrowserRouter as MainRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { SecondPage } from './pages';

export interface RouterProps {}

export const Router = ({}: RouterProps) => {
    return (
        <MainRouter>
            <Routes>
                <Route path="/" element={<App />} > 
                    <Route path="/" element={<p>Main</p>} />
                    <Route path="/second" element={<SecondPage />} />
                </Route>
            </Routes>
        </MainRouter>
    );
};
