
import React from 'react';
import { AnimatePresence } from 'framer-motion';

export const onInitialClientRender = () => {
    setTimeout(function () {
        // document.querySelector("body").classList.add(".loading-page");
        // document.getElementsByClassName(".loading-page")[0].style.opacity = 0;
        console.log('HELLO loading')
    }, 4000);
}

export const wrapPageElement = ({ element }) => (
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);