import { registerAs } from "@nestjs/config";
import Joi from "joi";

export const appConfigSchema = {
    DB_NAME: Joi.string()
        .required()
        .description("The name of the database to connect to"),
    DB_HOST: Joi.string()
        .required()
        .description("The MongoDB connection string for the database"),
};

const appConfig = registerAs("app", () => ({
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    validate: (config: Record<string, any>) => {
        const { error } = Joi.object(appConfigSchema).validate(config, {
            abortEarly: false,
            allowUnknown: true,
        });
        if (error) {
            throw new Error(`Configuration validation error: ${error.message}`);
        }
        return config;
    },
}));

export default appConfig;