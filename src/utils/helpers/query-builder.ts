// type Params = {
//   vacancyRole?: string;
//   technologyIds?: number[];
//   vacancyTypes?: string[];
//   wageMin?: number;
//   wageMax?: number;
//   location?: string;
//   limit?: number;
//   page?: number;
// };

// export function buildQueryString(params: Params): string {
//   const queryStringParts: string[] = [];

//   if (params.vacancyRole) {
//     queryStringParts.push(`vacancyRole=${params.vacancyRole}`);
//   }
//   if (params.technologyIds && params.technologyIds.length > 0) {
//     params.technologyIds.forEach((id) => {
//       queryStringParts.push(`technologyIds[]=${id}`);
//     });
//   }
//   if (params.vacancyTypes && params.vacancyTypes.length > 0) {
//     params.vacancyTypes.forEach((type) => {
//       queryStringParts.push(`vacancyTypes[]=${type}`);
//     });
//   }
//   if (params.wageMin !== undefined) {
//     queryStringParts.push(`wageMin=${params.wageMin}`);
//   }
//   if (params.wageMax !== undefined) {
//     queryStringParts.push(`wageMax=${params.wageMax}`);
//   }
//   if (params.location) {
//     queryStringParts.push(`location=${params.location}`);
//   }
//   if (params.limit && params.limit > 0) {
//     queryStringParts.push(`limit=${params.limit}`);
//   }
//   if (params.page && params.page > 0) {
//     queryStringParts.push(`page=${params.page}`);
//   }

//   return queryStringParts.join("&");
// }
