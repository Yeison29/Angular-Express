import dotenv from "dotenv";
dotenv.config();
export const exports= {
    port : process.env.PORT || 3200,
    postgres : process.env.DB_URL_PG
}