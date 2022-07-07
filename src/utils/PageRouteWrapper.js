import React, { useCallback, useEffect, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { UseAppContext } from "../context/AppContext";
import Loading from "../components/Loading/Loading";
import CustomHelmet from "./CustomHelmet";

// This utility component helps the page components perform all the common things they need to do when rendered
const PageRouteWrapper = () => {
    const { activemenu, setActivemenu } = UseAppContext();
    const location = useLocation();

    const evaluateActiveMenu = useCallback(() => {
        if (activemenu !== location.pathname) {
            setActivemenu(location.pathname);
        }
    }, [activemenu, location, setActivemenu]);

    useEffect(() => {
        evaluateActiveMenu();
    }, [activemenu, evaluateActiveMenu]);

    return (
        <>
            <CustomHelmet />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default PageRouteWrapper;
