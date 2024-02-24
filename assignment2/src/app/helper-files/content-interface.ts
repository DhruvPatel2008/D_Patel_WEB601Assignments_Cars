import { types } from "util";

export interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string; // Make sure it's included
    tags?: string[];  
    year?: number;
    types?: string;
  }
  