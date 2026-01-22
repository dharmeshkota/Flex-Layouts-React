import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import TwitterLayout from './pages/twitter';
import GmailLayout from './pages/gmail';
import AirbnbLayout from './pages/airbnb';
import MapLayout from './pages/map';
import DashboardLayout from './pages/dashboard';
import CRMLayout from './pages/crm';
import ZohoLayout from './pages/zoho';
import KanbanBoard from './pages/kanban';
import MessengerLayout from './pages/messenger';
import ProfileLayout from './pages/profile';
import SearchLayout from './pages/search';
import VideoPlayerLayout from './pages/video-player';
import ECommercePDP from './pages/amazon';
import LiveScoreLayout from './pages/live-score';
import SettingsLayout from './pages/settings';
import FormBuilderLayout from './pages/form-builder';

function App() {
    return (
        <div className="h-screen flex">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/twitter" element={<TwitterLayout />} />
                <Route path="/gmail" element={<GmailLayout />} />
                <Route path='/airbnb' element={<AirbnbLayout />}/>
                <Route path='/map' element={<MapLayout />}/>
                <Route path='/dashboard' element={<DashboardLayout />}/>
                <Route path='/crm' element={<CRMLayout />}/>
                <Route path='/zoho' element={<ZohoLayout />}/>
                <Route path='/kanban' element={<KanbanBoard />}/>
                <Route path='/messenger' element={<MessengerLayout />}/>
                <Route path='/profile' element={<ProfileLayout />}/>
                <Route path='/search' element={<SearchLayout />}/>
                <Route path='/video-player' element={<VideoPlayerLayout />}/>
                <Route path='/amazon' element={<ECommercePDP />}/>
                <Route path='/live-score' element={<LiveScoreLayout />}/>
                <Route path='/settings' element={<SettingsLayout />}/>
                <Route path='/form-builder' element={<FormBuilderLayout />}/>
            </Routes>
        </div>
    )
}

export default App