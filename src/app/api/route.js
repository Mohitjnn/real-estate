import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";
import properties from "@/models/properties";

export async function POST(req) {
  await dbConnect();

  try {
    const data = await req.json();
    if (data.type === "multifetch") {
      const { location, isForRent, minPrice, maxPrice, bedrooms } = data;

      const query = {
        Location: location,
        IsForRent: isForRent,
        AskingPrice: { $gte: minPrice, $lt: maxPrice },
        "Features.Bedrooms": bedrooms,
        upcoming: false,
      };

      const filteredProperties = await properties.find(query).exec();
      return NextResponse.json(filteredProperties);
    }

    if (data.type === "singleFetch") {
      const { Name } = data;
      const propertyData = await properties.findOne({ Name: Name }).exec();
      return NextResponse.json(propertyData);
    }

    if (data.type === "similarFetch") {
      const { Name, Location, AskingPrice, CarpetArea } = data;

      const minPrice = AskingPrice * 0.7;
      const maxPrice = AskingPrice * 1.3;
      const minCarpetArea = CarpetArea * 0.7;
      const maxCarpetArea = CarpetArea * 1.3;

      const similarProperties = await properties
        .aggregate([
          {
            $match: {
              Name: { $ne: Name },
              Location: Location,
              AskingPrice: { $gte: minPrice, $lte: maxPrice },
              CarpetArea: { $gte: minCarpetArea, $lte: maxCarpetArea },
            },
          },
          {
            $addFields: {
              similarityScore: {
                $sum: [
                  { $cond: [{ $eq: ["$Location", Location] }, 1, 0] },
                  {
                    $cond: [
                      {
                        $and: [
                          { $gte: ["$AskingPrice", minPrice] },
                          { $lte: ["$AskingPrice", maxPrice] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                  {
                    $cond: [
                      {
                        $and: [
                          { $gte: ["$CarpetArea", minCarpetArea] },
                          { $lte: ["$CarpetArea", maxCarpetArea] },
                        ],
                      },
                      1,
                      0,
                    ],
                  },
                ],
              },
            },
          },
          {
            $sort: { similarityScore: -1 },
          },
          {
            $limit: 3,
          },
        ])
        .exec();

      similarProperties;
      return NextResponse.json(similarProperties);
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
