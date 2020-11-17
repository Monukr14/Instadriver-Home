import React from 'react'
import "./Content.css";
import ContentHeader from './Header'
import ContentServie from './Services'
import Portfolio from './Portfolio'
export default function Content() {
    return (
        <div>
            <ContentHeader />
            <ContentServie />
            <Portfolio />
        </div>
    )
}
