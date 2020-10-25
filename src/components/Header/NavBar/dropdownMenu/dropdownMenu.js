import React, { useState, useEffect } from 'react';
import { getFirestore } from '../../../../firebase';
import { NavLink } from 'react-router-dom';

const Dropdown = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const categoryCollection = db.collection('categories');
        categoryCollection.get()
        .then((querySnapshot) => {
            if(!querySnapshot.size === 0) {
                console.log('Categories don\'t exist');
                setCategories([]);
            } else {
                const categories = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()};
                });
                setCategories(categories);
            }
        })
        .catch((error) => {
            console.log("Error searching categories: ", error);
        })
    }, []);

    return(
            <div className="dropdownMenu hidden">
                { categories.map(category =>
                    <NavLink key={category.id} exact to={`/categories/${category.id}`} className="category">
                        {category.name}
                    </NavLink>)
                }
            </div>
    );
};

export default Dropdown;