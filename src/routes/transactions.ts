import type { FastifyInstance } from "fastify"
import { knex } from "../database"

export async function transactionRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions').select('*')

    return transactions
  })
}
