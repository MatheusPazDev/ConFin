import { Menu } from "../interfaces";

export const MenuData: Menu[] = [
  {
    cod_menu: 200,
    str_label: "Home",
    str_url: "/",
    str_class: "home",
    sub_menu: [],
  },
  {
    cod_menu: 201,
    str_label: "Movimentacao",
    str_url: "/movimentacao",
    str_class: "movimentacao",
    sub_menu: [
      {
        cod_menu: 202,
        str_label: "Entrada",
        str_url: "/movimentacao/entrada",
        str_class: "mov_entrada",
        sub_menu: [],
      },
      {
        cod_menu: 203,
        str_label: "Saida",
        str_url: "/movimentacao/saida",
        str_class: "mov_saida",
        sub_menu: [],
      },
      {
        cod_menu: 204,
        str_label: "Saldo",
        str_url: "/movimentacao/saldo",
        str_class: "mov_saldo",
        sub_menu: [],
      },
    ],
  },
  {
    cod_menu: 205,
    str_label: "About",
    str_url: "/about",
    str_class: "about",
    sub_menu: [],
  },
  {
    cod_menu: 206,
    str_label: "Users",
    str_url: "/users",
    str_class: "user",
    sub_menu: [],
  },
];
