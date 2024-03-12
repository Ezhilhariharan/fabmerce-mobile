import axios from 'axios'

interface request {
    url?: string | any;
    headers?: object | any;
    body?: object | any;
    params?: object | any;
}

const FabmerceApi = {
    signUp: ({ body }: request) => axios.post('/signup', body),
    signIn: ({ body }: request) => axios.post('/login', body),
    userInfo: ({ params }: request) => axios.get(`/customer_info`),
    searchProduct: ({ params }: request) => axios.get(`/brand/product_parent_list?${params?.suffix ?? ''}`),
    brandCategories: ({ params }: request) => axios.get(`/brand/categories`),
    brands: ({ params }: request) => axios.get(`/brand/brands`),
    promotion: ({ params }: request) => axios.get(`/promotions`), 
    searchProduct2: ({ params }: request) => axios.get(`/product/search/${params?.searchString ?? ''}`),
    trackingOrders:(  body  : request) => axios.get(`/order_details/${body}`),
    orderStatues:( { params } : request) => axios.get(`/order_statuses`)
}

export default FabmerceApi