import { pgTable, text, timestamp, boolean, pgEnum, customType, PgNumericConfig } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const userRoleEnum = pgEnum("user_role", ["admin", "user"]);

// Taken From : https://github.com/drizzle-team/drizzle-orm/issues/1042#issuecomment-2224689025
export const numericCasted = customType<{
    data: number
    driverData: string
    config: PgNumericConfig
}>({
    dataType: (config) => {
        if (config?.precision && config?.scale) {
            return `numeric(${config.precision}, ${config.scale})`
        }
        return 'numeric'
    },
    fromDriver: (value: string) => Number.parseFloat(value), // note: precision loss for very large/small digits so area to refactor if needed
    toDriver: (value: number) => value.toString(),
});

export const user = pgTable("user", {
    id: text('id').primaryKey().$default(() => nanoid()),
    role: userRoleEnum('role').notNull().default('user'),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    image: text("image"),
    banned: boolean("banned").default(false),
    banReason: text('ban_reason'),
    banExpires: timestamp('ban_expires', { mode: 'date' }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
});

export const session = pgTable("session", {
    id: text('id').primaryKey().$default(() => nanoid()),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .$onUpdate(() => new Date())
        .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
    id: text('id').primaryKey().$default(() => nanoid()),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
        .$onUpdate(() => new Date())
        .notNull(),
});

export const verification = pgTable("verification", {
    id: text('id').primaryKey().$default(() => nanoid()),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
});