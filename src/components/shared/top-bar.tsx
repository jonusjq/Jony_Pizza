import { cn } from '@/lib/utils';

import React from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';



interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex  gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', className)}>
           <Container className=' flex items-center justify-between'>
           <Categories/>
           <SortPopup/>
           </Container>
        </div>
    );
}