import { z } from 'zod';

const mongoIdValidator = z.object({
  id: z.string().regex(/[a-f0-9]{24}/gim),
});

export default mongoIdValidator;
