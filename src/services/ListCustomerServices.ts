import prismaClient from "../prisma";

class ListCustomerServices {
  async execute() {
    const customers = await prismaClient.cusmomer.findMany();

    return customers;
  }
}

export { ListCustomerServices };
