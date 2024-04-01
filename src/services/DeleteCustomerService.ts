import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Solicitação inválida");
    }

    const findCustomer = await prismaClient.cusmomer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não existe, verifique a id");
    }

    await prismaClient.cusmomer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Cliente deletado com sucesso!" };
  }
}

export { DeleteCustomerService };
