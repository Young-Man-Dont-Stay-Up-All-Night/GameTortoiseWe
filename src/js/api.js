/* import {
   Toast,
 } from 'mint-ui';*/

 const api = {
   apiConfig() {
     return {
       baseURL: 'http://192.168.0.120:8001/',
       timeout: 1000000,
       transformResponse: [function (data) {
         // 这里提前处理返回的数据
         data = eval(`(${data})`);
         data = eval(`(${data.d})`);
         if (data.ErrCode !== 0) {
  /*         Toast({
             message: data.ErrMsg,
             position: 'bottom',
             duration: 5000,
           });*/
         }
         return data;
       }],
     };
   },

 }; // //////////api存放位置
 export default api;
