import React, { lazy, Suspense } from 'react';
import spinner from "../css/gifs/spinner.gif"
import '../css/spinner/spinner.css'
const HomePage  = lazy(() => import('../components/HomePage'));

export const renderHomePage = (props) => {
    return (
    <Suspense fallback={<div className="loader loader-search"    ><img src={spinner} /></div>}>
        <HomePage {...props} />
    </Suspense>
    )
}