import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    return ( 
        <div className="flex p-[20px] justify-between">
           {categories.map((item)=>(
            <CategoryItem item={item}/>
           ))}
        </div>
     );
}
 
export default Categories;