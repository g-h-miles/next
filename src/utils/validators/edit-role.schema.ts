import { z } from 'zod';

// form zod validation schema
export const rolePermissionSchema = z.object({
  administrator: z.array(z.string()).optional(),
  manager: z.array(z.string()).optional(),
  sales: z.array(z.string()).optional(),
  support: z.array(z.string()).optional(),
  developer: z.array(z.string()).optional(),
  hrd: z.array(z.string()).optional(),
  restricteduser: z.array(z.string()).optional(),
  customer: z.array(z.string()).optional(),
});

// generate form types from zod validation schema
export type RolePermissionInput = z.infer<typeof rolePermissionSchema>;
