namespace jaxon.cmd {
    export class tree {
        static jxnElm: Array<any>;

        static startResponse(args) {
            tree.jxnElm = [];
        }

        static createElement(args) {
            eval(
                [args.tgt, ' = document.createElement(args.data)']
                .join('')
            );
        }

        static setAttribute(args) {
            args.context.jaxonDelegateCall = function() {
                eval(
                    [args.tgt, '.setAttribute(args.key, args.data)']
                    .join('')
                );
            }
            args.context.jaxonDelegateCall();
        }

        static appendChild(args) {
            args.context.jaxonDelegateCall = function() {
                eval(
                    [args.par, '.appendChild(', args.data, ')']
                    .join('')
                );
            }
            args.context.jaxonDelegateCall();
        }

        static insertBefore(args) {
            args.context.jaxonDelegateCall = function() {
                eval(
                    [args.tgt, '.parentNode.insertBefore(', args.data, ', ', args.tgt, ')']
                    .join('')
                );
            }
            args.context.jaxonDelegateCall();
        }

        static insertAfter(args) {
            args.context.jaxonDelegateCall = function() {
                eval(
                    [args.tgt, 'parentNode.insertBefore(', args.data, ', ', args.tgt, '.nextSibling)']
                    .join('')
                );
            }
            args.context.jaxonDelegateCall();
        }

        static appendText(args) {
            args.context.jaxonDelegateCall = function() {
                eval(
                    [args.par, '.appendChild(document.createTextNode(args.data))']
                    .join('')
                );
            }
            args.context.jaxonDelegateCall();
        }

        static removeChildren(args) {
            let skip = args.skip || 0;
            let remove = args.remove || -1;
            let element = null;
            args.context.jaxonDelegateCall = function() {
                eval(['element = ', args.data].join(''));
            }
            args.context.jaxonDelegateCall();
            let children = element.childNodes;
            for (let i in children) {
                if (isNaN(i) == false && children[i].nodeType == 1) {
                    if (skip > 0) skip = skip - 1;
                    else if (remove != 0) {
                        if (remove > 0)
                            remove = remove - 1;
                        element.removeChild(children[i]);
                    }
                }
            }
        }

        static endResponse(args) {
            tree.jxnElm = [];
        }
    }
}
