import fetch from 'isomorphic-unfetch';

export const BASEURL = 'https://aahmedsamyspecialoffer.pythonanywhere.com';

class API {
  constructor() {
    this.baseUrl = `${BASEURL}/api`;
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
    this.delete = this.delete.bind(this);
    this.put = this.put.bind(this);
  }
  post({
    customHeaders = null, needsAuthentication = false, requestPayload = {}, customURL = '', url,
  }) {
    const completeUrl = `${this.baseUrl}/${url}`;

    const headers = { ...this.headers, ...customHeaders };
    const body = JSON.stringify(requestPayload);
    console.log('Tag', 'post', body, completeUrl, headers);
    return fetch(completeUrl, {
      method: 'post',
      headers,
      body
    }).then((resp) => {
      console.log('TAG', 'resp', resp);
      return Promise.resolve(resp);
    }).catch((error) => {
      console.log('TAG', 'error', error, body);
      //   if (error.message == 'Network request failed') {
      //     const resetAction = StackActions.reset({
      //       index: 0,
      //       key: null,
      //       actions: [
      //         NavigationActions.navigate({ routeName: 'NetworkError' })
      //       ],
      //     });
      //     NavigationService.getNavigationRef().dispatch(resetAction);
      //     return Promise.reject(error.message);
      //   }

      return Promise.reject(error);
    });
  }

  put({
    customHeaders = null, needsAuthentication = false, requestPayload = {}, customURL = '', url,
  }) {
    const completeUrl = `${this.baseUrl}/${url}`;
    const headers = { ...this.headers, ...customHeaders };
    const body = JSON.stringify(requestPayload);
    console.log('TAG', 'PUT FETCH', completeUrl, ' ', headers, ' ', body);
    return fetch(completeUrl, {
      method: 'put',
      headers,
      body
    }).then((resp) => {
      // console.log("TAG", "resp", resp)
      return Promise.resolve(resp);
    }).catch((error) => {
      console.log('TAG', 'error', error);
      return Promise.reject(error);
    });
  }

  get({
    url, customHeaders = null
  }) {
    const completeUrl = `${this.baseUrl}/${url}`;
    const headers = { ...this.headers, ...customHeaders };
    return fetch(completeUrl, {
      method: 'get',
      headers
    }).then((resp) => {
      // console.log("TAG", "resp", resp)
      return Promise.resolve(resp);
    }).catch((error) => {
      console.log('TAG', 'error', error);
      return Promise.reject(error);
    });
  }
  delete({ url, customHeaders, id }) {
    const completeUrl = `${this.baseUrl}/${url}`;
    console.log('url', completeUrl);
    const headers = { ...this.headers, ...customHeaders };
    return fetch(completeUrl, {
      method: 'delete',
      headers,
    }).then((resp) => {
      // console.log("TAG", "resp", resp)
      return Promise.resolve(resp);
    }).catch((error) => {
      console.log('TAG', 'error', error);
      return Promise.reject(error);
    });
  }
}


export default new API();
