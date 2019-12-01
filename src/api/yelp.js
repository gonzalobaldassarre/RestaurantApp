import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YFU1JYVmNuoTw6k4_vfg9a9Y4xHR4hGNmIcmPo3_TxjrzKvztqpWaEZZuvom2Zf8qvhR338KWgD1aA1GFWXD9H9e3H8sKA-wEGScCPD4jWki40Y8-t7EaunRcC_cXXYx'
    }

})