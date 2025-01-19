import HomePage from '../../pages/HomePage';
import BookingPage from '../../pages/BookingPage';
import ConfirmedBookingPage from '../../pages/ConfirmedBookingPage';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    console.log('Main component loaded'); // Debug log for Main component

    return (
        <>
            {/* ROUTES */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {console.log('HomePage route loaded')} {/* Debug log for HomePage */}
                            <HomePage />
                        </>
                    }
                />
                <Route
                    path="/bookings"
                    element={
                        <>
                            {console.log('BookingPage route loaded')} {/* Debug log for BookingPage */}
                            <BookingPage />
                        </>
                    }
                />
                <Route
                    path="/confirmed"
                    element={
                        <>
                            {console.log('ConfirmedBookingPage route loaded')} {/* Debug log for ConfirmedBookingPage */}
                            <ConfirmedBookingPage />
                        </>
                    }
                />
            </Routes>
        </>
    );
};

export default Main;
