// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Menu = {
  cod_menu: number;
  str_label: string;
  str_url: string;
  str_class: string;
  sub_menu: Menu[];
};
