export interface CarDTO {
    id: number;
    brand: string;
    name: string;
    abouth: string;
    rent: {
      period: string;
      price: number;
    },
    fuel_type: string;
    thumbnail: string;
    accessories: {
        type: string;
        name: string;
      }[];

    photos: string[];
  }
