
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WrapPage } from './src/components/WrapPage';
import { onInitialClientRender, wrapPageElement } from './gatsby-ssr.esm';

// export const onInitialClientRender = () => {
//     setTimeout(function () {
//         console.log('HELLO loading')
//     }, 4000);
// }

// export const wrapPageElement = ({ element }) => {
//     return (
//         <WrapPage>
//             <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
//         </WrapPage>
//     )
// };


exports.wrapPageElement = wrapPageElement;
exports.onInitialClientRender = onInitialClientRender;
