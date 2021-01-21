export const menuItems = [
  {
    cod_menu: 0,
    str_label: "Home",
    str_url: "/",
    str_class: "icons.Home",
    sub_menu: [],
  },
  {
    cod_menu: 1,
    str_label: "Movimentação",
    str_url: "/movimentacao",
    str_class: "",
    sub_menu: [
      {
        cod_menu: 2,
        str_label: "Entrada",
        str_url: "/movimentacao/entrada",
        str_class: "",
        sub_menu: [],
      },
      {
        cod_menu: 7,
        str_label: "Saida",
        str_url: "/movimentacao/saida",
        str_class: "",
        sub_menu: [],
      },
    ],
  },
  {
    cod_menu: 4,
    str_label: "Saldo",
    str_url: "/saldo",
    str_class: "",
    sub_menu: [],
  },
];
