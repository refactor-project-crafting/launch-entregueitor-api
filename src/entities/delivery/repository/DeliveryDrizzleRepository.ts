import crypto from "node:crypto";
import { Id, WithoutId } from "../../../types.js";
import { Delivery, FileDelivery, TextDelivery, UrlDelivery } from "../types.js";
import DeliveryRepository from "./types.js";
import { convertDeliveryDtoToDelivery } from "../dto/mappers.js";
import { db } from "../../../database/index.js";
import { deliveries as deliveriesTable } from "../schema/deliveries.js";
import { and, eq, getTableColumns } from "drizzle-orm";
import { DeliveryDto } from "../dto/types.js";
import { exercises as exercisesTable } from "../../exercise/schema/exercises.js";

class DeliveryDrizzleRepository implements DeliveryRepository {
  public async getByChallenge(
    challengeNumber: number,
    exerciseId: Id,
    userId: Id,
    student?: string
  ): Promise<Delivery[]> {
    const deliveriesDto: DeliveryDto[] = await db
      .select({
        ...getTableColumns(deliveriesTable),
        exerciseName: exercisesTable.name,
      })
      .from(deliveriesTable)
      .innerJoin(
        exercisesTable,
        eq(deliveriesTable.exerciseId, exercisesTable.id)
      )
      .where(
        and(
          eq(deliveriesTable.studentId, student ? student : userId),
          eq(deliveriesTable.challenge, challengeNumber),
          eq(deliveriesTable.exerciseId, exerciseId)
        )
      );

    return deliveriesDto.map(convertDeliveryDtoToDelivery);
  }

  public async addTextDelivery(
    userId: Id,
    deliveryData: WithoutId<TextDelivery>
  ): Promise<TextDelivery> {
    const newDelivery: TextDelivery = {
      ...deliveryData,
      id: crypto.randomUUID(),
      studentId: userId,
      date: new Date(),
    };

    await db.insert(deliveriesTable).values({
      ...newDelivery,
      date: newDelivery.date.toISOString(),
    });

    return newDelivery;
  }

  public async addUrlDelivery(
    userId: Id,
    deliveryData: WithoutId<UrlDelivery>
  ): Promise<UrlDelivery> {
    const newDelivery: UrlDelivery = {
      ...deliveryData,
      id: crypto.randomUUID(),
      studentId: userId,
      date: new Date(),
    };

    await db.insert(deliveriesTable).values({
      ...newDelivery,
      date: newDelivery.date.toISOString(),
    });

    return newDelivery;
  }

  public async addFileDelivery(
    userId: Id,
    deliveryData: WithoutId<FileDelivery>
  ): Promise<FileDelivery> {
    const newDelivery: FileDelivery = {
      id: crypto.randomUUID(),
      studentId: userId,
      date: new Date(),
      challenge: deliveryData.challenge,
      exerciseId: deliveryData.exerciseId,
      type: "file",
      filename: deliveryData.filename,
    };

    await db
      .insert(deliveriesTable)
      .values({ ...newDelivery, date: newDelivery.date.toISOString() });

    return newDelivery;
  }
}

export default DeliveryDrizzleRepository;
