import HttpErrors from "http-errors";

import Customer from '../models/customers.js';

export default {
    async   create(req, res, next) {
        try {
            const customer = await Customer.create(req.body);

            if (!customer) {
                throw new HttpErrors(500, 'Failed to create customer');
            }
            // console.log('B');
            res.status(200).json({
                customer: customer,
            });
        } catch (e) {
            next(e);
        }
    },

    async getAll(req, res, next) {
        try {
            const customer = await Customer.findAll();

            if (!customer) {
                throw new HttpErrors(500, 'Failed to fetch customers');
            }
            // console.log('d');
            res.json({
                customer,
                count: customer.length,
            });
        } catch (e) {
            next(e);
        }
    },

    async getSameCity(req, res, next) {
        try {
            const city = await Customer.findSameCity();

            if (!city) {
                throw new HttpErrors(500, 'Failed to fetch same city');
            }

            res.json({
                city,
            });
        } catch (e) {
            next(e);
        }
    },

    async deleteCustomer(req, res, next) {
        try {
            const deleteCustomer = await Customer.deleteCustomer(req.params.id);

            if (!deleteCustomer) {
                throw new HttpErrors(500, 'Failed to delete');
            }

            res.json({
                message: 'Customer deleted successfully',
            });
        } catch (e) {
            next(e);
        }
    }
}