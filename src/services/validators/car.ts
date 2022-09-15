import { z } from 'zod';

const carValidator = z.object({
  model: z.string().min(3),
  year: z.number().int().min(1900).max(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

export default carValidator;
