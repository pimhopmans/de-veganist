export const getImagePath = (imageName: string): string => {
  if (process.env.NODE_ENV === "development") {
    return `/images/${imageName}`;
  }

  return `/de-veganist/images/${imageName}`;
};
