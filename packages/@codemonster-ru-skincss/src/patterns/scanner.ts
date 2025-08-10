export const commentedRegex =
    /[\/][\*][\s\S]*?.*@import[\s]{0,1}['"]{0,1}@codemonster-ru\/skincss['"]{0,1}[;]{0,1}[.*\s\S]*?[\*][\/]/g;
export const importRegex = /@import[\s]{0,1}['"]{0,1}@codemonster-ru\/skincss['"]{0,1}[;]{0,1}[.*]*?.*;/g;
export const sourceRegex = /@import\s{0,1}['|"]@codemonster-ru\/skincss['|"]\s{0,1}source[(](none|['|"].*['|"])[)];/g;
export const explicitlySourceRegex = /(?<=@source[\s]{0,1}['|"]).*(?=['|"];{0,1})/g;
export const deleteExplicitlySourceRegex = /[\n]{0,1}@source[\s]{0,1}['|"].*['|"];{0,1}[\n]{0,1}/gs;
export const ignoredSourceRegex = /(?<=@source[\s]{0,1}not[\s]{0,1}['|"]).*(?=['|"];{0,1})/g;
export const deleteIgnoredSourceRegex = /[\n]{0,1}@source[\s]{0,1}not[\s]{0,1}['|"].*['|"];{0,1}[\n]{0,1}/gs;
