const { pgTable, serial, text, varchar } = require("drizzle-orm/pg-core");

<<<<<<< HEAD
export const JsonForms = pgTable("jsonForms", {
=======
export const jsonForms = pgTable("jsonForms", {
>>>>>>> aee7a6911333e526408943fa479c7930f2515d08
  id: serial("id").primaryKey(),
  jsonform: text("jsonform").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
});
