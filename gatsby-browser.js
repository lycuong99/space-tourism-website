
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WrapPage } from './src/components/WrapPage';

export const onInitialClientRender = () => {
    setTimeout(function () {
        // document.querySelector("body").classList.add(".loading-page");
        // document.getElementsByClassName(".loading-page")[0].style.opacity = 0;
        console.log('HELLO loading')
    }, 4000);
}

export const wrapPageElement = ({ element }) => {

    return (
        <WrapPage>
            <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
        </WrapPage>
    )
};


