import { getAllCategories } from "@/utils/getAllCategories";


const CategoryList = async() => {
    const {data:allCategories} = await getAllCategories();
    console.log(allCategories);
    return (
        <div>
            
        </div>
    );
};

export default CategoryList;