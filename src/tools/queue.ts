namespace jaxon.tools {
    export class queue {
        /**
         * The position of the first element in the queue.
         *
         * @var start
         */
        start: number;

        /**
         * The number of elements in the queue.
         *
         * @var count
         */
        count: number;

        /**
         * The max size of the queue.
         *
         * @var size
         */
        size: number;

        /**
         * The position of the last element in the queue.
         *
         * @var end
         */
        end: number;

        /**
         * The elements in the queue.
         *
         * @var elements
         */
        elements: Array<any>;

        /**
         * The timeout.
         *
         * @var timeout
         */
        timeout: any;

        /**
         * Construct and return a new queue object.
         *
         * @param number size The number of entries the queue will be able to hold.
         */
        constructor(size: number) {
            this.start = 0;
            this.count = 0;
            this.size = size;
            this.end = 0;
            this.elements = [];
            this.timeout = null;
        }

        /**
         * Check id a queue is empty.
         *
         * @returns boolean
         */
        empty() {
            return (this.count <= 0);
        }

        /**
         * Check id a queue is empty.
         *
         * @returns boolean
         */
        full() {
            return (this.count >= this.size);
        }

        /**
         * Push a new object into the tail of the buffer maintained by the specified queue object.
         *
          * @param object obj    The object you would like stored in the queue.
         *
         * @returns integer The number of entries in the queue.
         */
        push(obj) {
            // No push if the queue is full.
            if(this.full()) {
                throw { code: 10003 };
            }

            this.elements[this.end] = obj;
            if(++this.end >= this.size) {
                this.end = 0;
            }
            return ++this.count;
        }

        /**
         * Push a new object into the head of the buffer maintained by the specified queue object.
         *
         * This effectively pushes an object to the front of the queue... it will be processed first.
         *
         * @param object obj    The object you would like stored in the queue.
         *
         * @returns integer The number of entries in the queue.
         */
        pushFront(obj) {
            // No push if the queue is full.
            if(this.full()) {
                throw { code: 10003 };
            }

            // Simply push if the queue is empty
            if(this.empty()) {
                return this.push(obj);
            }

            // Put the object one position back.
            if(--this.start < 0) {
                this.start = this.size - 1;
            }
            this.elements[this.start] = obj;
            return ++this.count;
        }

        /**
         * Attempt to pop an object off the head of the queue.
         *
         * @returns object|null The object that was at the head of the queue or null if the queue was empty.
         */
        pop() {
            if(this.empty()) {
                return null;
            }

            let obj = this.elements[this.start];
            delete this.elements[this.start];
            if(++this.start >= this.size) {
                this.start = 0;
            }
            this.count--;
            return obj;
        }

        /**
         * Attempt to pop an object off the head of the queue.
         *
         * @returns object|null The object that was at the head of the queue or null if the queue was empty.
         */
        peek() {
            if(this.empty()) {
                return null;
            }
            return this.elements[this.start];
        }
    }
}
