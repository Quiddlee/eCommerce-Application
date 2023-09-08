import { ProductAttributeNames } from './enums.ts';

export type ProductAttribute = Readonly<{
	name: ProductAttributeNames;
	value: string | number;
}>;

export type ProductPrice = Readonly<{
	value: {
		type: string;
		fractionDigits: number;
		centAmount: number;
		currencyCode: string;
	};
	id: string;
}>;

export type ProductImage = Readonly<{
	dimensions: {
		h: number;
		w: number;
	};
	url: string;
}>;

export type ProductResult = Readonly<{
	id: string;
	name: {
		de: string;
		en: string;
		uk: string;
	};
	masterVariant: {
		id: number;
		attributes: ProductAttribute[];
		images: ProductImage[];
		prices: ProductPrice[];
	};
}>;

export type ProductResponse = Readonly<{
	limit: number;
	offset: number;
	count: number;
	total: number;
	results: ProductResult[];
}>;

export type CategoryAncestor = Readonly<{
	typeId: string;
	id: string;
}>;

type CategoryParent = Readonly<{
	typeId: string;
	id: string;
}>;

export type CategoryResult = Readonly<{
	id: string;
	name: {
		en: string;
		de: string;
		ua: string;
	};
	ancestors: CategoryAncestor[];
	parent?: CategoryParent;
}>;

export type CategoriesResponse = Readonly<{
	limit: number;
	offset: number;
	count: number;
	total: number;
	results: CategoryResult[];
}>;
