import React, { useEffect, useState } from 'react';
import apiClient from '../../../api/ApiClient';
import './categoryFilter.css';

function CategoryFilter({ onSelect }) {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const res = await apiClient.get('/guest/categories');
            const data = res.data.data;

            const transformed = data.map((cat) => ({
                id: parseInt(cat.id),
                name: cat.category_name || cat.name || 'Unknown',
                active: false,
            }));

            // Tambahkan opsi "All" di awal
            setCategories([
                { id: 0, name: 'All', active: true },
                ...transformed,
            ]);

            // Kirim default "All" ke parent
            onSelect(null);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleClick = (id) => {
        const newCategories = categories.map((cat) => ({
            ...cat,
            active: cat.id === id,
        }));

        setCategories(newCategories);

        // Jika All (id=0) diklik, kirim null ke parent
        const selected = newCategories.find((cat) => cat.active);
        onSelect(selected.id === 0 ? null : selected);
    };

    return (
        <div className="category-filters">
            {categories.map((cat) => (
                <div
                    key={cat.id}
                    className={`category-item ${cat.active ? 'active' : ''}`}
                    onClick={() => handleClick(cat.id)}
                >
                    {cat.name}
                </div>
            ))}
        </div>
    );
}

export default CategoryFilter;
