
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { WrapPage } from './src/components/WrapPage';


// export const onInitialClientRender = () => {
//     setTimeout(function () {
//         console.log('HELLO loading')
//     }, 4000);
// }

export const wrapPageElement = ({ element }) => {
    return (
        <WrapPage>
            <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
        </WrapPage>
    )
};



