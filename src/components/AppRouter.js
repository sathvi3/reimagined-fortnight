import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gateway from './Gateway';
import Device from './Device';
import Application from './Application';
import DeviceProfile from './DeviceProfile';
import Frames from './Frames';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/gateway-onboarding' element={ <Gateway /> } />
                <Route path='/device-profile' element={ <DeviceProfile /> } />
                <Route path='/application' element={ <Application /> } />
                <Route path='/device-onboarding' element={ <Device /> } />
                <Route path='/frames' element={ <Frames /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;