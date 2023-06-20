import './category-container.style.scss'
import CategoryItem from '../category-item/category-item.components'

const CategoryContainer = ({ categories }) => {
    return (
        <div className="categories-container" >
            {categories.map((category) => (
                <CategoryItem category={category} />
            ))}
        </div>
    );
}
export default CategoryContainer