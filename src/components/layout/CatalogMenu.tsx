"use client";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

interface CatalogMenuProps {
  items: { label: string; href: string }[];
  title: string;
}

export default function CatalogMenu({ items, title }: CatalogMenuProps) {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20">
        {title}
        <FiChevronDown className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white/10">
        <div className="py-1">
          {items.map((item) => (
            <MenuItem key={item.label}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-sm ${
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
