export interface Page {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: PokemonType[];
  order: number;
  sprites: PokemonSprites;
  stats: PokemonStat[];
}

export type PokemonType = { slot: number; type: { name: string; url: string } };

type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: TimeRanges;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other: { "official-artwork": { front_default: string; front_shiny: string } };
};

export type PokemonStat = {
  stat: { name: string; url: string };
  effort: number;
  base_stat: number;
};
