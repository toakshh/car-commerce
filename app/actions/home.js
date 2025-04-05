/*** Get featured cars for the homepage */
export async function getFeaturedCars(limit = 3) {
    // try {
    //   const cars = await db.car.findMany({
    //     where: {
    //       featured: true,
    //       status: "AVAILABLE",
    //     },
    //     take: limit,
    //     orderBy: { createdAt: "desc" },
    //   });
  
    //   return cars.map(serializeCarData);
    // } catch (error) {
    //   throw new Error("Error fetching featured cars:" + error.message);
    // }
  }