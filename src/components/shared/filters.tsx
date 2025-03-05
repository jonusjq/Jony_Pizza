import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checbox-filters-group';


interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text='Можно собирать' value='1' />
                <FilterCheckbox text='Новинки' value='1' />
            </div>


            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type='number' placeholder='0' min={0} max={5000} defaultValue={0}/>
                    <Input type='number' min={100} max={5000} placeholder='5000'/>
                </div>
            </div>


            <CheckboxFiltersGroup 
            className='mt-5' 
            title='Ингредиенты' 
            limit={6} 
            defaultItems={[
                {
                    text: 'Сырный соус',
                    value: '1',
                },
                {
                    text: 'Моццарелла',
                    value: '2',
                },
                {
                    text: 'Чеснок',
                    value: '3',
                },
                {
                    text: 'Солёные огурчики',
                    value: '4',
                },
                {
                    text: 'Красный лук',
                    value: '5',
                },
                {
                    text: 'Томаты',
                    value: '6',
                },
            ]}
            items={[
                {
                    text: 'Сырный соус',
                    value: '1',
                },
                {
                    text: 'Моццарелла',
                    value: '2',
                },
                {
                    text: 'Чеснок',
                    value: '3',
                },
                {
                    text: 'Солёные огурчики',
                    value: '4',
                },
                {
                    text: 'Красный лук',
                    value: '5',
                },
                {
                    text: 'Томаты',
                    value: '6',
                },
                {
                    text: 'Пряная говядина',
                    value: '7',
                },
                {
                    text: 'Сыр чеддер и пармезан',
                    value: '8',
                },
                {
                    text: 'Нежный цыпленок',
                    value: '9',
                },
                {
                    text: 'Шампиньоны',
                    value: '10',
                },
                {
                    text: 'Пикантная пепперони',
                    value: '11',
                },
                {
                    text: 'Острая чоризо',
                    value: '12',
                },
                {
                    text: 'Митболы',
                    value: '13',
                },
                {
                    text: 'Креветки',
                    value: '14',
                },
                {
                    text: 'Баварские колбаски',
                    value: '15',
                },
                {
                    text: 'Кубики бринзы',
                    value: '16',
                },
                {
                    text: 'Сочные ананасы',
                    value: '17',
                },
            ]}
            />
        </div>
    );
};