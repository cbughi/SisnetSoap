import Dono from './app/models/Dono';

const services = {
  PaymentService: {
    PaymentServicePort: {
      async RegisterUser(params) {
        const { PersonName, PersonEmail, PersonDoc } = params;

        const donoExists = await Dono.findOne({
          where: { email: PersonEmail },
        });

        if (donoExists) {
          throw {
            Fault: {
              Reason: { Text: 'E-mail já cadastrado' },
            },
          };
        }

        const { token } = await Dono.create({
          nome: PersonName,
          email: PersonEmail,
          cnpj: PersonDoc,
        });

        return token;
      },
    },
  },
};

export default services;
