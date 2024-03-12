import axios from "axios";
import store from '@models/redux/store';
import { getInfo } from "@utilis/plugins/NetInfo.plugin";
import appConfig from '@config/app.config';
import { useStore } from "react-redux";
const { baseURL, header, log } = appConfig.apiConnections.server

// onRequest
const requestHandler = async (request: any) => {
    const { isLoggedIn }: any = store.getState()?.system?? {}
    const network = await getInfo()
    
    console.log("isLoggedIn", isLoggedIn)
    
    
    // Set default header if exist
    if (header) request.headers = {
        ...header,
        "Authorization": isLoggedIn?.auth_token?? '',
        ...request.headers,
    }

    // stop req if network not exist
    if (!network.isOnline) return false
    // log req if apiLog is true
    if (log) console.log("### request from fabmerce", request)
    return request;
}

// onResponse
const responseHandler = (response: any) => response

// onError
const errorHandler = (mode: string, error: any) => {
    return Promise.reject(error?.response?.data)
}

// onRequest Interceptor
const requestInterceptor = axios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler("onRequest-fabmerce-interceptor", error)
);

// onResponse Interceptor
const responseInterceptor = axios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler("onResponse-fabmerce-interceptor", error)
);

// Interceptor configure
axios.defaults.baseURL = baseURL
export default () => {
    props: {
        navigation: {
            type: Object
        }
    }
    requestInterceptor
    responseInterceptor
}