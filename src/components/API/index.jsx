import axios from 'axios';

const API = axios.create({
    //alterar para o endereço do gateway da sua máquina
    //          IP                    PORTA GATEWAY + micro principal
    baseURL:'http://192.168.15.34' + ':8082' +'/olympics-medal-table-ms'
});
export default API;
//http://192.168.15.34:8082/ - casa de Pedro
//192.168.0.104 - minha casa