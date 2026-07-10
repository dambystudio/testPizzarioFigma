export type MenuItem = {
  name: string;
  description?: string;
  prices: { label?: string; value: string }[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "pizze",
    title: "Pizze",
    subtitle: "Al piatto o formato Max",
    items: [
      { name: "Marinara", description: "Pomodoro, aglio, origano e olio.", prices: [{ label: "Al piatto", value: "4,50 €" }, { label: "Max", value: "10,00 €" }] },
      { name: "Paesana", description: "Paesano con pomodorino, prezzemolo e pecorino.", prices: [{ label: "Al piatto", value: "5,00 €" }, { label: "Max", value: "12,00 €" }] },
      { name: "Margherita", description: "Pomodoro e mozzarella.", prices: [{ label: "Al piatto", value: "6,00 €" }, { label: "Max", value: "12,00 €" }] },
      { name: "Marinara con acciughe", description: "Pomodoro, aglio, origano, acciughe e olio.", prices: [{ label: "Al piatto", value: "6,00 €" }, { label: "Max", value: "12,00 €" }] },
      { name: "Pugliese", description: "Pomodoro, mozzarella, salsiccia fresca e cipolle.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Diavola", description: "Pomodoro, mozzarella e salame piccante.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Wurstel e patatine", description: "Pomodoro, mozzarella, würstel e patatine.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Cotto e funghi", description: "Pomodoro, mozzarella e cotto funghi.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Gaia", description: "Pomodorini, mozzarella, salame piccante e prezzemolo.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Parma", description: "Pomodoro, mozzarella e crudo.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Napoletana", description: "Pomodoro, mozzarella, olive e acciughe.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Tirolese", description: "Pomodoro, mozzarella, mozzarella affumicata, speck e rucola.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Cotto bianco", description: "Mozzarella e prosciutto cotto.", prices: [{ label: "Al piatto", value: "6,50 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Romana", description: "Pomodoro, mozzarella, acciughe e capperi.", prices: [{ label: "Al piatto", value: "7,00 €" }, { label: "Max", value: "14,00 €" }] },
      { name: "Carbonara", description: "Mozzarella, pancetta, uovo, pepe e pecorino.", prices: [{ label: "Al piatto", value: "8,00 €" }, { label: "Max", value: "15,00 €" }] },
      { name: "Tonno cipolle", description: "Pomodoro, mozzarella, tonno, cipolle e rucola.", prices: [{ label: "Al piatto", value: "8,00 €" }, { label: "Max", value: "15,00 €" }] },
      { name: "Capricciosa", description: "Pomodoro, mozzarella, cotto funghi, carciofi, olive.", prices: [{ label: "Al piatto", value: "8,00 €" }, { label: "Max", value: "15,00 €" }] },
      { name: "4 Stagioni", description: "Pomodoro, mozzarella, cotto funghi, carciofi e olive.", prices: [{ label: "Al piatto", value: "8,00 €" }, { label: "Max", value: "15,00 €" }] },
      { name: "Caprese", description: "Pomodorini, mozzarella, sale, olio e origano.", prices: [{ label: "Al piatto", value: "8,00 €" }, { label: "Max", value: "15,00 €" }] },
      { name: "Montanara", description: "Pomodoro, mozzarella, salsiccia fresca e funghi.", prices: [{ label: "Al piatto", value: "8,00 €" }, { label: "Max", value: "15,00 €" }] },
      { name: "Vegetariana", description: "Pomodoro, mozzarella, melanzane, peperoni e zucchine.", prices: [{ label: "Al piatto", value: "8,00 €" }, { label: "Max", value: "15,00 €" }] },
      { name: "Prosciutto cotto", description: "Pomodoro, mozzarella e prosciutto cotto.", prices: [{ label: "Al piatto", value: "8,00 €" }, { label: "Max", value: "15,00 €" }] },
      { name: "Porcini", description: "Pomodoro, mozzarella e funghi porcini.", prices: [{ label: "Al piatto", value: "8,50 €" }, { label: "Max", value: "16,00 €" }] },
      { name: "Bufalina", description: "Pomodoro, mozzarella di bufala e basilico.", prices: [{ label: "Al piatto", value: "10,00 €" }, { label: "Max", value: "16,00 €" }] },
      { name: "Calzone", description: "Pomodoro, mozzarella, cotto, funghi e carciofi.", prices: [{ label: "Al piatto", value: "10,00 €" }, { label: "Max", value: "16,00 €" }] },
      { name: "Boscaiola", description: "Pomodorini, mozzarella, funghi e porcini speck.", prices: [{ label: "Al piatto", value: "10,00 €" }, { label: "Max", value: "16,00 €" }] },
      { name: "Mortazza", description: "Schiacciata mortadella, stracciatella e granella di pistacchio.", prices: [{ label: "Al piatto", value: "10,00 €" }, { label: "Max", value: "16,00 €" }] },
      { name: "4 formaggi", description: "Mozzarella, grana, gorgonzola, Emmental e caciocavallo.", prices: [{ label: "Al piatto", value: "10,00 €" }, { label: "Max", value: "16,00 €" }] },
      { name: "Schiacciata", description: "Pomodorini, mozzarella, prosciutto crudo e rucola grana.", prices: [{ label: "Al piatto", value: "10,00 €" }, { label: "Max", value: "16,00 €" }] },
    ],
  },
  { id: "ripiene", title: "Pizze ripiene", subtitle: "A taglio", items: [
    { name: "Pizza di patate", prices: [{ value: "2,00 €" }] },
    { name: "Cotto chiusa", description: "Pomodoro, mozzarella e prosciutto cotto.", prices: [{ value: "2,00 €" }] },
    { name: "Cotto e purè", description: "Cotto, mozzarella e purè.", prices: [{ value: "2,50 €" }] },
    { name: "Cavicione", description: "Cipolle lunga, acciughe e olive nere.", prices: [{ value: "2,50 €" }] },
    { name: "Bresaola rucola grana", prices: [{ value: "2,50 €" }] },
  ]},
  { id: "taglio", title: "Pizze al taglio", subtitle: "Disponibili anche 60×40 su prenotazione", items: [
    { name: "Pizze al taglio", prices: [{ value: "1,50 € – 3,50 €" }] },
    { name: "Pizze 60×40 su prenotazione", prices: [{ value: "da 18,00 €" }] },
  ]},
  { id: "panini", title: "Panini", items: [
    { name: "Hot dog", prices: [{ value: "3,00 €" }] },
    { name: "Hot dog tedesco", description: "Wurstel e patatine.", prices: [{ value: "3,50 €" }] },
    { name: "Panino hamburger", description: "Hamburger, ketchup e cetrioli.", prices: [{ value: "4,50 €" }] },
    { name: "Panino hamburger e formaggio", description: "Hamburger, formaggio, ketchup e cetrioli.", prices: [{ value: "5,00 €" }] },
    { name: "Panino cotoletta", description: "Cotoletta di pollo, lattuga e maionese.", prices: [{ value: "4,50 €" }] },
  ]},
  { id: "panzerotti", title: "Panzerotti pugliesi", items: [
    { name: "Panzerotti classico", description: "Pomodoro e mozzarella.", prices: [{ value: "2,50 €" }] },
    { name: "Panzerotti", description: "Pomodoro, mozzarella e prosciutto cotto.", prices: [{ value: "2,80 €" }] },
    { name: "Panzerotti piccante", description: "Pomodoro, mozzarella e salame piccante.", prices: [{ value: "3,00 €" }] },
    { name: "Panzerotti 4 formaggi", description: "Mozzarella, gorgonzola, Emmental e caciocavallo.", prices: [{ value: "4,00 €" }] },
    { name: "Panzerotti", description: "Mozzarella, salsiccia fresca e friarielli.", prices: [{ value: "4,50 €" }] },
  ]},
  { id: "contorni", title: "Contorni", items: [
    { name: "Patatine e salse", prices: [{ label: "Piccola", value: "1,50 €" }, { label: "Grande", value: "2,50 €" }] },
    { name: "Verdure fritte", prices: [{ label: "Piccola", value: "2,00 €" }, { label: "Grande", value: "3,00 €" }] },
    { name: "Crocchette di patate", prices: [{ label: "5 pezzi", value: "2,50 €" }] },
    { name: "Chele di granchio", prices: [{ label: "4 pezzi", value: "2,50 €" }] },
    { name: "Anelli di cipolla", prices: [{ label: "4 pezzi", value: "2,00 €" }] },
  ]},
  { id: "bevande", title: "Bevande", items: [
    { name: "Acqua", prices: [{ value: "1,00 €" }] }, { name: "Bibite in lattina", prices: [{ value: "2,00 €" }] },
    { name: "Coca-Cola bottiglia", prices: [{ value: "2,20 €" }] }, { name: "Birra Peroni 66 cl", prices: [{ value: "3,00 €" }] },
    { name: "Birra Peroni 33 cl", prices: [{ value: "2,00 €" }] }, { name: "Birra Heineken 66 cl", prices: [{ value: "4,00 €" }] },
    { name: "Birra Heineken 33 cl", prices: [{ value: "3,00 €" }] }, { name: "Birra Tennent’s 33 cl", prices: [{ value: "3,50 €" }] },
    { name: "Birra Peroni 0.0 33 cl", prices: [{ value: "2,50 €" }] }, { name: "Birra Paulaner Salvator", prices: [{ value: "3,50 €" }] },
    { name: "Birra Paulaner Originale", prices: [{ value: "4,00 €" }] },
  ]},
];
