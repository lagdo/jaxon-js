namespace jaxon.cmd {
    export class style {
        /*
        Function: jaxon.cmd.style.add

        Add a LINK reference to the specified .css file if it does not already exist in the HEAD of the current document.

        Parameters:

        filename - (string):  The URI of the .css file to reference.
        media - (string):  The media type of the css file (print/screen/handheld,..)

        Returns:

        true - The operation completed successfully.
        */
        static add(fileName, media) {
            let oDoc = jaxon.config.baseDocument;
            let oHeads = oDoc.getElementsByTagName('head');
            let oHead = oHeads[0];
            let oLinks = oHead.getElementsByTagName('link');

            let found = false;
            let iLen = oLinks.length;
            for (let i = 0; i < iLen && false == found; ++i)
                if (0 <= oLinks[i].href.indexOf(fileName) && oLinks[i].media == media)
                    found = true;

            if (false == found) {
                let oCSS = oDoc.createElement('link');
                oCSS.rel = 'stylesheet';
                oCSS.type = 'text/css';
                oCSS.href = fileName;
                oCSS.media = media;
                oHead.appendChild(oCSS);
            }

            return true;
        }

        /*
        Function: jaxon.cmd.style.remove

        Locate and remove a LINK reference from the current document's HEAD.

        Parameters:

        filename - (string):  The URI of the .css file.

        Returns:

        true - The operation completed successfully.
        */
        static remove(fileName, media) {
            let oDoc = jaxon.config.baseDocument;
            let oHeads = oDoc.getElementsByTagName('head');
            let oHead = oHeads[0];
            let oLinks = oHead.getElementsByTagName('link');

            let i = 0;
            while (i < oLinks.length)
                if (0 <= oLinks[i].href.indexOf(fileName) && oLinks[i].media == media)
                    oHead.removeChild(oLinks[i]);
                else ++i;

            return true;
        }

        /*
        Function: jaxon.cmd.style.waitForCSS

        Attempt to detect when all .css files have been loaded once they are referenced by a LINK tag
        in the HEAD of the current document.

        Parameters:

        args - (object):  The response command object which will contain the following:
            - args.prop - (integer):  The number of 1/10ths of a second to wait before giving up.

        Returns:

        true - The .css files appear to be loaded.
        false - The .css files do not appear to be loaded and the timeout has not expired.
        */
        static waitForCSS(args) {
            let oDocSS = jaxon.config.baseDocument.styleSheets;
            let ssEnabled = [];
            for (let i = 0; i < oDocSS.length; ++i) {
                ssEnabled[i] = 0;
                try {
                    ssEnabled[i] = oDocSS[i].cssRules.length;
                } catch (e) {
                    try {
                        ssEnabled[i] = oDocSS[i].rules.length;
                    } catch (e) {}
                }
            }

            let ssLoaded = true;
            for (let i = 0; i < ssEnabled.length; ++i)
                if (0 == ssEnabled[i])
                    ssLoaded = false;

            if (false == ssLoaded) {
                // inject a delay in the queue processing
                // handle retry counter
                if (jaxon.tools.ajax.retry(args, args.prop)) {
                    jaxon.ajax.response.setWakeup(jaxon.response, 10);
                    return false;
                }
                // give up, continue processing queue
            }
            return true;
        }
    }
}
