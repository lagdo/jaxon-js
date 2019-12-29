namespace jaxon.tools {
    export class ajax {
        /*
        Construct an XMLHttpRequest object dependent on the capabilities of the browser.

        Returns:
        object - Javascript XHR object.
        */
        createRequest() {
            if ('undefined' != typeof XMLHttpRequest) {
                this.createRequest = function() {
                    return new XMLHttpRequest();
                }
            } else if ('undefined' != typeof ActiveXObject) {
                this.createRequest = function() {
                    try {
                        return new ActiveXObject('Msxml2.XMLHTTP.4.0');
                    } catch (e) {
                        this.createRequest = function() {
                            try {
                                return new ActiveXObject('Msxml2.XMLHTTP');
                            } catch (e2) {
                                this.createRequest = function() {
                                    return new ActiveXObject('Microsoft.XMLHTTP');
                                }
                                return this.createRequest();
                            }
                        }
                        return this.createRequest();
                    }
                }
            } else if (window.createRequest) {
                this.createRequest = function() {
                    return window.createRequest();
                };
            } else {
                this.createRequest = function() {
                    throw { code: 10002 };
                };
            }

            // this would seem to cause an infinite loop, however, the function should
            // be reassigned by now and therefore, it will not loop.
            return this.createRequest();
        }

        /*
        Parse the JSON response into a series of commands.

        Parameters:
        oRequest - (object):  The request context object.
        */
        processFragment(nodes, seq, oRet, oRequest) {
            var xx = jaxon;
            var xt = xx.tools;
            for (let nodeName in nodes) {
                if ('jxnobj' == nodeName) {
                    for (let a in nodes[nodeName]) {
                        /*
                        prevents from using not numbered indexes of 'jxnobj'
                        nodes[nodeName][a]= "0" is an valid jaxon response stack item
                        nodes[nodeName][a]= "pop" is an method from somewhere but not from jxnobj
                        */
                        if (parseInt(a) != a) continue;

                        var obj = nodes[nodeName][a];
                        obj.fullName = '*unknown*';
                        obj.sequence = seq;
                        obj.request = oRequest;
                        obj.context = oRequest.context;
                        xt.queue.push(xx.response, obj);
                        ++seq;
                    }
                } else if ('jxnrv' == nodeName) {
                    oRet = nodes[nodeName];
                } else if ('debugmsg' == nodeName) {
                    txt = nodes[nodeName];
                } else
                    throw { code: 10004, data: obj.fullName }
            }
            return oRet;
        }

        /*
        Maintains a retry counter for the given object.

        Parameters:
        obj - (object):
            The object to track the retry count for.
        count - (integer):
            The number of times the operation should be attempted before a failure is indicated.

        Returns:
        true - The object has not exhausted all the retries.
        false - The object has exhausted the retry count specified.
        */
        retry(obj, count) {
            var retries = obj.retries;
            if(retries) {
                --retries;
                if(1 > retries)
                    return false;
            } else retries = count;
            obj.retries = retries;
            return true;
        }
    }
}
