const { Product } = require('../../models/index');
const ProductController = require('../../controllers/product.controller')
const UserController = require('../../controllers/user.controller')
const httpMocks = require('node-mocks-http')

jest.mock('../../models/');

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
})

describe('ProductController.postProduct', () => {
    it('should return 200 ', async () => {
        Product.create.mockResolvedValue({
            name: "awikwok"
        })
        ProductController.postProduct(req, res);
        expect(res.statusCode).toBe(200);
    })

    it('should handle errors', async () => {
        const errorData = {
            status: "FAILED",
            message: "failed create Product"
        };

        const rejected = Promise.reject(errorData);
        Product.create.mockResolvedValue(rejected);

        await ProductController.postProduct(req, res);
        expect(res.statusCode).toBe(503);
    })
})

describe('ProductController.getProducts', () => {
    beforeEach(() => {
        Product.findAll.mockResolvedValue({
            name: "hoho",
            price: 1000,
            quantity: 3,
        });
    })
    it('should return code 200', async () => {
        ProductController.getProducts(req, res);
        expect(res.statusCode).toBe(200);
    })

    it('should return array data', async () => {
        await ProductController.getProducts(req, res);

        expect(res).hasOwnProperty("data");
    })

    it('Should handle errors', async () => {
        const errorData = {
            status: "FAILED",
            message: "failed load products"
        };

        const rejected = Promise.reject(errorData);
        Product.findAll.mockResolvedValue(rejected);

        await ProductController.getProducts(req, res)
        expect(res.statusCode).toEqual(503);

    })
})


describe('ProductController.getProductsByCreator', () => {
    beforeEach(() => {
        Product.findOne.mockResolvedValue({
            firstName: "joseph",
            lastName: "joestar",
            email: "jojo@mgail.com"
        })
    })

    it('should return code 200', async () => {
        ProductController.getProductsByCreator(req, res);
        expect(res.statusCode).toBe(200);
    })

    it('should return array data', async () => {
        await ProductController.getProductsByCreator(req, res);

        expect(res).hasOwnProperty("data");
    })

    it('Should handle errors', async () => {
        const errorData = {
            status: "FAILED",
            message: "failed load products"
        };

        const rejected = Promise.reject(errorData);
        Product.findOne.mockResolvedValue(rejected);

        await ProductController.getProductsByCreator(req, res)
        expect(res.statusCode).toBe(503);

    })
})