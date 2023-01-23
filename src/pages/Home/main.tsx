import { useState } from 'react';
import * as S from './styled';
import Shelf from '../../components/Shelf/index';
import ImageProduct from '../../images/image-product.png';

const productsShelf = [
  {
    id: 1,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 20,
    bestPrice: 18,
    installmentsPrice: 2,
    activeButton: false,
    activeWishlist: false
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 20,
    bestPrice: 17,
    installmentsPrice: 3,
    activeButton: false,
    activeWishlist: false
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 60,
    bestPrice: 45,
    installmentsPrice: 1,
    activeButton: false,
    activeWishlist: false
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 60,
    bestPrice: 45,
    installmentsPrice: 1,
    activeButton: false,
    activeWishlist: false
  },
  {
    id: 5,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 20,
    bestPrice: 18,
    installmentsPrice: 2,
    activeButton: false,
    activeWishlist: false
  },
  {
    id: 6,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 20,
    bestPrice: 17,
    installmentsPrice: 3,
    activeButton: false,
    activeWishlist: false
  },
  {
    id: 7,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 60,
    bestPrice: 45,
    installmentsPrice: 1,
    activeButton: false,
    activeWishlist: false
  },
  {
    id: 8,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 20,
    bestPrice: 18,
    installmentsPrice: 2,
    activeButton: false,
    activeWishlist: false
  },
  {
    id: 9,
    name: 'Lorem ipsum dolor summit',
    image: ImageProduct,
    listPrice: 20,
    bestPrice: 17,
    installmentsPrice: 3,
    activeButton: false,
    activeWishlist: false
  },
];

const Home = () => {

  const [shelf, SetShelf] = useState(productsShelf);

  const onClickButtonBuy = (item: any) => {
    var itemShelf = shelf;

    for (var i in itemShelf) {
      if (itemShelf[i].id === item.id) {
        itemShelf[i].activeButton = !item.activeButton;

        break;
      }
    }
    
    SetShelf([...itemShelf])
  }

  const onClickWishlist = (item: any) => {
    var itemShelf = shelf;

    for (var i in itemShelf) {
      if (itemShelf[i].id === item.id) {
        itemShelf[i].activeWishlist = !item.activeWishlist;

        break;
      }
    }
    
    SetShelf([...itemShelf])
  }

  return (
    <S.Container>
      <S.ContainerShelf>
        <S.LimitGrid>
          <S.ContentShelf>
            {shelf?.map(item => (
              <Shelf
                id={item.id}
                name={item.name}
                image={item.image}
                listPrice={item.listPrice}
                bestPrice={item.bestPrice}
                installmentsPrice={item.installmentsPrice}
                activeButton={item.activeButton}
                activeWishlist={item.activeWishlist}
                onClickWishlist={() => onClickWishlist(item)}
                onClickButtonBuy={() => onClickButtonBuy(item)}
              />
            ))}
          </S.ContentShelf>
        </S.LimitGrid>
      </S.ContainerShelf>
    </S.Container>
  );
}

export default Home;
