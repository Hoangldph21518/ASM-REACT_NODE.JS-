import Joi from "joi";
import Category from "../model/category";
import Product from "../model/product";
const CategorySchame = Joi.object({
    name: Joi.string().required(),
});
export const getAll = async (req, res) => {
    try {
        const data = await Category.find();

        if (data.length == 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.json({
            message:"Lỗi"
        })
    }
};
export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findById(id).populate("Product");
        if (category.length === 0) {
            return res.status(200).json({
                message: "Không có danh mục",
            });
        }
        const products = await Product.find({categoryId: id})
        return res.status(200).json({
            ...category.toObject(),
            products
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};


export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = CategorySchame.validate(body);
        if (error) {
            return res.json({
                message: error.details[0].message,
            });
        }
        const data = await Category.create(body);
        if (data.length === 0) {
            return res.status(400).json({
                message: "Thêm danh mục thất bại",
            });
        }
        return res.status(200).json({
            message: "Thêm danh mục thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const data = await Category.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa danh mục thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: "error",
        });
    }
};
export const update = async (req, res) => {
    try {
        const data = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true});
        if (!data) {
            return res.status(400).json({
                message: "Cập nhật danh mục thất bại",
            });
        }
        return res.json({
            message: "Cập nhật danh mục thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};