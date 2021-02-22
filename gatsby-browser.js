// import '@fontsource/roboto';
import '@fontsource/noto-sans';
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/styles/global.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version ?`
    )

    if (answer === true) {
        window.location.reload()
    }
}