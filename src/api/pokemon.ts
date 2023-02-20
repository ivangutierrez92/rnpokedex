import { Page, PokemonDetails } from "../models/pokemon.model";
import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endpoint: string = `${API_HOST}/pokemon?limit=20&offset=0`) {
  try {
    const response = await fetch(endpoint);
    const result: Page = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url: string) {
  try {
    const response = await fetch(url);
    const result: PokemonDetails = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonById(id: number) {
  try {
    const response = await fetch(`${API_HOST}/pokemon/${id}`);
    const result: PokemonDetails = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
