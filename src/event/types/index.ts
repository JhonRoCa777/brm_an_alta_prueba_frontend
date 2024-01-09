import { SubjectManager } from "@/event";

export type ISubjectDual = boolean;
export const SubjectModalOpenClose = new SubjectManager<ISubjectDual>();
/****************************************************************************/
import { ICompra, IProducto } from "@/models";

export const SubjectProductoToCompra = new SubjectManager<IProducto>();
export const SubjectCompraToProducto = new SubjectManager<ICompra>();