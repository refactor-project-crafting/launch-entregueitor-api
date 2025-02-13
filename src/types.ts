export type Id = string;

export type WithoutId<Type extends { id: unknown }> = Omit<Type, "id">;
