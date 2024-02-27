// components/TopPager.tsx
import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "@/Redux/hooks";
import Link from 'next/link';

export default function TopPager({ setShowCart }: any) {
  const [ menuOpen, setMenuOpen  ] = useState(false)
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const t = useTranslations('Navigation');

  return (
    <div>
      <div className={`border-b border-gray-200 header-container ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="container py-3 ">
        <RxHamburgerMenu className="sm:hidden text-[26px]" onClick={handleMenu} />
          <div className="flex justify-between items-center">
            <div className="header_top__image_wrapper flex items-center justify-center">
              <Image
                src="/headerlogo.jpeg"
                alt="Icon"
                width={50}
                height={50}
                className="icon-ico"
              />
            </div>

            <div className="text-gray-500 text-[12px] items-center">
              {t('ShippingLabel')}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
