import axios, { AxiosError, AxiosResponse } from 'axios';

import Toast from 'react-native-toast-message'

axios.defaults.baseURL = 'https://fast-badlands-66183.herokuapp.com/api/';

const responseBody = (response) => response.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
              Toast.show({ type: 'error', text1: "Error message", text2: data.errors[key][0] });
            }
          }
          throw modelStateErrors.flat();
        }
        Toast.show(data.title);
        break;

      case 401:
        Toast.show({ type: 'error', text1: "Error message", text2: data.title || 'Unauthorized' });
        break;

      case 500:
        Toast.show({ type: 'error', text1: "Error message", text2: "Server error" });
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
  fileUpload: (url, body) => axios.post(url, body, { headers: { 'Content-Type': 'multipart/form-data' } }).then(responseBody)
};

const Announcement = {
  list: () => request.get('announcements'),
  details: (id) => request.get(`announcements/${id}`),
}

const Invoice = {
  list: (id) => request.get(`invoices/get-tenant-invoice-by-account-number/${id}`),
  create: (values) => request.fileUpload('invoices/payment/', values),
  details: (id) => request.get(`invoices/${id}`),
}


const ModeOfPayment = {
  list: () => request.get('modeOfPayments')
}

const Slot = {
  list: () => request.get('slots')
}

const Tenant = {
  details: (id) => request.get(`tenants/get-tenant-by-account-number/${id}`),
  getContractPhotos: (id) => request.get(`tenants/get-contract-photo/${id}`),
  update: (values) => request.put('tenants', values),
};


const agent = {
  Announcement,
  Invoice,
  ModeOfPayment,
  Slot,
  Tenant
};

export default agent;
