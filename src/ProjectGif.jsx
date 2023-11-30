import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const ProjectGif = () => {

    const [categories, setCategories] = useState(["Dragon ball gt"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };
    return (
        <>
            <h1>Proyecto Gif 1hik</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};