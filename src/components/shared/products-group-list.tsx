'use client';

import React from 'react';
import { useIntersection } from 'react-use';

import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useCategoryStore } from './store/category';



interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listclassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    categoryId,
    className,
    listclassName
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef<HTMLElement>(document.createElement('div'));
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
});

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [intersection?.isIntersecting]);

    return (
        <div className={(className)} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listclassName)}>
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
}