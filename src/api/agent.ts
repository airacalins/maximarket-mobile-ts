import axios, { AxiosError, AxiosResponse } from 'axios';
import Toast from 'react-native-toast-message'

axios.defaults.baseURL = 'https://fast-badlands-66183.herokuapp.com/api/';

const responseBody = (response: any) => response.data;

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
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  fileUpload: (url: string, body: {}) => axios.post(url, body, { headers: { 'Content-Type': 'multipart/form-data' }})
};

const Announcement = {
  list: () => request.get('announcements'),
  details: (id: string) => request.get(`announcements/${id}`),
}

const Invoice = {
  list: (id: string) => request.get(`invoices/get-tenant-invoice-by-account-number/${id}`),
  create: (values: any) => request.fileUpload('invoices/payment/', values),
  details: (id: string) => request.get(`invoices/${id}`),
}

const ModeOfPayment = {
  list: () => request.get('modeOfPayments')
}

const Slot = {
  list: () => request.get('slots'),
  details: (id: string) => request.get(`slots/${id}`),
}

const Tenant = {
  details: (id :string) => request.get(`tenants/get-tenant-by-account-number/${id}`),
  getContractPhotos: (id: string) => request.get(`tenants/get-contract-photo/${id}`),
  update: (values: any) => request.put('tenants', values),
};

const agent = {
  Announcement,
  Invoice,
  ModeOfPayment,
  Slot,
  Tenant
};

export default agent;
