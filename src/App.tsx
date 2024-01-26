import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {Layout} from './components/Layout/Layout';
import {PostList} from './components/PostList/PostList';
import {Contacts} from './components/Contacts/contacts';


const App: FC = () => {
    return (
        <Routes>
            <Route path="/"
                   element={<Layout/>}
            >
                <Route index
                       element={<Home/>}
                />
                <Route path="/posts"
                       element={<PostList/>}
                />
                <Route path="/contacts"
                       element={<Contacts/>}
                />
            </Route>

        </Routes>
    );
};

export {App};