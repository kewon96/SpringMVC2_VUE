import { toRaw, unref } from 'vue'
import _axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'

// const BASEURL = import.meta.env.VITE_BASEURL
// const _axios = axios.create({
//   baseURL: BASEURL,
//   // cancelToken: undefined
// })
_axios.defaults.baseURL = 'http://localhost:8080';

interface CurrentExecutingRequest extends AxiosRequestConfig {
  [index: string]: any;
}

// https://stackoverflow.com/questions/50461746/axios-how-to-cancel-request-inside-request-interceptor-properly/67266644#67266644

const currentExecutingRequests: CurrentExecutingRequest = {};

_axios.interceptors.request.use(
    (req) => {
      let originalRequest = req;
      const url: any = originalRequest.url;

      if (currentExecutingRequests[url]) {
        const source = currentExecutingRequests[url];
        delete currentExecutingRequests[url];
        source.cancel();
      }

      const CancelToken = _axios.CancelToken;
      const source = CancelToken.source();
      originalRequest.cancelToken = source.token;
      currentExecutingRequests[url] = source;

      // here you could add the authorization header to the request
      return originalRequest;
    },
    (err) => {
      return Promise.reject(err);
    }
);

_axios.interceptors.response.use(
    (response) => {
      if (currentExecutingRequests[response.request.responseURL]) {
        // here you clean the request
        delete currentExecutingRequests[response.request.responseURL];
      }

      return response;
    },
    (error) => {
      const { config } = error;
      const originalRequest = config;

      if (_axios.isCancel(error)) {
        // here you check if this is a cancelled request to drop it silently (without error)
        return new Promise(() => {});
      }

      if (currentExecutingRequests[originalRequest.url]) {
        // here you clean the request
        delete currentExecutingRequests[originalRequest.url];
      }

      // here you could check expired token and refresh it if necessary
      throw new _axios.Cancel(error.response.data?.message);
    }
);

/**
 * GET 요청을 한다.
 * @param url `string` 요청할 url 경로
 * @param data ? `any` 요청할 데이터
 * @param config ? `AxiosRequestConfig` axios의 request 옵션
 * 
 * @return 
 * ```  
 * Promise<{
 *   data: any,
 *   [key: string]: any
 * }>
 * ```
 */
async function get(url: string, data?: any, config?: AxiosRequestConfig) {
  const plainData = toRaw(unref(data)) || {}
  if (plainData && data) {
    url += '?' + Object.keys(plainData).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(plainData[k])
    }).join('&')
  }
  return (await response(url, undefined, config, true))
}

/**
 * POST 요청을 한다.
 * @param url `string` 요청할 url 경로
 * @param data ? `any` 요청할 데이터
 * @param config ? `AxiosRequestConfig`
 * 
 * @return 
 * ```   
 * {
 *   data: T,
 *   [key: string]: any
 * }
 * ```
 */
async function post(url: string, data?: any, config?: AxiosRequestConfig) {
  const plainData = toRaw(unref(data)) || {}

  return (await response(url, plainData, config))
}

/**
 * POST 요청을 한다. 응답으로 AxiosResponse 자체를 리턴한다.
 * @param url `string` 요청할 url 경로
 * @param data ? `any` 요청할 데이터
 * @param config ? `AxiosRequestConfig`
 * @param isGetMethod 해당요청이 get방식인지
 *
 * @return Promise<AxiosResponse<T>>
 */
async function response(url: string, data?: any, config?: AxiosRequestConfig, isGetMethod?: boolean) {
  try {
    if (isGetMethod) return await _axios.get(url, config)
    else return await _axios.post(url, data, config)
  } catch (e) {
    return Promise.reject(e)
  }
}

const http = {
  get,
  post,
}

export default http