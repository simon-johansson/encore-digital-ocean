import {api} from "encore.dev/api";
import { SQLDatabase } from "encore.dev/storage/sqldb";

// Welcome to Encore!
// This is a simple "Hello World" project to get you started.
//
// To run it, execute "encore run" in your favorite shell.

// ==================================================================

// This is a simple REST API that responds with a personalized greeting.
// To call it, run in your terminal:
//
//	curl http://localhost:4000/hello/World
//
export const get = api(
  {expose: true, method: "GET", path: "/hello/:name"},
  async ({name}: { name: string }): Promise<Response> => {
    const msg = `Hello ${name}!`;
    return {message: msg};
  }
);

interface Response {
  message: string;
}

const mydb = new SQLDatabase("db", {
  migrations: "./migrations",
});

export const getUser = api(
  {expose: true, method: "GET", path: "/names/:id"},
  async ({id}: { id: number }): Promise<{ id: number; name: string }> => {
    return await mydb.queryRow`SELECT *
                               FROM users
                               WHERE id = ${id}` as { id: number; name: string };
  }
);
