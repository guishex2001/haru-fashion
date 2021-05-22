import Link from "next/link";
import { FC, MouseEventHandler } from "react";
import Heart from "../../public/icons/Heart";
import styles from "./Card.module.css";

type Props = {
  imgSrc1: string;
  imgSrc2: string;
  imgAlt?: string;
  itemLink?: string;
  itemName: string;
  itemPrice: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Card: FC<Props> = ({
  imgSrc1,
  imgSrc2,
  imgAlt,
  itemLink = "",
  itemName,
  itemPrice,
  onClick,
}) => (
  <div className={styles.cardContainer}>
    <div className={styles.imageContainer}>
      <Link href={itemLink}>
        <a>
          <img className={styles.firstImage} src={imgSrc1} alt={imgAlt} />
          <img className={styles.secondImage} src={imgSrc2} alt={imgAlt} />
        </a>
      </Link>
      <a href="www.example.com" className={styles.wishlist}>
        <Heart />
      </a>
      <div className="absolute z-20 bottom-5 left-1/2 w-4/5 translate-y-28 "></div>
      <div className={styles.btnWrapper}>
        <button onClick={onClick} className={styles.addBtn}>
          Add to cart
        </button>
      </div>
    </div>
    <Link href={itemLink}>
      <a className={styles.itemName}>{itemName}</a>
    </Link>
    <span className="text-gray400">$ {itemPrice}</span>
  </div>
);

export default Card;