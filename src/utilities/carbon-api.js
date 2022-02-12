import apiRequest from './api-request';

export default function add(postCarbon) {
  return apiRequest('POST', postCarbon)
}