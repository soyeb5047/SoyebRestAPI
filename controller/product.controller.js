const Product = require('../models/prodcuts.models')

const getAllProducts = async (req, res) => {
    try {

        // make a query object for better search functionality
        const queryObject = {}
        const { company, name, featured, sort, select } = req.query

        // console.log(req.query);


        if (company) queryObject.company = company
        if (name) queryObject.name = { $regex: name, $options: 'i' }
        if (featured) queryObject.featured = featured

        let apiData = Product.find(queryObject)

        if (sort) {
            let fixSort = sort.split(',').join(' ')
            apiData = apiData.sort(fixSort)
        }

        if (select) {
            // replace only replaces first occurence of comma with space
            // let fixSelect = select.replace(',', ' ')

            let fixSelect = select.split(',').join(' ')
            apiData = apiData.select(fixSelect)
        }

        // pagination functionality
        let page = Number(req.query.page) || 1
        let limit = Number(req.query.limit) || 3

        // skip formula
        let skip = (page - 1) * limit

        apiData = apiData.skip(skip).limit(limit)

        const allProducts = await apiData


        return res.status(201).json(
            {
                message: 'data fetched successfully',
                Products: allProducts,
                Tdata: allProducts.length
            }
        )
    } catch (error) {
        console.log('Error getting all products: ', error);

    }

}
const getAllProductsTesting = async (req, res) => {
    try {

        // console.log(req.query);

        const allProducts = await Product.find(req.query)
        // console.log("allProducts: ", allProducts);

        return res.status(201).json(
            {
                message: 'data fetched successfully',
                data: allProducts
            }
        )
    } catch (error) {
        console.log('Error getting all products in testing: ', error);

    }
}

module.exports = { getAllProducts, getAllProductsTesting }