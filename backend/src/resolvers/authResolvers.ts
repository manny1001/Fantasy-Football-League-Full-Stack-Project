/* import { IResolvers } from "graphql-tools"; */
import jwt from "jsonwebtoken";
interface loginDTO {
  mobile: string;
  password: string;
}
const authResolver = {
  Mutation: {
    login: (_: any, { mobile, password }: loginDTO) => {
      if (!/^0\d{9}$/.test(mobile)) throw new Error("Invalid mobile number");
      if (!/^(?=.*[A-Z]).{6,}$/.test(password))
        throw new Error("Invalid password");

      const token = jwt.sign({ mobile }, "secret", { expiresIn: "1h" });
      return { token };
    },
  },
};

export default authResolver;
