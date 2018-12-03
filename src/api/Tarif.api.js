import axios from "axios";
import {flatReq} from './Api.manager';

export function getElems() {
    return flatReq(axios.get(""));
}