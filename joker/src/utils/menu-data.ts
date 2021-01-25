import { Menu } from "../interfaces";

export const MenuData: Menu[] = [
  {
    cod_menu: 200,
    str_label: "Inicio",
    str_url: "/",
    str_class: "home",
    sub_menu: [],
  },
  {
    cod_menu: 201,
    str_label: "Movimentação",
    str_url: "/movimentacao",
    str_class: "movimentacao",
    sub_menu: [],
  },
  {
    cod_menu: 202,
    str_label: "Relatórios",
    str_url: "/report",
    str_class: "report",
    sub_menu: [
      {
        cod_menu: 203,
        str_label: "Saldo",
        str_url: "/report/balance",
        str_class: "balance",
        sub_menu: [],
      },
      {
        cod_menu: 204,
        str_label: "Extrato",
        str_url: "/report/detailed",
        str_class: "detailed",
        sub_menu: [
          {
            cod_menu: 205,
            str_label: "Mensal",
            str_url: "/report/detailed/mensal",
            str_class: "mensal",
            sub_menu: [],
          },
          {
            cod_menu: 206,
            str_label: "Anual",
            str_url: "/report/detailed/anual",
            str_class: "anual",
            sub_menu: [],
          },
        ],
      },
    ],
  },
];
