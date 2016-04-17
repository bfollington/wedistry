import {assign} from "lodash";

export default function clone(...args) {
    return assign({}, ...args);
}
