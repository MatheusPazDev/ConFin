import { Menu } from "../interfaces";

/** Dummy user data. */
/*
export const sampleMenuData: Menu[] = [
  { id: 101, titulo: "Home", url: "/" },
  { id: 102, titulo: "Entrada", url: "/" },
  { id: 103, titulo: "Saida", url: "/" },
  { id: 104, titulo: "Saldo", url: "/" },
];
*/

export const MenuData: Menu[] = [
  {
    cod_menu: 100,
    str_label: "0",
    str_url: "inicio",
    str_class: "",
    sub_menu: [
      {
        cod_menu: 101,
        str_label: "1",
        str_url: "name1",
        str_class: "",
        sub_menu: [
          {
            cod_menu: 102,
            str_label: "1.2",
            str_url: "name1/name2",
            str_class: "",
            sub_menu: [
              {
                cod_menu: 104,
                str_label: "1.2.4",
                str_url: "name1/name2/name4",
                str_class: "",
                sub_menu: [],
              },
              {
                cod_menu: 105,
                str_label: "1.2.5",
                str_url: "name1/name2/name5",
                str_class: "",
                sub_menu: [],
              },
            ],
          },
          {
            cod_menu: 103,
            str_label: "1.3",
            str_url: "name1/name3",
            str_class: "",
            sub_menu: [
              {
                cod_menu: 106,
                str_label: "1.3.6",
                str_url: "name1/name3/name6",
                str_class: "",
                sub_menu: [
                  {
                    cod_menu: 110,
                    str_label: "1.3.6.10",
                    str_url: "name1/name3/name6/name10",
                    str_class: "",
                    sub_menu: [],
                  },
                  {
                    cod_menu: 111,
                    str_label: "1.3.6.11",
                    str_url: "name1/name3/name6/name11",
                    str_class: "",
                    sub_menu: [
                      {
                        cod_menu: 112,
                        str_label: "1.3.6.11.12",
                        str_url: "name1/name3/name6/name11/name12",
                        str_class: "",
                        sub_menu: [
                          {
                            cod_menu: 113,
                            str_label: "1.3.6.11.12.13",
                            str_url: "name1/name3/name6/name11/name12/name13",
                            str_class: "",
                            sub_menu: [
                              {
                                cod_menu: 114,
                                str_label: "1.3.6.11.12.13.14",
                                str_url:
                                  "name1/name3/name6/name11/name12/name13/name14",
                                str_class: "",
                                sub_menu: [
                                  {
                                    cod_menu: 115,
                                    str_label: "1.3.6.11.12.13.14.15",
                                    str_url:
                                      "name1/name3/name6/name11/name12/name13/name14/name15",
                                    str_class: "",
                                    sub_menu: [
                                      {
                                        cod_menu: 116,
                                        str_label: "1.3.6.11.12.13.14.15.16",
                                        str_url:
                                          "name1/name3/name6/name11/name12/name13/name14/name15/name16/",
                                        str_class: "",
                                        sub_menu: [
                                          {
                                            cod_menu: 117,
                                            str_label:
                                              "1.3.6.11.12.13.14.15.16.17",
                                            str_url:
                                              "name1/name3/name6/name11/name12/name13/name14/name15/name16/name17",
                                            str_class: "",
                                            sub_menu: [
                                              {
                                                cod_menu: 118,
                                                str_label:
                                                  "1.3.6.11.12.13.14.15.16.17.18",
                                                str_url:
                                                  "name1/name3/name6/name11/name12/name13/name14/name15/name16/name17/name18",
                                                str_class: "",
                                                sub_menu: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                cod_menu: 107,
                str_label: "1.3.7",
                str_url: "name1/name3/name7",
                str_class: "",
                sub_menu: [],
              },
              {
                cod_menu: 109,
                str_label: "1.3.9",
                str_url: "name1/name3/name9",
                str_class: "",
                sub_menu: [],
              },
            ],
          },
        ],
      },
      {
        cod_menu: 199,
        str_label: "99",
        str_url: "final",
        str_class: "",
        sub_menu: [],
      },
    ],
  },
];
