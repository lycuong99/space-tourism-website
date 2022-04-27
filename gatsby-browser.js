/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it


export const onInitialClientRender = () => {
    setTimeout(function () {
        // document.querySelector("body").classList.add(".loading-page");
        // document.getElementsByClassName(".loading-page")[0].style.opacity = 0;
        console.log('HELLO loading')
    }, 4000);
}