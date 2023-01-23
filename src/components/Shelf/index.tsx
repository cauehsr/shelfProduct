import * as S from './styled';
import { Wishlist, WishlistActive } from './Icons';

interface ValuesProductProps {
	id: number,
	image: string,
	name: string,
	listPrice: number,
	bestPrice: any,
	installmentsPrice: number,
  activeButton: boolean,
  activeWishlist: boolean,
  onClickWishlist: (item: any) => void,
  onClickButtonBuy: (item: any) => void,
}

const Header: React.FunctionComponent<ValuesProductProps> = ({
    id,
    image,
    name,
    listPrice,
    bestPrice,
    installmentsPrice,
    activeButton,
    activeWishlist,
    onClickWishlist,
    onClickButtonBuy
}) => {
  return (
    <S.Container key={id}>
      <S.ContainerImage>
        {/* image product */}
        <S.ImageProduct src={image} />

        {/* Wishlist */}
        <S.ButtonWishlist onClick={onClickWishlist}>
          {!activeWishlist ? (
            <Wishlist />
          ) : (
            <WishlistActive />
          )}
        </S.ButtonWishlist>

      </S.ContainerImage>
      <S.ContainerProduct>
        {/* name product */}
        <S.TitleProduct>
          {name}
        </S.TitleProduct>

        <S.ContainerPrice>
          {/* list price product */}
          {listPrice &&
            <S.ListPriceProduct>
              R$ {listPrice.toFixed(2).replace('.', ',')}
            </S.ListPriceProduct>
          }

          {/* best price product */}
          <S.BestPriceProduct>
            R$ {bestPrice.toFixed(2).replace('.', ',')}
          </S.BestPriceProduct>

          {/* installments price product */}
          {installmentsPrice > 1 &&
            <S.InstallmentsPriceProduct>
              em até <strong>{installmentsPrice}x de R$ {(bestPrice / installmentsPrice).toFixed(2).replace('.', ',')}</strong> sem juros
            </S.InstallmentsPriceProduct>
          }
        </S.ContainerPrice>

        {/* button buy product */}
        {!activeButton ? (
          <S.ButtonBuyProduct onClick={onClickButtonBuy}>
            Adicionar
          </S.ButtonBuyProduct>
        ) : (
          <S.BuyProduct onClick={onClickButtonBuy}>
            Adicionado
          </S.BuyProduct>
        )}
      </S.ContainerProduct>
    </S.Container>
  );
}

export default Header;
