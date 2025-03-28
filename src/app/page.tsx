import { Button } from "@/components/ui";
import { Categories, Title, SortPopup, TopBar, ProductCard, ProductsGroupList } from "@/components/shared";
import { Container } from "@/components/shared";
import { Filters } from "@/components/shared/filters";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-black" />
      </Container>
      <TopBar />
      

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[{
                id: 1,
                name: "Мясная с аджикой 🌶🌶",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/0194d4fa65f277598a143a7ba341da53.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 2,
                name: "Диабло 🌶🌶",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d6149eb101d8727573088fa2eff.avif",
                price: 539,
                items: [{ price: 539 }]
              },
              {
                id: 3,
                name: "Додо",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/01939b6f01a676059b576eaab98abb2d.avif",
                price: 849,
                items: [{ price: 849 }]
              },
              {
                id: 4,
                name: "Бефстроганов",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                price: 550,
                items: [{ price: 549 }]
              },
              {
                id: 5,
                name: "Креветки с чили",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/0194d4fd39bb7352bfa5de2219e88b9b.avif",
                price: 539,
                items: [{ price: 649 }]
              },
              {
                id: 6,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.avif",
                price: 329,
                items: [{ price: 329 }]
              }
              ]} categoryId={1} />


              <ProductsGroupList title="Комбо" items={[{
                id: 7,
                name: "Чоризо фреш",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                price: 319,
                items: [{ price: 319 }]
              },
              {
                id: 8,
                name: "Ветчина и грибы",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef5b10b39bbbbda9f8c4e4ff1b067c.avif",
                price: 519,
                items: [{ price: 519 }]
              },
              {
                id: 9,
                name: "Карбонара",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d61389ab51a8f648a0dba5b1689.avif",
                price: 659,
                items: [{ price: 659 }]
              },
              {
                id: 10,
                name: "Жюльен",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d6175c10773bfe36e56d48df7e3.avif",
                price: 619,
                items: [{ price: 619 }]
              },
              {
                id: 11,
                name: "Маргарита 🍃",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d6105ef6690b86fbde6150b5b0c.avif",
                price: 529,
                items: [{ price: 529 }]
              },
              {
                id: 12,
                name: "Пепперони",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610a62d78598406363a9a8ad65.avif",
                price: 519,
                items: [{ price: 519 }]
              }
              ]} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
