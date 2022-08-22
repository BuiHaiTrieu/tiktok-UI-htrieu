import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoutes } from './routes';
import DefaultLayout from './components/Layout/Default';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publishRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
/* {publishRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} component={Page}></Route>;
                    })} */
